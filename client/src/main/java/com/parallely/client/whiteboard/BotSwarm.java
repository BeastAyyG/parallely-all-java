package com.parallely.client.whiteboard;

import com.parallely.client.js.Js;
import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.Collaborator;
import com.parallely.client.model.ElementType;
import com.parallely.client.model.Point;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

final class BotSwarm {
    private static final int MAX_BOTS = 100;
    private static final int TICK_MS = 60;
    private static final double SPEED = 0.08;
    private static final double WAYPOINT_RADIUS = 15;
    private static final int PRUNE_THRESHOLD = 40;
    private static final int PRUNE_KEEP = 35;

    private final WhiteboardStudio studio;
    private final Map<String, Point> waypoints = new HashMap<>();
    private List<Collaborator> bots = new ArrayList<>();
    private boolean active = true;
    private int count = 8;
    private String behavior = "architect";
    private String followId = null;
    private int intervalId = 0;

    BotSwarm(WhiteboardStudio studio) {
        this.studio = studio;
    }

    List<Collaborator> bots() {
        return bots;
    }

    boolean isActive() {
        return active;
    }

    String behavior() {
        return behavior;
    }

    String followId() {
        return followId;
    }

    void start() {
        initBots();
        restartLoop();
    }

    void spawn(int n) {
        count = Math.min(MAX_BOTS, count + n);
        active = true;
        initBots();
        restartLoop();
    }

    void addBots(int delta) {
        count = Math.max(0, Math.min(MAX_BOTS, count + delta));
        initBots();
        restartLoop();
    }

    void toggleActive() {
        active = !active;
        restartLoop();
    }

    void setBehavior(String b) {
        behavior = b;
    }

    void toggleFollow(String botId) {
        followId = botId.equals(followId) ? null : botId;
        studio.avatarsDirty = true;
        followCam();
    }

    void pause() {
        active = false;
        restartLoop();
    }

    void dispose() {
        if (intervalId != 0) {
            Js.clearInterval(intervalId);
            intervalId = 0;
        }
    }

    void followCam() {
        if (followId == null) {
            return;
        }
        Collaborator bot = null;
        for (Collaborator b : bots) {
            if (b.getId().equals(followId)) {
                bot = b;
                break;
            }
        }
        if (bot == null) {
            return;
        }
        studio.panX = studio.canvasContainer.getClientWidth() / 2.0 - bot.getCursor().x() * studio.zoom;
        studio.panY = studio.canvasContainer.getClientHeight() / 2.0 - bot.getCursor().y() * studio.zoom;
        studio.canvasDirty = true;
    }

    private void initBots() {
        List<Collaborator> next = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            next.add(CanvasModel.createBotCollaborator(i, new CanvasModel.Bounds(1200, 800)));
        }
        bots = next;
        studio.avatarsDirty = true;
    }

    private void restartLoop() {
        if (intervalId != 0) {
            Js.clearInterval(intervalId);
            intervalId = 0;
        }
        if (active && !bots.isEmpty()) {
            intervalId = Js.setInterval(this::tick, TICK_MS);
        }
    }

    private void tick() {
        double pNode;
        double pSticky;
        if (behavior.equals("architect")) {
            pNode = 0.22;
            pSticky = 0.05;
        } else if (behavior.equals("ideator")) {
            pNode = 0.05;
            pSticky = 0.24;
        } else {
            pNode = 0;
            pSticky = 0;
        }
        long now = System.currentTimeMillis();
        for (Collaborator bot : bots) {
            Point target = waypoints.get(bot.getId());
            if (target == null || Math.hypot(target.x() - bot.getCursor().x(), target.y() - bot.getCursor().y()) < WAYPOINT_RADIUS) {
                target = new Point(100 + Math.random() * 1000, 80 + Math.random() * 650);
                waypoints.put(bot.getId(), target);
                double roll = Math.random();
                if (roll < pSticky) {
                    addSticky(bot, target, now);
                } else if (roll < pSticky + pNode) {
                    addNode(bot, target, now);
                } else {
                    bot.setLastAction(behavior.equals("explorer") ? "Exploring canvas" : "Reviewing architecture");
                }
            }
            double dx = target.x() - bot.getCursor().x();
            double dy = target.y() - bot.getCursor().y();
            bot.setCursor(new Point(bot.getCursor().x() + dx * SPEED, bot.getCursor().y() + dy * SPEED));
            bot.setLastActive(now);
        }
        followCam();
        studio.canvasDirty = true;
        studio.syncUi();
    }

    private void addSticky(Collaborator bot, Point target, long now) {
        String idea = CanvasModel.BOT_STICKY_IDEAS.get((int) (Math.random() * CanvasModel.BOT_STICKY_IDEAS.size()));
        String color = WhiteboardStudio.STICKY_COLORS[(int) (Math.random() * WhiteboardStudio.STICKY_COLORS.length)];
        CanvasElement sticky = new CanvasElement("bot-sticky-" + now + "-" + randomToken(), ElementType.STICKY,
                null, Math.round(target.x()), Math.round(target.y()), 170.0, 130.0, color, null, 1, idea,
                bot.getId(), bot.getName(), bot.getColor(), now);
        List<CanvasElement> next = studio.elements.size() > PRUNE_THRESHOLD
                ? new ArrayList<>(studio.elements.subList(studio.elements.size() - PRUNE_KEEP, studio.elements.size()))
                : new ArrayList<>(studio.elements);
        next.add(sticky);
        studio.elements = next;
        bot.setLastAction("Added sticky note");
    }

    private void addNode(Collaborator bot, Point target, long now) {
        CanvasModel.ArchNode node = CanvasModel.BOT_ARCH_NODES.get((int) (Math.random() * CanvasModel.BOT_ARCH_NODES.size()));
        CanvasElement el = new CanvasElement("bot-node-" + now + "-" + randomToken(), node.type(),
                null, Math.round(target.x()), Math.round(target.y()), 180.0, 80.0, node.color(), node.color() + "15",
                2, node.label(), bot.getId(), bot.getName(), bot.getColor(), now);
        studio.elements = Elements.appended(studio.elements, el);
        bot.setLastAction("Created " + node.label());
    }

    private static String randomToken() {
        String digits = "0123456789abcdefghijklmnopqrstuvwxyz";
        StringBuilder sb = new StringBuilder(4);
        for (int i = 0; i < 4; i++) {
            sb.append(digits.charAt((int) (Math.random() * 36)));
        }
        return sb.toString();
    }
}