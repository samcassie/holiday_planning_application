package com.codeclan.example.server.Tests;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TravellerTest {

    private Traveller traveller;
    private Holiday holiday;

    @BeforeEach
    public void before(){
        traveller = new Traveller("Nikita", "sun");
        holiday = new Holiday("Christmas Trip", false);
    }

    @Test
    public void canGetTravellerName(){
        assertEquals("Nikita", traveller.getName());
    }

    @Test
    public void holidaysStartEmpty(){
        assertEquals(0, traveller.getHolidays().size());
    }

    @Test
    public void canAddHoliday(){
        traveller.addHoliday(holiday);
        assertEquals(1, traveller.getHolidays().size());
    }

}
