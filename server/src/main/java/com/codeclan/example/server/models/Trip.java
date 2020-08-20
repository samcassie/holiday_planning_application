package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="trips")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="latitude")
    private Double latitude;

    @Column(name="longitude")
    private Double longitude;

    @Column(name="location")
    private String location;

    @JsonIgnoreProperties({"trips"})
    @ManyToOne
    @JoinColumn(name="holiday_id", nullable = false)
    private Holiday holiday;

    @JsonIgnoreProperties({"trip"})
    @OneToMany(mappedBy="trip", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Plan> plans;

    @JsonBackReference(value="comments")
    @OneToMany(mappedBy="trip", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Comment> comments;

    public Trip(Double latitude, Double longitude, String location, Holiday holiday) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.location = location;
        this.holiday = holiday;
        this.plans = new ArrayList<Plan>();
        this.comments = new ArrayList<Comment>();
    }

    public Trip() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Holiday getHoliday() {
        return holiday;
    }

    public void setHoliday(Holiday holiday) {
        this.holiday = holiday;
    }

    public void addPlan(Plan plan){
        this.plans.add(plan);
    }

    public List<Plan> getPlans() {
        return plans;
    }

    public void setPlans(List<Plan> plans) {
        this.plans = plans;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
