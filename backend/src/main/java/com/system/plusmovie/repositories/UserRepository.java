package com.system.plusmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.system.plusmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
