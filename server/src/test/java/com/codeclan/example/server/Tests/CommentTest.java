package com.codeclan.example.server.Tests;

import com.codeclan.example.server.models.Comment;
import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.models.Trip;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CommentTest {

    private Traveller traveller;
    private Holiday holiday;
    private Trip trip;
    private Comment comment;
    private Date date;

    @BeforeEach
    public void before(){
        date = new Date();
        traveller = new Traveller("Nikita", "sun");
        holiday = new Holiday("Christmas", false);
        trip = new Trip(54.372158, 18.638306, "Gdansk", holiday);
        comment = new Comment(traveller, trip, "Had such a great trip!", date);
    }

    @Test
    public void canGetAllProperties(){
        assertEquals(date, comment.getDate());
        assertEquals(traveller, comment.getTraveller());
        assertEquals(trip, comment.getTrip());
        assertEquals("Had such a great trip!", comment.getComment());
    }

}
