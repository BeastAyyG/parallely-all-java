package com.parallely.client.model;

public enum ToolType {
    SELECT("select"),
    PEN("pen"),
    RECTANGLE("rectangle"),
    ELLIPSE("ellipse"),
    ARROW("arrow"),
    STICKY("sticky"),
    TEXT("text"),
    ERASER("eraser");

    private final String value;

    ToolType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static ToolType fromValue(String value) {
        for (ToolType tool : values()) {
            if (tool.value.equals(value)) {
                return tool;
            }
        }
        throw new IllegalArgumentException("Unknown tool type: " + value);
    }
}