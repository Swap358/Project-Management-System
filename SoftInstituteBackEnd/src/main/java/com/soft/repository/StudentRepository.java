package com.soft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.soft.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
