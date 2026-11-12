package com.parallely.client.model;

import java.util.List;

public record OrderBookState(
        List<OrderBookLevel> bids,
        List<OrderBookLevel> asks,
        double lastTradePrice,
        long lastTradeTimestamp,
        double midPrice,
        double spread) {
}