package com.soft.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.soft.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

	Optional<Long> findIdByEmail(String email);

}
