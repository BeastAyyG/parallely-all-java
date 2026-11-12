package com.parallely.client.engine;

import com.parallely.client.model.Order;
import com.parallely.client.model.OrderBookState;
import com.parallely.client.model.OrderInput;
import com.parallely.client.model.OrderSide;
import com.parallely.client.model.OrderStatus;
import com.parallely.client.model.OrderType;
import com.parallely.client.model.RingSlot;
import com.parallely.client.model.SlotState;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class MatchingEngineTest {

    private static final double DELTA = 1e-9;

    @Test
    void matchingEnginePlacesNonMatchingLimitOrdersInBook() {
        MatchingEngine engine = new MatchingEngine(100.0);

        MatchingEngine.MatchResult buyRes = engine.processOrder(new OrderInput(
                "B1", "T1", "Alice", OrderSide.BUY, OrderType.LIMIT, 99.0, 10));

        assertEquals(0, buyRes.trades().size());
        assertNotNull(buyRes.remainingOrder());
        assertEquals(1, engine.getActiveOrderCount());

        MatchingEngine.MatchResult sellRes = engine.processOrder(new OrderInput(
                "S1", "T2", "Bob", OrderSide.SELL, OrderType.LIMIT, 101.0, 5));

        assertEquals(0, sellRes.trades().size());
        assertEquals(2, engine.getActiveOrderCount());

        OrderBookState state = engine.getOrderBookState();
        assertEquals(1, state.bids().size());
        assertEquals(99.0, state.bids().get(0).price(), DELTA);
        assertEquals(10, state.bids().get(0).totalVolume(), DELTA);
        assertEquals(1, state.asks().size());
        assertEquals(101.0, state.asks().get(0).price(), DELTA);
        assertEquals(5, state.asks().get(0).totalVolume(), DELTA);
        assertEquals(2.0, state.spread(), DELTA);
    }

    @Test
    void matchingEngineEnforcesPriceTimePriorityFifoMatching() {
        MatchingEngine engine = new MatchingEngine(100.0);

        engine.processOrder(new OrderInput(
                "S1", "T1", "Alice", OrderSide.SELL, OrderType.LIMIT, 100.0, 10, 1000L));

        engine.processOrder(new OrderInput(
                "S2", "T2", "Bob", OrderSide.SELL, OrderType.LIMIT, 100.0, 10, 1001L));

        MatchingEngine.MatchResult res = engine.processOrder(new OrderInput(
                "B1", "T3", "Charlie", OrderSide.BUY, OrderType.LIMIT, 100.0, 15, 1002L));

        assertEquals(2, res.trades().size());
        assertEquals("S1", res.trades().get(0).sellOrderId());
        assertEquals(10, res.trades().get(0).size(), DELTA);
        assertEquals("S2", res.trades().get(1).sellOrderId());
        assertEquals(5, res.trades().get(1).size(), DELTA);

        OrderBookState state = engine.getOrderBookState();
        assertEquals(0, state.bids().size());
        assertEquals(1, state.asks().size());
        assertEquals(5, state.asks().get(0).totalVolume(), DELTA);
    }

    @Test
    void matchingEngineHandlesMarketOrderSweepsAndCancellations() {
        MatchingEngine engine = new MatchingEngine(100.0);

        engine.processOrder(new OrderInput(
                "S1", "T1", "Alice", OrderSide.SELL, OrderType.LIMIT, 100.0, 10));

        engine.processOrder(new OrderInput(
                "S2", "T2", "Bob", OrderSide.SELL, OrderType.LIMIT, 102.0, 10));

        MatchingEngine.MatchResult marketBuy = engine.processOrder(new OrderInput(
                "MB1", "T3", "MarketTrader", OrderSide.BUY, OrderType.MARKET, 0, 15));

        assertEquals(2, marketBuy.trades().size());
        assertEquals(100.0, marketBuy.trades().get(0).price(), DELTA);
        assertEquals(10, marketBuy.trades().get(0).size(), DELTA);
        assertEquals(102.0, marketBuy.trades().get(1).price(), DELTA);
        assertEquals(5, marketBuy.trades().get(1).size(), DELTA);

        boolean cancelSuccess = engine.cancelOrder("S2");
        assertTrue(cancelSuccess);
        assertEquals(0, engine.getActiveOrderCount());
    }

    @Test
    void disruptorRingBufferSequenceIndexingAndStageCursors() {
        RingBuffer ring = new RingBuffer(16);
        assertEquals(16, ring.getCapacity());

        Order mockOrder = new Order("O1", "T1", "Alice", OrderSide.BUY, OrderType.LIMIT,
                100, 1, 0, System.currentTimeMillis(), OrderStatus.NEW);

        long seq0 = ring.publish(mockOrder);
        assertEquals(0, seq0);

        List<RingSlot> slots = ring.getSlots();
        assertEquals(SlotState.PUBLISHED, slots.get(0).getState());
        assertEquals(0, slots.get(0).getSequence());

        int journaled = ring.stepJournaler(1);
        assertEquals(1, journaled);
        assertEquals(SlotState.JOURNALED, slots.get(0).getState());

        AtomicReference<Order> matchedOrder = new AtomicReference<>();
        int matched = ring.stepMatching(1, matchedOrder::set);
        assertEquals(1, matched);
        assertEquals(SlotState.MATCHED, slots.get(0).getState());
        assertNotNull(matchedOrder.get());

        int published = ring.stepPublisher(1);
        assertEquals(1, published);
        assertEquals(SlotState.DISPATCHED, slots.get(0).getState());
    }
}