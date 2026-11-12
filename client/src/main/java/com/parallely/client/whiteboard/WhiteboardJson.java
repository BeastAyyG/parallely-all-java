package com.parallely.client.whiteboard;

import com.parallely.client.js.Json;
import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.ElementType;
import com.parallely.client.model.Point;

import java.util.ArrayList;
import java.util.List;

final class WhiteboardJson {
    private WhiteboardJson() {
    }

    static Json.Obj toJson(CanvasElement el) {
        Json.Obj o = Json.obj();
        o.setStr("id", el.id());
        o.setStr("type", el.type().getValue());
        if (el.points() != null) {
            Json.Arr pts = Json.arr();
            for (Point p : el.points()) {
                Json.Obj po = Json.obj();
                po.setNum("x", p.x());
                po.setNum("y", p.y());
                Json.push(pts, po);
            }
            o.set("points", pts);
        }
        o.setNum("x", el.x());
        o.setNum("y", el.y());
        if (el.width() != null) {
            o.setNum("width", el.width());
        }
        if (el.height() != null) {
            o.setNum("height", el.height());
        }
        o.setStr("color", el.color());
        if (el.fillColor() != null) {
            o.setStr("fillColor", el.fillColor());
        }
        o.setNum("strokeWidth", el.strokeWidth());
        if (el.text() != null) {
            o.setStr("text", el.text());
        }
        o.setStr("authorId", el.authorId());
        o.setStr("authorName", el.authorName());
        o.setStr("authorColor", el.authorColor());
        o.setNum("updatedAt", el.updatedAt());
        return o;
    }

    static Json.Arr toJsonList(List<CanvasElement> elements) {
        Json.Arr arr = Json.arr();
        for (CanvasElement el : elements) {
            Json.push(arr, toJson(el));
        }
        return arr;
    }

    static CanvasElement fromJson(Json.Obj o) {
        List<Point> points = null;
        Json.Arr pts = Json.getArr(o, "points");
        if (pts != null) {
            points = new ArrayList<>();
            for (int i = 0; i < Json.len(pts); i++) {
                Json.Obj po = Json.arrObj(pts, i);
                points.add(new Point(Json.num(po, "x"), Json.num(po, "y")));
            }
        }
        Double width = Json.has(o, "width") ? Json.num(o, "width") : null;
        Double height = Json.has(o, "height") ? Json.num(o, "height") : null;
        String fillColor = Json.has(o, "fillColor") ? Json.str(o, "fillColor") : null;
        String text = Json.has(o, "text") ? Json.str(o, "text") : null;
        return new CanvasElement(
                Json.str(o, "id"),
                ElementType.fromValue(Json.str(o, "type")),
                points,
                Json.num(o, "x"),
                Json.num(o, "y"),
                width,
                height,
                Json.str(o, "color"),
                fillColor,
                Json.num(o, "strokeWidth"),
                text,
                Json.str(o, "authorId"),
                Json.str(o, "authorName"),
                Json.str(o, "authorColor"),
                (long) Json.num(o, "updatedAt"));
    }
}