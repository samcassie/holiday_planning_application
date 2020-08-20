package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.plans.Accommodation;
import com.codeclan.example.server.repositories.AccommodationRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccommodationController {

    @Autowired
    AccommodationRepository accommodationRepository;

    @GetMapping(value="/accommodations")
    public ResponseEntity<List<Accommodation>> getAllAccommodations(){
        return new ResponseEntity<>(accommodationRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/accommodations/{id}")
    public ResponseEntity getAccommodation(
            @PathVariable Long id
    ){
        return new ResponseEntity<>(accommodationRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/accommodations")
    public ResponseEntity<Accommodation> postAccommodation(
            @RequestBody Accommodation accommodation
    ){
        accommodationRepository.save(accommodation);
        return new ResponseEntity<>(accommodation, HttpStatus.OK);
    }

    @DeleteMapping(value="/accommodations/{id}")
    public ResponseEntity<Accommodation> deleteAccommodation(
            @PathVariable Long id
    ){
        Accommodation found = accommodationRepository.getOne(id);
        accommodationRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping(value="/accommodations/{id}")
    public ResponseEntity<Accommodation> updateAccommodation(
            @RequestBody Accommodation accommodation
    ){
        accommodationRepository.save(accommodation);
        return new ResponseEntity<>(accommodation, HttpStatus.OK);
    }


}
