package com.system.plusmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.system.plusmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
