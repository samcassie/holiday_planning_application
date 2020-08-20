package com.codeclan.example.server.components;

import com.codeclan.example.server.models.Comment;
import com.codeclan.example.server.models.Holiday;
import com.codeclan.example.server.models.Traveller;
import com.codeclan.example.server.models.Trip;
import com.codeclan.example.server.models.plans.Accommodation;
import com.codeclan.example.server.models.plans.Event;
import com.codeclan.example.server.models.plans.Flight;
import com.codeclan.example.server.models.plans.Train;
import com.codeclan.example.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TravellerRepository travellerRepository;

    @Autowired
    HolidayRepository holidayRepository;

    @Autowired
    TripRepository tripRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    FlightRepository flightRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    AccommodationRepository accommodationRepository;

    @Autowired
    TrainRepository trainRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Traveller hamilton = new Traveller("Alexander Hamilton", "image1");
        travellerRepository.save(hamilton);

        Traveller burr = new Traveller("Aaron Burr", "image2");
        travellerRepository.save(burr);

        Traveller jefferson = new Traveller("Thomas Jefferson", "image3");
        travellerRepository.save(jefferson);

        Traveller washington = new Traveller("George Washington", "image4");
        travellerRepository.save(washington);

        Holiday holiday1 = new Holiday("Coming to the Mainland", false);
        holiday1.addTraveller(hamilton);
        holidayRepository.save(holiday1);

        Holiday holiday2 = new Holiday("Going Home", false);
        holiday2.addTraveller(washington);
        holidayRepository.save(holiday2);

        Holiday holiday3 = new Holiday("Avoiding the War", false);
        holiday3.addTraveller(jefferson);
        holidayRepository.save(holiday3);

        Holiday holiday4 = new Holiday("Constitutional Convention Trip", false);
        holiday4.addTraveller(hamilton);
        holidayRepository.save(holiday4);

        Holiday holiday5 = new Holiday("Duel", false);
        holiday5.addTraveller(hamilton);
        holiday5.addTraveller(burr);
        holidayRepository.save(holiday5);

        Holiday holiday6 = new Holiday("Debt Plan Negotiations", false);
        holiday6.addTraveller(hamilton);
        holiday6.addTraveller(jefferson);
        holidayRepository.save(holiday6);

        Holiday holiday7 = new Holiday("An American Musical", false);
        holiday7.addTraveller(hamilton);
        holiday7.addTraveller(burr);
        holiday7.addTraveller(jefferson);
        holiday7.addTraveller(washington);
        holidayRepository.save(holiday7);

        Trip trip1 = new Trip(40.7128, -74.0060, "New York", holiday6);
        tripRepository.save(trip1);

        Trip trip2 = new Trip(39.9526,-75.1652, "Philadelphia", holiday4);
        tripRepository.save(trip2);

        Trip trip3 = new Trip(40.9126,-84.340492, "Mount Vernon", holiday2);
        tripRepository.save(trip3);

        Trip trip4 = new Trip(37.4316, -78.6569, "Virginia", holiday3);
        tripRepository.save(trip4);

        Trip trip5 = new Trip(48.8566, 2.3522, "Paris", holiday3);
        tripRepository.save(trip5);

        Trip trip6 = new Trip(40.7128, -74.0060, "New York", holiday3);
        tripRepository.save(trip6);

        Trip trip7 = new Trip(17.1554, -62.5796, "Caribbean", holiday1);
        tripRepository.save(trip7);

        Trip trip8 = new Trip(40.7128, -74.0060, "New York", holiday1);
        tripRepository.save(trip8);

        Trip trip9 = new Trip(40.7128, -74.0060, "New York", holiday7);
        tripRepository.save(trip9);

        Date d1773 = new Date(-6216652725000L);
        Date d1773b = new Date(-6208876725000L);
        Date d1787 = new Date(-5762447925000L);
        Date d1787b = new Date(-5761843125000L);
        Date d1796 = new Date(-5469811125000L);
        Date d1784 = new Date(-5869583925000L);
        Date d1789 = new Date(-5711731125000L);
        Date d1790 = new Date(-5667148725000L);
        Date d1790b = new Date(-5667062325000L);


        Comment comment1 = new Comment(hamilton, trip7, "So grateful for the funds raised by the community.  Can't wait to get to the North American Colonies and get my education.  This is my shot!!!", d1773);
        commentRepository.save(comment1);

        Comment comment2 = new Comment(hamilton, trip8, "Excited to be in the greatest city in the world!", d1773b);
        commentRepository.save(comment2);

        Comment comment3 = new Comment(hamilton, trip1, "FINALLY got my debt plan approved.  Washington's going to be so excited.  Great doing business with you Jefferson (lol).", d1790);
        commentRepository.save(comment3);

        Comment comment4 = new Comment(jefferson, trip1, "I just wanted a shorter commute, Ham.", d1790b);
        commentRepository.save(comment4);

        Comment comment5 = new Comment(hamilton, trip2, "I was chosen for the constitutional convention!!", d1787);
        commentRepository.save(comment5);

        Comment comment6 = new Comment(jefferson, trip4, "Things are getting pretty wild here, might go hang out in France for a while.", d1784);
        commentRepository.save(comment6);

        Comment comment8 = new Comment(jefferson, trip6, "Might just come back and be Secretary of state ;)", d1789);
        commentRepository.save(comment8);

        Comment comment9 = new Comment(hamilton, trip9, "CAN'T WAIT I LOVE IT!", new Date());
        commentRepository.save(comment9);

        Comment comment10 = new Comment(burr, trip9, "Uhh, might be busy on this night guys...", new Date());
        commentRepository.save(comment10);

        Comment comment11 = new Comment(jefferson, trip9, "Don't care.  Not enough me.  0/10", new Date());
        commentRepository.save(comment11);

        Event event1 = new Event(trip9, new Date(1609459200000L), "WV74YJ3S0B", "Hamilton Musical", "Broadway");
        eventRepository.save(event1);

        Train train1 = new Train(trip2, d1787, "TUGBEZJ", "Pennsylvania Station", "30th Street Station", "1235", "1400");
        trainRepository.save(train1);

        Accommodation accommodation1 = new Accommodation(trip2, d1787, "MXP0WUXDP9", "Yorktown Hotel", "123 YorkTown St", 6);
        accommodationRepository.save(accommodation1);

        Event event2 = new Event(trip2, d1787, "O57LQZKTSM", "Constitutional Convention", "Annapolis Convention");
        eventRepository.save(event2);

        Train train2 = new Train(trip2, d1787b, "9QUIW9J", "30th Street Station", "Pennsylvania Station", "11:00", "1425");
        trainRepository.save(train2);

        Event event3 = new Event(trip1, d1790, "Y7G3U1L9347G", "Dinner", "Jefferson's House");
        eventRepository.save(event3);

        Train train3 = new Train(trip3, d1796, "QSL9662", "Pennsylvania Station", "Union Station", "1300", "1759");
        trainRepository.save(train3);

        Event event4 = new Event(trip3, d1796, "N/A", "Farewell Address", "New York");
        eventRepository.save(event4);

        Flight flight1 = new Flight(trip4, d1784, "OAB9UDED", "ORY", "EWR", "1945", "0815", "BF 721");
        flightRepository.save(flight1);

        Accommodation accommodation2 = new Accommodation(trip5, d1784, "N/A", "Lafayette Inn", "7 Reynolds St", 1826);
        accommodationRepository.save(accommodation2);

        Event event5 = new Event(trip5, d1784, "N/A", "Party!", "Paris");
        eventRepository.save(event5);

        Flight flight2 = new Flight(trip6, d1789, "YY7S8I3O2W", "EWR", "ORY", "1800", "0630", "BF 700");
        flightRepository.save(flight2);

        Flight flight3 = new Flight(trip7, d1773, "JNI4ZLLC", "NEV", "JFK", "1005", "1410", "JK 123");
        flightRepository.save(flight3);

        Event event6 = new Event(trip8, d1773b, "N/A", "Make a difference! (Also speak to Mr. Burr)", "New York");
        eventRepository.save(event6);

    }
}
