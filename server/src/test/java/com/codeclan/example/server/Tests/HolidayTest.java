package com.codeclan.example.server.Tests;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.models.Trip;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class HolidayTest {

    private Holiday holiday;
    private Traveller traveller;

    @BeforeEach
    public void before(){
        traveller = new Traveller("Nikita", "sun");
        holiday = new Holiday("Christmas", false);
    }

    @Test
    public void canGetHolidayTitle(){
        assertEquals("Christmas", holiday.getTitle());
    }

    @Test
    public void canGetTravellers(){
        assertEquals(0, holiday.getTravellers().size());
    }

    @Test
    public void canAddATraveller(){
        holiday.addTraveller(traveller);
        assertEquals(1, holiday. getTravellers().size());
    }

}
