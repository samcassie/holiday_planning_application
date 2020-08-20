package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.plans.Train;
import com.codeclan.example.server.repositories.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TrainController {

    @Autowired
    TrainRepository trainRepository;

    @GetMapping(value="/trains")
    public ResponseEntity<List<Train>> getAllTrains(){
        return new ResponseEntity<>(trainRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/trains/{id}")
    public ResponseEntity getTrain(
            @PathVariable Long id
    ){
        return new ResponseEntity(trainRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/trains")
    public ResponseEntity<Train> postTrain(
            @RequestBody Train train
    ){
        trainRepository.save(train);
        return new ResponseEntity<>(train, HttpStatus.OK);
    }

    @DeleteMapping(value="/trains/{id}")
    public ResponseEntity<Train> deleteTrain(
            @PathVariable Long id
    ){
        Train found = trainRepository.getOne(id);
        trainRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PostMapping(value="/trains/{id}")
    public ResponseEntity<Train> updateTrain(
            @RequestBody Train train
    ){
        trainRepository.save(train);
        return new ResponseEntity<>(train, HttpStatus.OK);
    }
}
