package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="holidays")
public class Holiday {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @JsonIgnoreProperties({"comments", "holidays"})
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "travellers_holidays",
            joinColumns = {@JoinColumn(name = "holiday_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "traveller_id", nullable = false, updatable = false)})
    private List<Traveller> travellers;

    @Column(name="is_published")
    private boolean isPublished;

    @JsonIgnoreProperties({"holiday"})
    @OneToMany(mappedBy="holiday", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    private List<Trip> trips;

    public Holiday(String title, boolean isPublished) {
        this.title = title;
        this.isPublished = isPublished;
        this.travellers = new ArrayList<Traveller>();
        this.trips = new ArrayList<Trip>();
    }

    public Holiday() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Traveller> getTravellers() {
        return travellers;
    }

    public void setTravellers(List<Traveller> travellers) {
        this.travellers = travellers;
    }

    public boolean isPublished() {
        return isPublished;
    }

    public void setPublished(boolean published) {
        isPublished = published;
    }

    public void publish(){
        this.isPublished = true;
    }

    public void addTraveller(Traveller traveller){
        this.travellers.add(traveller);
    }

    public List<Trip> getTrips() {
        return trips;
    }

    public void setTrips(List<Trip> trips) {
        this.trips = trips;
    }

    public void addTrip(Trip trip){
        this.trips.add(trip);
    }
}
