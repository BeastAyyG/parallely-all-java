package com.parallely.client.model;

public final class RingSlot {
    private final int index;
    private long sequence;
    private SlotState state;
    private Order payload;
    private long timestamp;

    public RingSlot(int index, long sequence, SlotState state, Order payload, long timestamp) {
        this.index = index;
        this.sequence = sequence;
        this.state = state;
        this.payload = payload;
        this.timestamp = timestamp;
    }

    public int getIndex() {
        return index;
    }

    public long getSequence() {
        return sequence;
    }

    public void setSequence(long sequence) {
        this.sequence = sequence;
    }

    public SlotState getState() {
        return state;
    }

    public void setState(SlotState state) {
        this.state = state;
    }

    public Order getPayload() {
        return payload;
    }

    public void setPayload(Order payload) {
        this.payload = payload;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}