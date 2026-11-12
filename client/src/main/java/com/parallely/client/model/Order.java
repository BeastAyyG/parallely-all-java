package com.parallely.client.model;

public final class Order {
    private final String id;
    private final String traderId;
    private final String traderName;
    private final OrderSide side;
    private final OrderType type;
    private final double price;
    private final double size;
    private double filledSize;
    private final long timestamp;
    private OrderStatus status;
    private final String optionKey;

    public Order(String id, String traderId, String traderName, OrderSide side, OrderType type,
                 double price, double size, double filledSize, long timestamp, OrderStatus status,
                 String optionKey) {
        this.id = id;
        this.traderId = traderId;
        this.traderName = traderName;
        this.side = side;
        this.type = type;
        this.price = price;
        this.size = size;
        this.filledSize = filledSize;
        this.timestamp = timestamp;
        this.status = status;
        this.optionKey = optionKey;
    }

    public Order(String id, String traderId, String traderName, OrderSide side, OrderType type,
                 double price, double size, double filledSize, long timestamp, OrderStatus status) {
        this(id, traderId, traderName, side, type, price, size, filledSize, timestamp, status, null);
    }

    public String getId() {
        return id;
    }

    public String getTraderId() {
        return traderId;
    }

    public String getTraderName() {
        return traderName;
    }

    public OrderSide getSide() {
        return side;
    }

    public OrderType getType() {
        return type;
    }

    public double getPrice() {
        return price;
    }

    public double getSize() {
        return size;
    }

    public double getFilledSize() {
        return filledSize;
    }

    public void setFilledSize(double filledSize) {
        this.filledSize = filledSize;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public String getOptionKey() {
        return optionKey;
    }
}