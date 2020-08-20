package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.repositories.TripRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TripController {

    @Autowired
    TripRepository tripRepository;

    @GetMapping(value="/trips")
    public ResponseEntity<List<Trip>> getAllTrips(){
        return new ResponseEntity<>(tripRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/trips/{id}")
    public ResponseEntity getTrip(
            @PathVariable Long id
    ){
        return new ResponseEntity(tripRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/trips")
    public ResponseEntity<Trip> postTrip(
            @RequestBody Trip trip
    ){
        tripRepository.save(trip);
        return new ResponseEntity<>(trip, HttpStatus.OK);
    }

    @DeleteMapping(value="/trips/{id}")
    public ResponseEntity<Trip> deleteTrip(
            @PathVariable Long id
    ){
        Trip found = tripRepository.getOne(id);
        tripRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping(value="/trips/{id}")
    public ResponseEntity<Trip> updateTrip(
            @RequestBody Trip trip
    ){
        tripRepository.save(trip);
        return new ResponseEntity<>(trip, HttpStatus.OK);
    }
}
