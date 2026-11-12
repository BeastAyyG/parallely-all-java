package com.parallely.client.model;

public record DisruptorMetrics(
        long totalProcessed,
        double throughputOpsSec,
        double avgLatencyUs,
        double p99LatencyUs,
        double maxLatencyUs,
        int ringCapacity,
        long producerCursor,
        long consumerCursor,
        double ringBufferUsage) {
}