package com.codeclan.example.server.models.plans;

import com.codeclan.example.server.enums.PlanType;
import com.codeclan.example.server.models.Plan;
import com.codeclan.example.server.models.Trip;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name="trains")
public class Train extends Plan {

    @Column(name="departure_station")
    private String DepartureStation;

    @Column(name="arrival_station")
    private String arrivalStation;

    @Column(name="departure_time")
    private String departureTime;

    @Column(name="arrival_time")
    private String arrivalTime;

    public Train(Trip trip, Date date, String bookingConfirmation, String departureStation, String arrivalStation, String departureTime, String arrivalTime) {
        super(PlanType.TRAIN, trip, date, bookingConfirmation);
        DepartureStation = departureStation;
        this.arrivalStation = arrivalStation;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }

    public Train() {
    }

    public String getDepartureStation() {
        return DepartureStation;
    }

    public void setDepartureStation(String departureStation) {
        DepartureStation = departureStation;
    }

    public String getArrivalStation() {
        return arrivalStation;
    }

    public void setArrivalStation(String arrivalStation) {
        this.arrivalStation = arrivalStation;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }
}
