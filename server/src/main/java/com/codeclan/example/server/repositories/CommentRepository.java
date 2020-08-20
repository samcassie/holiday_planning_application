package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByTripHolidayTravellersId(Long id);

}
