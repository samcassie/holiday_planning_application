package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.repositories.TravellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TravellerController {
    @Autowired
    TravellerRepository travellerRepository;

    @GetMapping(value="/travellers")
    public ResponseEntity<List<Traveller>> getAllTravellers(){
        return new ResponseEntity<>(travellerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/travellers/{id}")
    public ResponseEntity getTraveller(
            @PathVariable Long id
    ){
        return new ResponseEntity(travellerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/travellers")
    public ResponseEntity<Traveller> postTraveller(
            @RequestBody Traveller traveller
    ){
        travellerRepository.save(traveller);
        return new ResponseEntity<>(traveller, HttpStatus.OK);
    }

    @DeleteMapping(value = "/travellers/{id}")
    public ResponseEntity<Traveller> deleteTraveller(
            @PathVariable Long id
    ){
        Traveller found = travellerRepository.getOne(id);
        travellerRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping(value = "/travellers/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Traveller> updateTraveller(
            @RequestBody Traveller traveller
    ){
        travellerRepository.save(traveller);
        return new ResponseEntity<>(traveller, HttpStatus.OK);
    }
}
