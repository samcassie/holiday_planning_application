package com.codeclan.example.server.Tests;

import com.codeclan.example.server.enums.PlanType;
import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.models.plans.Accommodation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AccommodationTest {

    private Holiday holiday;
    private Trip trip;
    private Accommodation accommodation;
    private Date date;

    @BeforeEach
    public void before(){
        holiday = new Holiday("Christmas", false);
        trip = new Trip(54.372158, 18.638306, "Gdansk", holiday);
        date = new Date();
        accommodation = new Accommodation(trip, date, "ABCD123", "Premier Inn", "123 Fake St", 2);
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(trip, accommodation.getTrip());
        assertEquals(date, accommodation.getDate());
        assertEquals("ABCD123", accommodation.getBookingConfirmation());
        assertEquals("Premier Inn", accommodation.getName());
        assertEquals("123 Fake St", accommodation.getAddress());
        assertEquals(2, accommodation.getNumOfNights());
        assertEquals(PlanType.ACCOMMODATION, accommodation.getPlanType());
    }
}
