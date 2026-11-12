package com.parallely.client.model;

public final class Collaborator {
    private final String id;
    private final String name;
    private final String color;
    private Point cursor;
    private ToolType activeTool;
    private final boolean isBot;
    private final String avatarSeed;
    private String lastAction;
    private long lastActive;

    public Collaborator(String id, String name, String color, Point cursor, ToolType activeTool,
                        boolean isBot, String avatarSeed, String lastAction, long lastActive) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.cursor = cursor;
        this.activeTool = activeTool;
        this.isBot = isBot;
        this.avatarSeed = avatarSeed;
        this.lastAction = lastAction;
        this.lastActive = lastActive;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }

    public Point getCursor() {
        return cursor;
    }

    public void setCursor(Point cursor) {
        this.cursor = cursor;
    }

    public ToolType getActiveTool() {
        return activeTool;
    }

    public void setActiveTool(ToolType activeTool) {
        this.activeTool = activeTool;
    }

    public boolean isBot() {
        return isBot;
    }

    public String getAvatarSeed() {
        return avatarSeed;
    }

    public String getLastAction() {
        return lastAction;
    }

    public void setLastAction(String lastAction) {
        this.lastAction = lastAction;
    }

    public long getLastActive() {
        return lastActive;
    }

    public void setLastActive(long lastActive) {
        this.lastActive = lastActive;
    }
}