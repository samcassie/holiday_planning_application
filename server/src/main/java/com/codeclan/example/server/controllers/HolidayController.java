package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.repositories.HolidayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class HolidayController {

    @Autowired
    HolidayRepository holidayRepository;

    @GetMapping(value = "/holidays")
    public ResponseEntity<List<Holiday>> getAllHolidaysAndFilters(
            @RequestParam(required = false, name="travellerId") Long id
            ){

        if (id != null){
            return new ResponseEntity<>(holidayRepository.findByTravellersId(id), HttpStatus.OK);
        }

        return new ResponseEntity<>(holidayRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/holidays/{id}")
    public ResponseEntity getHoliday(
            @PathVariable Long id
    ){
        return new ResponseEntity(holidayRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/holidays")
    public ResponseEntity<Holiday> postHoliday(
            @RequestBody Holiday holiday
    ){
        holidayRepository.save(holiday);
        return new ResponseEntity<>(holiday, HttpStatus.OK);
    }

    @DeleteMapping(value="/holidays/{id}")
    public ResponseEntity<Holiday> deleteHoliday(
            @PathVariable Long id
    ){
        Holiday found = holidayRepository.getOne(id);
        holidayRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping(value="/holidays/{id}")
    public ResponseEntity<Holiday> updateHoliday(
            @RequestBody Holiday holiday
    ){
        holidayRepository.save(holiday);
        return new ResponseEntity<>(holiday, HttpStatus.OK);
    }



}
