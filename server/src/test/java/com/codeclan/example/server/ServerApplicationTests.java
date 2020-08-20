package com.codeclan.example.server;

import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class ServerApplicationTests {

	@Autowired
	HolidayRepository holidayRepository;

	@Autowired
	TravellerRepository travellerRepository;

	@Autowired
	TripRepository tripRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateTravellerAndSave(){
		Traveller traveller = new Traveller("Nikita", "beach");
		travellerRepository.save(traveller);
	}

	@Test
	public void canCreateHolidayAndSave(){
		Holiday holiday = new Holiday("Christmas", false);
		holidayRepository.save(holiday);
	}

	@Test
	public void canCreateTripAndSave(){
		Holiday holiday = holidayRepository.getOne(1L);
		Trip trip = new Trip(54.372158, 18.638306, "Gdansk", holiday);
		tripRepository.save(trip);
	}


}
