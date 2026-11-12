package com.parallely.client.whiteboard;

import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.ElementType;
import com.parallely.client.model.Point;

import java.util.ArrayList;
import java.util.List;

final class Elements {
    private Elements() {
    }

    static List<CanvasElement> seed() {
        long now = System.currentTimeMillis();
        List<CanvasElement> seed = new ArrayList<>();
        seed.add(new CanvasElement("seed-node-1", ElementType.RECTANGLE, null, 180, 140, 200.0, 80.0,
                "#38BDF8", "rgba(56, 189, 248, 0.12)", 2, "Netty TCP Gateway\n(10k Clients)",
                "system", "Architect", "#38BDF8", now));
        seed.add(new CanvasElement("seed-arrow-1", ElementType.ARROW, pointsOf(new Point(380, 180), new Point(480, 180)),
                380, 180, null, null, "#94A3B8", null, 2, null, "system", "Architect", "#94A3B8", now));
        seed.add(new CanvasElement("seed-node-2", ElementType.ELLIPSE, null, 480, 130, 220.0, 100.0,
                "#818CF8", "rgba(129, 140, 248, 0.12)", 2, "LMAX RingBuffer\n(Power-of-2 LockFree)",
                "system", "Architect", "#818CF8", now));
        seed.add(new CanvasElement("seed-arrow-2", ElementType.ARROW, pointsOf(new Point(700, 180), new Point(800, 180)),
                700, 180, null, null, "#94A3B8", null, 2, null, "system", "Architect", "#94A3B8", now));
        seed.add(new CanvasElement("seed-node-3", ElementType.RECTANGLE, null, 800, 140, 210.0, 80.0,
                "#34D399", "rgba(52, 211, 153, 0.12)", 2, "Single-Thread Core\nFIFO Price-Time Matcher",
                "system", "Architect", "#34D399", now));
        seed.add(new CanvasElement("seed-sticky-1", ElementType.STICKY, null, 520, 280, 170.0, 130.0,
                "#FEF08A", null, 1, "Rule #1:\nZero memory allocation on matching fast-path! Pre-allocate orders.",
                "bot-1", "Martin Fowler", "#F59E0B", now));
        return seed;
    }

    static List<Point> pointsOf(Point... pts) {
        List<Point> list = new ArrayList<>();
        for (Point p : pts) {
            list.add(p);
        }
        return list;
    }

    static List<CanvasElement> appended(List<CanvasElement> list, CanvasElement el) {
        List<CanvasElement> next = new ArrayList<>(list);
        next.add(el);
        return next;
    }

    static List<CanvasElement> withoutId(List<CanvasElement> list, String id) {
        List<CanvasElement> next = new ArrayList<>();
        for (CanvasElement el : list) {
            if (!el.id().equals(id)) {
                next.add(el);
            }
        }
        return next;
    }

    static int indexOfId(List<CanvasElement> list, String id) {
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).id().equals(id)) {
                return i;
            }
        }
        return -1;
    }

    static CanvasElement findById(List<CanvasElement> list, String id) {
        int idx = indexOfId(list, id);
        return idx >= 0 ? list.get(idx) : null;
    }

    static CanvasElement withText(CanvasElement el, String text) {
        return new CanvasElement(el.id(), el.type(), el.points(), el.x(), el.y(), el.width(), el.height(),
                el.color(), el.fillColor(), el.strokeWidth(), text, el.authorId(), el.authorName(), el.authorColor(), el.updatedAt());
    }

    static CanvasElement withPoints(CanvasElement el, List<Point> points) {
        return new CanvasElement(el.id(), el.type(), points, el.x(), el.y(), el.width(), el.height(),
                el.color(), el.fillColor(), el.strokeWidth(), el.text(), el.authorId(), el.authorName(), el.authorColor(), el.updatedAt());
    }

    static CanvasElement withUpdatedAt(CanvasElement el, long updatedAt) {
        return new CanvasElement(el.id(), el.type(), el.points(), el.x(), el.y(), el.width(), el.height(),
                el.color(), el.fillColor(), el.strokeWidth(), el.text(), el.authorId(), el.authorName(), el.authorColor(), updatedAt);
    }
}