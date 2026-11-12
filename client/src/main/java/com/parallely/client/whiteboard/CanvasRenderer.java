package com.parallely.client.whiteboard;

import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.Collaborator;
import com.parallely.client.model.ElementType;
import com.parallely.client.model.Point;
import org.teavm.jso.JSBody;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;

import java.util.ArrayList;
import java.util.List;

final class CanvasRenderer {
    private static final String FONT_13 = "13px \"Plus Jakarta Sans\", sans-serif";
    private static final String FONT_12 = "12px \"Plus Jakarta Sans\", sans-serif";
    private static final String FONT_15 = "15px \"Plus Jakarta Sans\", sans-serif";
    private static final String FONT_10 = "10px \"Plus Jakarta Sans\", sans-serif";
    private static final double GRID_SIZE = 24;
    private static final double ARROW_HEAD_LEN = 12;
    private static final double DEFAULT_WIDTH = 160;
    private static final double DEFAULT_HEIGHT = 90;
    private static final double STICKY_WIDTH = 170;
    private static final double STICKY_HEIGHT = 130;

    private final HTMLCanvasElement canvas;
    private final CanvasRenderingContext2D ctx;

    CanvasRenderer(HTMLCanvasElement canvas) {
        this.canvas = canvas;
        this.ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
    }

    void render(List<CanvasElement> elements, CanvasElement current, String selectedId,
                List<Collaborator> bots, List<Collaborator> peers,
                double panX, double panY, double zoom) {
        double w = canvas.getWidth();
        double h = canvas.getHeight();
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(panX, panY);
        ctx.scale(zoom, zoom);

        ctx.setFillStyle("#FFFFFF");
        ctx.fillRect(0, 0, w / zoom, h / zoom);
        ctx.setFillStyle("#C9C9C9");
        for (double x = 0; x < w / zoom; x += GRID_SIZE) {
            for (double y = 0; y < h / zoom; y += GRID_SIZE) {
                ctx.fillRect(x, y, 1, 1);
            }
        }

        for (CanvasElement el : elements) {
            drawElement(el, selectedId);
        }
        if (current != null) {
            drawElement(current, selectedId);
        }

        for (Collaborator bot : bots) {
            drawCursor(bot);
        }
        for (Collaborator peer : peers) {
            drawCursor(peer);
        }

        ctx.restore();
    }

    private void drawElement(CanvasElement el, String selectedId) {
        ctx.save();
        ctx.setStrokeStyle(el.color());
        ctx.setLineWidth(el.strokeWidth());
        ctx.setFillStyle(truthy(el.fillColor()) ? el.fillColor() : "transparent");

        ElementType type = el.type();
        if (type == ElementType.RECTANGLE) {
            double w = el.width() != null ? el.width() : DEFAULT_WIDTH;
            double h = el.height() != null ? el.height() : DEFAULT_HEIGHT;
            ctx.beginPath();
            roundRect(ctx, el.x(), el.y(), w, h, 8);
            ctx.stroke();
            if (truthy(el.fillColor())) {
                ctx.fill();
            }
            drawShapeText(el, w, h);
        } else if (type == ElementType.ELLIPSE) {
            double w = el.width() != null ? el.width() : DEFAULT_WIDTH;
            double h = el.height() != null ? el.height() : DEFAULT_HEIGHT;
            ctx.beginPath();
            ellipse(ctx, el.x() + w / 2, el.y() + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
            ctx.stroke();
            if (truthy(el.fillColor())) {
                ctx.fill();
            }
            drawShapeText(el, w, h);
        } else if (type == ElementType.STICKY) {
            drawSticky(el);
        } else if (type == ElementType.STROKE && el.points() != null && el.points().size() > 1) {
            ctx.setLineCap("round");
            ctx.setLineJoin("round");
            ctx.beginPath();
            ctx.moveTo(el.points().get(0).x(), el.points().get(0).y());
            for (int i = 1; i < el.points().size(); i++) {
                ctx.lineTo(el.points().get(i).x(), el.points().get(i).y());
            }
            ctx.stroke();
        } else if (type == ElementType.ARROW && el.points() != null && el.points().size() >= 2) {
            Point p1 = el.points().get(0);
            Point p2 = el.points().get(1);
            ctx.setLineCap("round");
            ctx.beginPath();
            ctx.moveTo(p1.x(), p1.y());
            ctx.lineTo(p2.x(), p2.y());
            ctx.stroke();

            double angle = Math.atan2(p2.y() - p1.y(), p2.x() - p1.x());
            ctx.beginPath();
            ctx.moveTo(p2.x(), p2.y());
            ctx.lineTo(p2.x() - ARROW_HEAD_LEN * Math.cos(angle - Math.PI / 6),
                    p2.y() - ARROW_HEAD_LEN * Math.sin(angle - Math.PI / 6));
            ctx.moveTo(p2.x(), p2.y());
            ctx.lineTo(p2.x() - ARROW_HEAD_LEN * Math.cos(angle + Math.PI / 6),
                    p2.y() - ARROW_HEAD_LEN * Math.sin(angle + Math.PI / 6));
            ctx.stroke();
        } else if (type == ElementType.TEXT) {
            ctx.setFillStyle(el.color());
            ctx.setFont(FONT_15);
            ctx.fillText(truthy(el.text()) ? el.text() : "Text", el.x(), el.y() + 16);
        }

        if (selectedId != null && selectedId.equals(el.id())) {
            ctx.setStrokeStyle("#6366F1");
            ctx.setLineWidth(1.5);
            setLineDash(ctx, new double[]{4, 4});
            double w = el.width() != null ? el.width() : DEFAULT_WIDTH;
            double h = el.height() != null ? el.height() : DEFAULT_HEIGHT;
            ctx.strokeRect(el.x() - 4, el.y() - 4, w + 8, h + 8);
            setLineDash(ctx, new double[0]);
        }

        ctx.restore();
    }

    private void drawShapeText(CanvasElement el, double w, double h) {
        if (!truthy(el.text())) {
            return;
        }
        ctx.setFillStyle(el.color());
        ctx.setFont(FONT_13);
        ctx.setTextAlign("center");
        ctx.setTextBaseline("middle");
        String[] lines = splitOn(el.text(), '\n');
        for (int i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], el.x() + w / 2, el.y() + h / 2 - (lines.length - 1) * 9 + i * 18);
        }
    }

    private void drawSticky(CanvasElement el) {
        double w = el.width() != null ? el.width() : STICKY_WIDTH;
        double h = el.height() != null ? el.height() : STICKY_HEIGHT;
        ctx.setFillStyle("rgba(0,0,0,0.25)");
        ctx.beginPath();
        roundRect(ctx, el.x() + 3, el.y() + 4, w, h, 6);
        ctx.fill();

        ctx.setFillStyle(el.color());
        ctx.beginPath();
        roundRect(ctx, el.x(), el.y(), w, h, 6);
        ctx.fill();

        ctx.setFillStyle("#1E293B");
        ctx.setFont(FONT_12);
        ctx.setTextAlign("left");
        ctx.setTextBaseline("top");
        String[] words = splitOn(truthy(el.text()) ? el.text() : "Insight", ' ');
        String line = "";
        double lineY = el.y() + 12;
        for (String word : words) {
            String testLine = line + word + " ";
            if (ctx.measureText(testLine).getWidth() > w - 24) {
                ctx.fillText(line, el.x() + 12, lineY);
                line = word + " ";
                lineY += 16;
                if (lineY > el.y() + h - 20) {
                    break;
                }
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, el.x() + 12, lineY);

        ctx.setFillStyle("rgba(30, 41, 59, 0.6)");
        ctx.setFont("10px monospace");
        ctx.fillText("\u2014 " + el.authorName(), el.x() + 12, el.y() + h - 18);
    }

    private void drawCursor(Collaborator c) {
        ctx.save();
        double cx = c.getCursor().x();
        double cy = c.getCursor().y();

        ctx.setFillStyle(c.getColor());
        ctx.setStrokeStyle("#0F172A");
        ctx.setLineWidth(1.5);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, cy + 18);
        ctx.lineTo(cx + 4.5, cy + 14);
        ctx.lineTo(cx + 10, cy + 22);
        ctx.lineTo(cx + 13, cy + 20);
        ctx.lineTo(cx + 7.5, cy + 12);
        ctx.lineTo(cx + 14, cy + 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.setFillStyle(c.getColor());
        ctx.beginPath();
        roundRect(ctx, cx + 14, cy + 12, c.getName().length() * 7 + 14, 20, 4);
        ctx.fill();

        ctx.setFillStyle("#FFFFFF");
        ctx.setFont(FONT_10);
        ctx.fillText(c.getName(), cx + 21, cy + 26);

        ctx.restore();
    }

    private static boolean truthy(String s) {
        return s != null && !s.isEmpty();
    }

    private static String[] splitOn(String s, char sep) {
        List<String> out = new ArrayList<>();
        int start = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == sep) {
                out.add(s.substring(start, i));
                start = i + 1;
            }
        }
        out.add(s.substring(start));
        return out.toArray(new String[0]);
    }

    @JSBody(params = {"ctx", "x", "y", "w", "h", "r"}, script = "ctx.roundRect(x, y, w, h, r);")
    private static native void roundRect(CanvasRenderingContext2D ctx, double x, double y, double w, double h, double r);

    @JSBody(params = {"ctx", "x", "y", "rx", "ry", "rot", "a0", "a1"}, script = "ctx.ellipse(x, y, rx, ry, rot, a0, a1);")
    private static native void ellipse(CanvasRenderingContext2D ctx, double x, double y, double rx, double ry, double rot, double a0, double a1);

    @JSBody(params = {"ctx", "v"}, script = "ctx.setLineDash(v);")
    private static native void setLineDash(CanvasRenderingContext2D ctx, double[] v);
}