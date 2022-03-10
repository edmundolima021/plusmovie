package com.system.plusmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.system.plusmovie.entities.Score;
import com.system.plusmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
