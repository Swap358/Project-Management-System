package com.soft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.soft.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

	List<Project> findByTrainerId(Long trainerId);

	List<Project> findByStudentId(Long studentId);
	
	List<Project> findByProjectNameContainingIgnoreCaseOrId(String projectName, Long id);

//	Long countByPStatus(String string);
	 @Query("SELECT COUNT(p) FROM Project p WHERE p.p_status = :status")
	    Long countByP_Status(@Param("status") String status);

}
