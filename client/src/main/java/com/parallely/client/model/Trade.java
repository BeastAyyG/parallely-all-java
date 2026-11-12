package com.parallely.client.model;

public record Trade(
        String id,
        String buyOrderId,
        String sellOrderId,
        String buyerName,
        String sellerName,
        double price,
        double size,
        long timestamp,
        OrderSide aggressiveSide,
        String optionKey) {
}