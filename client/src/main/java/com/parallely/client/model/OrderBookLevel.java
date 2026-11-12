package com.parallely.client.model;

import java.util.List;

public record OrderBookLevel(
        double price,
        double totalVolume,
        int orderCount,
        List<Order> orders) {
}