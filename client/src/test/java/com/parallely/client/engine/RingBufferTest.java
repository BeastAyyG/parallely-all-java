package com.parallely.client.engine;

import com.parallely.client.model.Order;
import com.parallely.client.model.OrderSide;
import com.parallely.client.model.OrderStatus;
import com.parallely.client.model.OrderType;
import com.parallely.client.model.RingSlot;
import com.parallely.client.model.SlotState;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertSame;

public class RingBufferTest {

    private static Order order(String id) {
        return new Order(id, "T1", "Alice", OrderSide.BUY, OrderType.LIMIT,
                100, 1, 0, System.currentTimeMillis(), OrderStatus.NEW);
    }

    @Test
    void capacityIsRoundedUpToPowerOfTwoWithMinimumSixteen() {
        assertEquals(64, new RingBuffer().getCapacity());
        assertEquals(16, new RingBuffer(1).getCapacity());
        assertEquals(16, new RingBuffer(16).getCapacity());
        assertEquals(32, new RingBuffer(17).getCapacity());
        assertEquals(128, new RingBuffer(100).getCapacity());
    }

    @Test
    void publishWrapsAroundUsingSequenceMask() {
        RingBuffer ring = new RingBuffer(16);
        List<Order> orders = new ArrayList<>();
        long lastSeq = -1;
        for (int i = 0; i < 20; i++) {
            Order o = order("O" + i);
            orders.add(o);
            lastSeq = ring.publish(o);
        }
        assertEquals(19, lastSeq);
        assertEquals(19, ring.getCursors().producer());

        RingSlot wrapped = ring.getSlots().get(3);
        assertEquals(19, wrapped.getSequence());
        assertEquals(SlotState.PUBLISHED, wrapped.getState());
        assertSame(orders.get(19), wrapped.getPayload());
    }

    @Test
    void stagesDefaultToBatchSizeFourAndRespectCursorOrdering() {
        RingBuffer ring = new RingBuffer(16);
        for (int i = 0; i < 10; i++) {
            ring.publish(order("O" + i));
        }

        assertEquals(4, ring.stepJournaler());
        assertEquals(4, ring.stepMatching());
        assertEquals(4, ring.stepPublisher());

        RingBuffer.Cursors cursors = ring.getCursors();
        assertEquals(9, cursors.producer());
        assertEquals(3, cursors.journaler());
        assertEquals(3, cursors.matching());
        assertEquals(3, cursors.publisher());

        assertEquals(0, ring.stepMatching(100));
    }

    @Test
    void matchingCallbackReceivesJournaledOrdersInSequenceOrder() {
        RingBuffer ring = new RingBuffer(16);
        ring.publish(order("O0"));
        ring.publish(order("O1"));
        ring.publish(order("O2"));
        ring.stepJournaler(3);

        List<Order> matchedOrders = new ArrayList<>();
        int matched = ring.stepMatching(3, matchedOrders::add);

        assertEquals(3, matched);
        assertEquals(List.of("O0", "O1", "O2"),
                matchedOrders.stream().map(Order::getId).toList());
        for (RingSlot slot : ring.getSlots().subList(0, 3)) {
            assertEquals(SlotState.MATCHED, slot.getState());
        }
    }

    @Test
    void bufferUtilizationTracksSlowestConsumerAndCapsAtHundred() {
        RingBuffer ring = new RingBuffer(16);
        assertEquals(0, ring.getBufferUtilization());

        for (int i = 0; i < 8; i++) {
            ring.publish(order("O" + i));
        }
        assertEquals(50, ring.getBufferUtilization());

        ring.stepJournaler(8);
        assertEquals(50, ring.getBufferUtilization());
        ring.stepMatching(8);
        ring.stepPublisher(8);
        assertEquals(0, ring.getBufferUtilization());

        for (int i = 0; i < 32; i++) {
            ring.publish(order("X" + i));
        }
        assertEquals(100, ring.getBufferUtilization());
    }

    @Test
    void resetRestoresCursorsAndFreeSlots() {
        RingBuffer ring = new RingBuffer(16);
        ring.publish(order("O0"));
        ring.stepJournaler(1);
        ring.stepMatching(1);
        ring.stepPublisher(1);

        ring.reset();

        RingBuffer.Cursors cursors = ring.getCursors();
        assertEquals(-1, cursors.producer());
        assertEquals(-1, cursors.journaler());
        assertEquals(-1, cursors.matching());
        assertEquals(-1, cursors.publisher());
        assertEquals(0, ring.getBufferUtilization());

        for (RingSlot slot : ring.getSlots()) {
            assertEquals(-1, slot.getSequence());
            assertEquals(SlotState.FREE, slot.getState());
            assertNull(slot.getPayload());
            assertEquals(0, slot.getTimestamp());
        }

        assertEquals(0, ring.publish(order("O1")));
    }
}