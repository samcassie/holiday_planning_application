package com.codeclan.example.server.models.plans;

import com.codeclan.example.server.enums.PlanType;
import com.codeclan.example.server.models.Plan;
import com.codeclan.example.server.models.Trip;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name="accommodations")
public class Accommodation extends Plan {

    @Column(name="name")
    private String name;

    @Column(name="address")
    private String address;

    @Column(name="num_of_nights")
    private int numOfNights;

    public Accommodation(Trip trip, Date date, String bookingConfirmation, String name, String address, int numOfNights) {
        super(PlanType.ACCOMMODATION, trip, date, bookingConfirmation);
        this.name = name;
        this.address = address;
        this.numOfNights = numOfNights;
    }

    public Accommodation() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getNumOfNights() {
        return numOfNights;
    }

    public void setNumOfNights(int numOfNights) {
        this.numOfNights = numOfNights;
    }
}
