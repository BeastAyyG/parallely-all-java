package com.parallely.client.model;

import java.util.List;

public record MCQQuestion(
        String id,
        String title,
        String context,
        List<Option> options,
        double totalBidsVolume) {

    public record Option(
            OptionKey key,
            String label,
            Boolean isCorrect,
            double poolVolume,
            double impliedOdds,
            int bidsCount) {
    }
}