package com.parallely.client.model;

public enum ElementType {
    STROKE("stroke"),
    RECTANGLE("rectangle"),
    ELLIPSE("ellipse"),
    ARROW("arrow"),
    STICKY("sticky"),
    TEXT("text");

    private final String value;

    ElementType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static ElementType fromValue(String value) {
        for (ElementType type : values()) {
            if (type.value.equals(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("Unknown element type: " + value);
    }
}