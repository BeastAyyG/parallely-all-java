package com.parallely.client.whiteboard;

import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.Collaborator;
import com.parallely.client.model.ElementType;
import com.parallely.client.model.Point;
import com.parallely.client.model.ToolType;

import java.util.List;
import java.util.Random;

public final class CanvasModel {

    public static final List<String> BOT_NAMES = List.of(
            "Ada Lovelace",
            "Martin Fowler",
            "Leslie Lamport",
            "Barbara Liskov",
            "Donald Knuth",
            "Grace Hopper",
            "Ken Thompson",
            "Linus Torvalds",
            "Margaret Hamilton",
            "Edsger Dijkstra",
            "James Gosling",
            "Alan Kay");

    public static final List<String> BOT_COLORS = List.of(
            "#3B82F6",
            "#10B981",
            "#8B5CF6",
            "#F59E0B",
            "#EC4899",
            "#06B6D4",
            "#F97316",
            "#14B8A6");

    public static final List<String> BOT_STICKY_IDEAS = List.of(
            "Zero-GC RingBuffer: pre-allocated event objects prevent JVM stop-the-world pauses",
            "Cache line padding: 128 bytes around Sequencer head/tail stops false sharing",
            "Mechanical Sympathy: align data access with L1/L2 hardware prefetchers",
            "Single-writer principle: 1 thread per OrderBook removes all lock contention",
            "Disruptor DSL: Journaler & Replicator run in parallel before Matching logic",
            "Project Loom virtual threads handle thousands of concurrent client TCP sockets",
            "Price-Time Priority: O(1) level lookup + FIFO queue for fair executions",
            "Aeron IPC transport: zero-copy shared memory queues for < 100ns latency",
            "Multiple-Choice auction: dynamic token pricing reaches Nash consensus",
            "JMH Benchmark: measuring p99.9 latency under 50,000 orders/sec load");

    public record ArchNode(String label, ElementType type, String color) {
    }

    public record Bounds(double width, double height) {
    }

    public static final List<ArchNode> BOT_ARCH_NODES = List.of(
            new ArchNode("Client Gateway (Netty)", ElementType.RECTANGLE, "#38BDF8"),
            new ArchNode("LMAX RingBuffer (1M Slots)", ElementType.ELLIPSE, "#818CF8"),
            new ArchNode("WAL Journaler (RAID 10)", ElementType.RECTANGLE, "#F472B6"),
            new ArchNode("Matching Engine (Core 0)", ElementType.RECTANGLE, "#34D399"),
            new ArchNode("Market Data Feed (UDP)", ElementType.ELLIPSE, "#FBBF24"));

    private static final double DEFAULT_HIT_TOLERANCE = 10;
    private static final double DEFAULT_SHAPE_WIDTH = 160;
    private static final double DEFAULT_RECT_HEIGHT = 100;
    private static final double DEFAULT_STICKY_HEIGHT = 140;
    private static final double DEFAULT_TEXT_WIDTH = 180;
    private static final double DEFAULT_TEXT_HEIGHT = 40;
    private static final double CURSOR_MARGIN = 100;

    private static final Random RANDOM = new Random();

    private CanvasModel() {
    }

    public static boolean isPointInElement(Point point, CanvasElement elem) {
        return isPointInElement(point, elem, DEFAULT_HIT_TOLERANCE);
    }

    public static boolean isPointInElement(Point point, CanvasElement elem, double hitTolerance) {
        ElementType type = elem.type();

        if (type == ElementType.RECTANGLE || type == ElementType.STICKY) {
            double w = elem.width() != null ? elem.width() : DEFAULT_SHAPE_WIDTH;
            double h = elem.height() != null ? elem.height()
                    : (type == ElementType.STICKY ? DEFAULT_STICKY_HEIGHT : DEFAULT_RECT_HEIGHT);
            return point.x() >= elem.x() - hitTolerance
                    && point.x() <= elem.x() + w + hitTolerance
                    && point.y() >= elem.y() - hitTolerance
                    && point.y() <= elem.y() + h + hitTolerance;
        }

        if (type == ElementType.ELLIPSE) {
            double rx = (elem.width() != null ? elem.width() : DEFAULT_SHAPE_WIDTH) / 2;
            double ry = (elem.height() != null ? elem.height() : DEFAULT_RECT_HEIGHT) / 2;
            double cx = elem.x() + rx;
            double cy = elem.y() + ry;
            double normalized = Math.pow((point.x() - cx) / (rx + hitTolerance), 2)
                    + Math.pow((point.y() - cy) / (ry + hitTolerance), 2);
            return normalized <= 1;
        }

        if (type == ElementType.TEXT) {
            double w = elem.width() != null ? elem.width() : DEFAULT_TEXT_WIDTH;
            double h = elem.height() != null ? elem.height() : DEFAULT_TEXT_HEIGHT;
            return point.x() >= elem.x() - hitTolerance
                    && point.x() <= elem.x() + w + hitTolerance
                    && point.y() >= elem.y() - hitTolerance
                    && point.y() <= elem.y() + h + hitTolerance;
        }

        if (type == ElementType.STROKE && elem.points() != null && !elem.points().isEmpty()) {
            for (Point p : elem.points()) {
                double dist = Math.hypot(p.x() - point.x(), p.y() - point.y());
                if (dist <= elem.strokeWidth() + hitTolerance) {
                    return true;
                }
            }
        }

        if (type == ElementType.ARROW && elem.points() != null && elem.points().size() >= 2) {
            Point p1 = elem.points().get(0);
            Point p2 = elem.points().get(1);
            return distanceToLineSegment(point, p1, p2) <= elem.strokeWidth() + hitTolerance;
        }

        return false;
    }

    private static double distanceToLineSegment(Point p, Point a, Point b) {
        double l2 = Math.pow(b.x() - a.x(), 2) + Math.pow(b.y() - a.y(), 2);
        if (l2 == 0) {
            return Math.hypot(p.x() - a.x(), p.y() - a.y());
        }
        double t = ((p.x() - a.x()) * (b.x() - a.x()) + (p.y() - a.y()) * (b.y() - a.y())) / l2;
        t = Math.max(0, Math.min(1, t));
        return Math.hypot(p.x() - (a.x() + t * (b.x() - a.x())), p.y() - (a.y() + t * (b.y() - a.y())));
    }

    public static Collaborator createBotCollaborator(int idIndex, Bounds bounds) {
        String name = BOT_NAMES.get(idIndex % BOT_NAMES.size()) + " (Bot " + (idIndex + 1) + ")";
        String color = BOT_COLORS.get(idIndex % BOT_COLORS.size());
        double x = CURSOR_MARGIN + RANDOM.nextDouble() * (bounds.width() - 2 * CURSOR_MARGIN);
        double y = CURSOR_MARGIN + RANDOM.nextDouble() * (bounds.height() - 2 * CURSOR_MARGIN);

        return new Collaborator(
                "bot-" + idIndex + "-" + System.currentTimeMillis(),
                name,
                color,
                new Point(x, y),
                ToolType.PEN,
                true,
                String.valueOf(idIndex),
                "Joined whiteboard",
                System.currentTimeMillis());
    }
}