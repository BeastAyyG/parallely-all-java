package com.parallely.client.model;

public record OrderInput(
        String id,
        String traderId,
        String traderName,
        OrderSide side,
        OrderType type,
        double price,
        double size,
        Long timestamp,
        String optionKey) {

    public OrderInput(String id, String traderId, String traderName, OrderSide side, OrderType type,
                      double price, double size) {
        this(id, traderId, traderName, side, type, price, size, null, null);
    }

    public OrderInput(String id, String traderId, String traderName, OrderSide side, OrderType type,
                      double price, double size, Long timestamp) {
        this(id, traderId, traderName, side, type, price, size, timestamp, null);
    }
}