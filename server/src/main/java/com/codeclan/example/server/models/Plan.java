package com.codeclan.example.server.models;

import com.codeclan.example.server.enums.PlanType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
public abstract class Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name="plan_type")
    private PlanType planType;

    @Temporal(value = TemporalType.DATE)
    @Column(name="date")
    private Date date;

    @Column(name="booking_confirmation")
    private String bookingConfirmation;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="trip_id", nullable = false)
    private Trip trip;

    public Plan(PlanType planType, Trip trip, Date date, String bookingConfirmation) {
        this.planType = planType;
        this.trip = trip;
        this.date = date;
        this.bookingConfirmation = bookingConfirmation;
    }

    public Plan() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getBookingConfirmation() {
        return bookingConfirmation;
    }

    public void setBookingConfirmation(String bookingConfirmation) {
        this.bookingConfirmation = bookingConfirmation;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public PlanType getPlanType() {
        return planType;
    }

    public void setPlanType(PlanType planType) {
        this.planType = planType;
    }
}
