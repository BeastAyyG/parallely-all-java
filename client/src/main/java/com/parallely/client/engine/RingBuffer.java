package com.parallely.client.engine;

import com.parallely.client.model.Order;
import com.parallely.client.model.RingSlot;
import com.parallely.client.model.SlotState;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public final class RingBuffer {

    public record Cursors(long producer, long journaler, long matching, long publisher) {
    }

    private static final int MIN_CAPACITY = 16;
    private static final int DEFAULT_CAPACITY = 64;
    private static final int DEFAULT_BATCH_SIZE = 4;

    private final int capacity;
    private final int mask;
    private final List<RingSlot> slots;
    private long producerCursor = -1;
    private long journalerCursor = -1;
    private long matchingCursor = -1;
    private long publisherCursor = -1;

    public RingBuffer() {
        this(DEFAULT_CAPACITY);
    }

    public RingBuffer(int capacity) {
        // Bit-based power-of-two rounding avoids Math.log floating point drift at exact powers.
        int minimum = Math.max(MIN_CAPACITY, capacity);
        int powerOfTwo = Integer.highestOneBit(minimum);
        this.capacity = powerOfTwo == minimum ? powerOfTwo : powerOfTwo << 1;
        this.mask = this.capacity - 1;
        this.slots = new ArrayList<>(this.capacity);
        for (int i = 0; i < this.capacity; i++) {
            slots.add(new RingSlot(i, -1, SlotState.FREE, null, 0));
        }
    }

    public int getCapacity() {
        return capacity;
    }

    public long publish(Order order) {
        long seq = ++producerCursor;
        RingSlot slot = slots.get((int) (seq & mask));
        slot.setSequence(seq);
        slot.setState(SlotState.PUBLISHED);
        slot.setPayload(order);
        slot.setTimestamp(System.currentTimeMillis());
        return seq;
    }

    public int stepJournaler() {
        return stepJournaler(DEFAULT_BATCH_SIZE);
    }

    public int stepJournaler(int batchSize) {
        int processed = 0;
        while (journalerCursor < producerCursor && processed < batchSize) {
            journalerCursor++;
            RingSlot slot = slots.get((int) (journalerCursor & mask));
            if (slot.getState() == SlotState.PUBLISHED) {
                slot.setState(SlotState.JOURNALED);
            }
            processed++;
        }
        return processed;
    }

    public int stepMatching() {
        return stepMatching(DEFAULT_BATCH_SIZE, null);
    }

    public int stepMatching(int batchSize) {
        return stepMatching(batchSize, null);
    }

    public int stepMatching(Consumer<Order> onMatch) {
        return stepMatching(DEFAULT_BATCH_SIZE, onMatch);
    }

    public int stepMatching(int batchSize, Consumer<Order> onMatch) {
        int processed = 0;
        while (matchingCursor < journalerCursor && processed < batchSize) {
            matchingCursor++;
            RingSlot slot = slots.get((int) (matchingCursor & mask));
            if (slot.getState() == SlotState.JOURNALED && slot.getPayload() != null) {
                slot.setState(SlotState.MATCHED);
                if (onMatch != null) {
                    onMatch.accept(slot.getPayload());
                }
            }
            processed++;
        }
        return processed;
    }

    public int stepPublisher() {
        return stepPublisher(DEFAULT_BATCH_SIZE);
    }

    public int stepPublisher(int batchSize) {
        int processed = 0;
        while (publisherCursor < matchingCursor && processed < batchSize) {
            publisherCursor++;
            RingSlot slot = slots.get((int) (publisherCursor & mask));
            if (slot.getState() == SlotState.MATCHED) {
                slot.setState(SlotState.DISPATCHED);
            }
            processed++;
        }
        return processed;
    }

    public List<RingSlot> getSlots() {
        // Live view: the returned slot objects mutate in place as pipeline stages advance.
        return slots;
    }

    public Cursors getCursors() {
        return new Cursors(producerCursor, journalerCursor, matchingCursor, publisherCursor);
    }

    public int getBufferUtilization() {
        if (producerCursor < 0) {
            return 0;
        }
        long slowestConsumer = Math.min(journalerCursor, Math.min(matchingCursor, publisherCursor));
        long inFlight = Math.max(0, producerCursor - slowestConsumer);
        return (int) Math.min(100, Math.round(inFlight * 100.0 / capacity));
    }

    public void reset() {
        producerCursor = -1;
        journalerCursor = -1;
        matchingCursor = -1;
        publisherCursor = -1;
        for (RingSlot slot : slots) {
            slot.setSequence(-1);
            slot.setState(SlotState.FREE);
            slot.setPayload(null);
            slot.setTimestamp(0);
        }
    }
}