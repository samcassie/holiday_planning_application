package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.plans.Flight;
import com.codeclan.example.server.repositories.FlightRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FlightController {

    @Autowired
    FlightRepository flightRepository;

    @GetMapping(value="/flights")
    public ResponseEntity<List<Flight>> getAllFlights(){
        return new ResponseEntity<>(flightRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/flights/{id}")
    public ResponseEntity getFlight(
            @PathVariable Long id
    ){
        return new ResponseEntity(flightRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/flights")
    public ResponseEntity<Flight> postFlight(
            @RequestBody Flight flight
    ){
        flightRepository.save(flight);
        return new ResponseEntity<>(flight, HttpStatus.OK);
    }

    @DeleteMapping(value="/flights/{id}")
    public ResponseEntity<Flight> deleteFlight(
            @PathVariable Long id
    ){
        Flight found = flightRepository.getOne(id);
        flightRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping(value="/flights/{id}")
    public ResponseEntity<Flight> updateFlight(
            @RequestBody Flight flight
    ){
        flightRepository.save(flight);
        return new ResponseEntity<>(flight, HttpStatus.OK);
    }
}
