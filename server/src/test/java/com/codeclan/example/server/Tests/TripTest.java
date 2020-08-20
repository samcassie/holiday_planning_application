package com.codeclan.example.server.Tests;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Trip;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TripTest {

    private Holiday holiday;
    private Trip trip;

    @BeforeEach
    public void before(){
        holiday = new Holiday("Christmas", false);
        trip = new Trip(54.3520,18.6466, "Gdansk", holiday);
    }

    @Test
    public void canGetTripLocation(){
        assertEquals("Poland", trip.getLocation());
    }

}
