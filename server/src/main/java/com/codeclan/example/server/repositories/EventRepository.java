package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.plans.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
