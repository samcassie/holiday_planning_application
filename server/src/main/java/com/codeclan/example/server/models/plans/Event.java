package com.codeclan.example.server.models.plans;

import com.codeclan.example.server.enums.PlanType;
import com.codeclan.example.server.models.Plan;
import com.codeclan.example.server.models.Trip;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name="events")
public class Event extends Plan {

    @Column(name="name")
    private String name;

    @Column(name="location")
    private String location;

    public Event(Trip trip, Date date, String bookingConfirmation, String name, String location) {
        super(PlanType.EVENT, trip, date, bookingConfirmation);
        this.name = name;
        this.location = location;
    }

    public Event() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
