package com.parallely.client.whiteboard;

import com.parallely.client.model.CanvasElement;
import com.parallely.client.model.Collaborator;
import com.parallely.client.model.ElementType;
import com.parallely.client.model.Point;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class CanvasModelTest {

    @Test
    void isPointInElementCorrectlyIdentifiesPointInsideRectangleAndSticky() {
        CanvasElement rect = new CanvasElement(
                "r1", ElementType.RECTANGLE, null, 100, 100, 200.0, 150.0,
                "#ffffff", null, 2, null, "user-1", "Tester", "#00ff00",
                System.currentTimeMillis());

        assertTrue(CanvasModel.isPointInElement(new Point(150, 150), rect));
        assertFalse(CanvasModel.isPointInElement(new Point(50, 50), rect));
        assertFalse(CanvasModel.isPointInElement(new Point(350, 150), rect));

        CanvasElement sticky = new CanvasElement(
                "s1", ElementType.STICKY, null, 400, 300, 160.0, 140.0,
                "#FEF08A", null, 1, null, "user-1", "Tester", "#00ff00",
                System.currentTimeMillis());

        assertTrue(CanvasModel.isPointInElement(new Point(420, 320), sticky));
        assertFalse(CanvasModel.isPointInElement(new Point(600, 320), sticky));
    }

    @Test
    void createBotCollaboratorGeneratesValidCollaboratorWithinBounds() {
        Collaborator bot = CanvasModel.createBotCollaborator(0, new CanvasModel.Bounds(1000, 800));
        assertTrue(bot.isBot());
        assertFalse(bot.getName().isEmpty());
        assertTrue(bot.getCursor().x() >= 100 && bot.getCursor().x() <= 900);
        assertTrue(bot.getCursor().y() >= 100 && bot.getCursor().y() <= 700);
    }
}