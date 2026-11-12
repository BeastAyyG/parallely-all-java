package com.parallely.client.engine;

import com.parallely.client.model.Order;
import com.parallely.client.model.OrderBookLevel;
import com.parallely.client.model.OrderBookState;
import com.parallely.client.model.OrderInput;
import com.parallely.client.model.OrderSide;
import com.parallely.client.model.OrderStatus;
import com.parallely.client.model.OrderType;
import com.parallely.client.model.Trade;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Deque;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public final class MatchingEngine {

    public record MatchResult(List<Trade> trades, Order remainingOrder) {
    }

    private record BookEntry(Order order, double price, OrderSide side) {
    }

    private static final double DEFAULT_INITIAL_MID_PRICE = 100.0;
    private static final int DEFAULT_MAX_DEPTH = 8;
    private static final int MAX_RECENT_TRADES = 200;

    private final Map<Double, List<Order>> bids = new LinkedHashMap<>();
    private final Map<Double, List<Order>> asks = new LinkedHashMap<>();
    private final Map<String, BookEntry> orderMap = new LinkedHashMap<>();
    private final Deque<Trade> trades = new ArrayDeque<>();
    private double lastTradePrice = DEFAULT_INITIAL_MID_PRICE;
    private long lastTradeTimestamp = System.currentTimeMillis();
    private long tradeCounter = 0;

    public MatchingEngine() {
        this(DEFAULT_INITIAL_MID_PRICE);
    }

    public MatchingEngine(double initialMidPrice) {
        this.lastTradePrice = initialMidPrice;
    }

    public MatchResult processOrder(OrderInput orderInput) {
        long timestamp = orderInput.timestamp() != null ? orderInput.timestamp() : System.currentTimeMillis();
        Order order = new Order(orderInput.id(), orderInput.traderId(), orderInput.traderName(),
                orderInput.side(), orderInput.type(), orderInput.price(), orderInput.size(),
                0, timestamp, OrderStatus.NEW, orderInput.optionKey());

        List<Trade> executedTrades = new ArrayList<>();

        if (order.getSide() == OrderSide.BUY) {
            matchBuyOrder(order, executedTrades);
        } else {
            matchSellOrder(order, executedTrades);
        }

        if (order.getFilledSize() == order.getSize()) {
            order.setStatus(OrderStatus.FILLED);
            return new MatchResult(executedTrades, null);
        }

        if (order.getType() == OrderType.MARKET) {
            order.setStatus(order.getFilledSize() > 0 ? OrderStatus.PARTIALLY_FILLED : OrderStatus.REJECTED);
            return new MatchResult(executedTrades, null);
        }

        order.setStatus(order.getFilledSize() > 0 ? OrderStatus.PARTIALLY_FILLED : OrderStatus.NEW);
        insertIntoBook(order);
        return new MatchResult(executedTrades, order);
    }

    private void matchBuyOrder(Order incomingBuy, List<Trade> executedTrades) {
        List<Double> sortedAskPrices = new ArrayList<>(asks.keySet());
        sortedAskPrices.sort(Comparator.naturalOrder());

        for (double askPrice : sortedAskPrices) {
            if (incomingBuy.getType() == OrderType.LIMIT && askPrice > incomingBuy.getPrice()) {
                break;
            }

            List<Order> ordersAtPrice = asks.get(askPrice);
            if (ordersAtPrice == null || ordersAtPrice.isEmpty()) {
                continue;
            }

            int i = 0;
            while (i < ordersAtPrice.size() && incomingBuy.getFilledSize() < incomingBuy.getSize()) {
                Order restingAsk = ordersAtPrice.get(i);
                double matchQty = Math.min(incomingBuy.getSize() - incomingBuy.getFilledSize(),
                        restingAsk.getSize() - restingAsk.getFilledSize());
                incomingBuy.setFilledSize(incomingBuy.getFilledSize() + matchQty);
                restingAsk.setFilledSize(restingAsk.getFilledSize() + matchQty);

                Trade trade = new Trade("T-" + (++tradeCounter), incomingBuy.getId(), restingAsk.getId(),
                        incomingBuy.getTraderName(), restingAsk.getTraderName(), askPrice, matchQty,
                        System.currentTimeMillis(), OrderSide.BUY,
                        incomingBuy.getOptionKey() != null ? incomingBuy.getOptionKey() : restingAsk.getOptionKey());
                recordTrade(trade, executedTrades, askPrice);

                if (restingAsk.getFilledSize() == restingAsk.getSize()) {
                    restingAsk.setStatus(OrderStatus.FILLED);
                    orderMap.remove(restingAsk.getId());
                    ordersAtPrice.remove(i);
                } else {
                    restingAsk.setStatus(OrderStatus.PARTIALLY_FILLED);
                    i++;
                }
            }

            if (ordersAtPrice.isEmpty()) {
                asks.remove(askPrice);
            }

            if (incomingBuy.getFilledSize() >= incomingBuy.getSize()) {
                break;
            }
        }
    }

    private void matchSellOrder(Order incomingSell, List<Trade> executedTrades) {
        List<Double> sortedBidPrices = new ArrayList<>(bids.keySet());
        sortedBidPrices.sort(Comparator.reverseOrder());

        for (double bidPrice : sortedBidPrices) {
            if (incomingSell.getType() == OrderType.LIMIT && bidPrice < incomingSell.getPrice()) {
                break;
            }

            List<Order> ordersAtPrice = bids.get(bidPrice);
            if (ordersAtPrice == null || ordersAtPrice.isEmpty()) {
                continue;
            }

            int i = 0;
            while (i < ordersAtPrice.size() && incomingSell.getFilledSize() < incomingSell.getSize()) {
                Order restingBid = ordersAtPrice.get(i);
                double matchQty = Math.min(incomingSell.getSize() - incomingSell.getFilledSize(),
                        restingBid.getSize() - restingBid.getFilledSize());
                incomingSell.setFilledSize(incomingSell.getFilledSize() + matchQty);
                restingBid.setFilledSize(restingBid.getFilledSize() + matchQty);

                Trade trade = new Trade("T-" + (++tradeCounter), restingBid.getId(), incomingSell.getId(),
                        restingBid.getTraderName(), incomingSell.getTraderName(), bidPrice, matchQty,
                        System.currentTimeMillis(), OrderSide.SELL,
                        incomingSell.getOptionKey() != null ? incomingSell.getOptionKey() : restingBid.getOptionKey());
                recordTrade(trade, executedTrades, bidPrice);

                if (restingBid.getFilledSize() == restingBid.getSize()) {
                    restingBid.setStatus(OrderStatus.FILLED);
                    orderMap.remove(restingBid.getId());
                    ordersAtPrice.remove(i);
                } else {
                    restingBid.setStatus(OrderStatus.PARTIALLY_FILLED);
                    i++;
                }
            }

            if (ordersAtPrice.isEmpty()) {
                bids.remove(bidPrice);
            }

            if (incomingSell.getFilledSize() >= incomingSell.getSize()) {
                break;
            }
        }
    }

    private void recordTrade(Trade trade, List<Trade> executedTrades, double executionPrice) {
        executedTrades.add(trade);
        trades.addFirst(trade);
        if (trades.size() > MAX_RECENT_TRADES) {
            trades.removeLast();
        }
        lastTradePrice = executionPrice;
        lastTradeTimestamp = trade.timestamp();
    }

    private void insertIntoBook(Order order) {
        Map<Double, List<Order>> book = order.getSide() == OrderSide.BUY ? bids : asks;
        book.computeIfAbsent(order.getPrice(), price -> new ArrayList<>()).add(order);
        orderMap.put(order.getId(), new BookEntry(order, order.getPrice(), order.getSide()));
    }

    public boolean cancelOrder(String orderId) {
        BookEntry entry = orderMap.get(orderId);
        if (entry == null) {
            return false;
        }

        Map<Double, List<Order>> book = entry.side() == OrderSide.BUY ? bids : asks;
        List<Order> ordersAtPrice = book.get(entry.price());
        if (ordersAtPrice == null) {
            return false;
        }

        for (int idx = 0; idx < ordersAtPrice.size(); idx++) {
            if (ordersAtPrice.get(idx).getId().equals(orderId)) {
                Order removed = ordersAtPrice.remove(idx);
                removed.setStatus(OrderStatus.CANCELLED);
                orderMap.remove(orderId);
                if (ordersAtPrice.isEmpty()) {
                    book.remove(entry.price());
                }
                return true;
            }
        }
        return false;
    }

    public OrderBookState getOrderBookState() {
        return getOrderBookState(DEFAULT_MAX_DEPTH);
    }

    public OrderBookState getOrderBookState(int maxDepth) {
        List<OrderBookLevel> bidsLevels = buildLevels(bids, maxDepth, Comparator.reverseOrder());
        List<OrderBookLevel> asksLevels = buildLevels(asks, maxDepth, Comparator.naturalOrder());

        double bestBid = !bidsLevels.isEmpty() ? bidsLevels.get(0).price() : lastTradePrice;
        double bestAsk = !asksLevels.isEmpty() ? asksLevels.get(0).price() : lastTradePrice;
        double spread = Math.max(0, roundToCents(bestAsk - bestBid));
        double midPrice = roundToCents((bestBid + bestAsk) / 2);

        return new OrderBookState(bidsLevels, asksLevels, lastTradePrice, lastTradeTimestamp, midPrice, spread);
    }

    private static List<OrderBookLevel> buildLevels(Map<Double, List<Order>> book, int maxDepth,
                                                    Comparator<Double> priceOrder) {
        List<Double> prices = new ArrayList<>(book.keySet());
        prices.sort(priceOrder);
        int depth = Math.max(0, Math.min(maxDepth, prices.size()));
        List<OrderBookLevel> levels = new ArrayList<>();
        for (double price : prices.subList(0, depth)) {
            List<Order> orders = book.getOrDefault(price, List.of());
            double volume = 0;
            for (Order order : orders) {
                volume += order.getSize() - order.getFilledSize();
            }
            levels.add(new OrderBookLevel(price, volume, orders.size(), new ArrayList<>(orders)));
        }
        return levels;
    }

    public List<Trade> getRecentTrades() {
        return new ArrayList<>(trades);
    }

    public int getActiveOrderCount() {
        return orderMap.size();
    }

    public void clear() {
        bids.clear();
        asks.clear();
        orderMap.clear();
        trades.clear();
    }

    private static double roundToCents(double value) {
        // Exact-binary-value HALF_UP reproduces JS Number(x.toFixed(2)); BigDecimal.valueOf would not.
        return new BigDecimal(value).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }
}