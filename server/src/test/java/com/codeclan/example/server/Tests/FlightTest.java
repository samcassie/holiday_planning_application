package com.codeclan.example.server.Tests;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.models.plans.Flight;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FlightTest {

    private Holiday holiday;
    private Trip trip;
    private Date date;
    private Flight flight;

    @BeforeEach
    public void before(){
        holiday = new Holiday("Christmas", false);
        trip = new Trip(54.372158, 18.638306, "Gdansk", holiday);
        date = new Date();
        flight = new Flight(trip, date, "12345A", "GLA", "GDN", "1030", "2000", "FLI1234");
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(trip, flight.getTrip());
        assertEquals(date, flight.getDate());
        assertEquals("12345A", flight.getBookingConfirmation());
        assertEquals("GLA", flight.getDepartureAirport());
        assertEquals("GDN", flight.getArrivalAirport());
        assertEquals("1030", flight.getDepartureTime());
        assertEquals("2000", flight.getArrivalTime());
        assertEquals("FLI1234", flight.getFlightNumber());
    }
}
