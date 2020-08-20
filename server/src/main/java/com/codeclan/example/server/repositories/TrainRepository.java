package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.plans.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainRepository extends JpaRepository<Train, Long> {
}
