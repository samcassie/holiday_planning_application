package com.codeclan.example.server.Tests;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.models.plans.Train;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class TrainTest {

    private Holiday holiday;
    private Trip trip;
    private Date date;
    private Train train;

    @BeforeEach
    public void before(){
        holiday = new Holiday("Christmas", false);
        trip = new Trip(54.372158, 18.638306, "Gdansk", holiday);
        date = new Date();
        train = new Train(trip, date, "EEE22", "Glasgow", "Edinburgh", "1000", "1130");
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(trip, train.getTrip());
        assertEquals(date, train.getDate());
        assertEquals("EEE22", train.getBookingConfirmation());
        assertEquals("Glasgow", train.getDepartureStation());
        assertEquals("Edinburgh", train.getArrivalStation());
        assertEquals("1000", train.getDepartureTime());
        assertEquals("1130", train.getArrivalTime());
    }
}
