package com.parallely.client.model;

import java.util.List;

public record CanvasElement(
        String id,
        ElementType type,
        List<Point> points,
        double x,
        double y,
        Double width,
        Double height,
        String color,
        String fillColor,
        double strokeWidth,
        String text,
        String authorId,
        String authorName,
        String authorColor,
        long updatedAt) {

    public CanvasElement(String id, ElementType type, double x, double y, String color,
                         double strokeWidth, String authorId, String authorName,
                         String authorColor, long updatedAt) {
        this(id, type, null, x, y, null, null, color, null, strokeWidth, null,
                authorId, authorName, authorColor, updatedAt);
    }
}