package com.soft.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.soft.model.Project;
import com.soft.model.Trainer;
import com.soft.repository.ProjectRepository;
import com.soft.repository.StudentRepository;
import com.soft.repository.TrainerRepository;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepository projectRepo;
	
	@Autowired
	private TrainerRepository TrainRepo;
	
	@Autowired
	private StudentRepository studRepo;
	
	public List<Project> getAllProjects(){
		return projectRepo.findAll();
	}
	
	public Project CreateProject(Project newProject) {
		return projectRepo.save(newProject);
	}
	// project find id	
	public Project findByid(Long  id) {
		Optional<Project> projectOptional=projectRepo.findById(id);
		return projectOptional.orElse(null);
	}
	
	 public Project updateProject(Project updatedProject) {
	        return projectRepo.save(updatedProject);
	    }
	 
	 ///testing
	 public ResponseEntity<Project> UpdProject(Long pid,Long Tid,Project updatedProject) {
		Trainer trainer =TrainRepo.findById(Tid).orElse(null);
		Project existingProject=findByid(pid);
		if(existingProject ==null) {
			return ResponseEntity.notFound().build();
		}
		
		updatedProject.setId(pid);
		existingProject.setT_a_status(updatedProject.getT_a_status());
        existingProject.setTrainer(updatedProject.getTrainer());
        existingProject.setT_name(updatedProject.getT_name()); 
		if(trainer !=null) {
			updatedProject.setTrainer(trainer);	
		}
		
		
		Project savedProject = projectRepo.save(existingProject);
		return ResponseEntity.ok(savedProject);
		
	 }

	 public List<Project> getTrainerProjects(Long trainerId) {
	        return projectRepo.findByTrainerId(trainerId);
	    }

	public List<Project> getStudentProjects(Long studentId) {
		
		return projectRepo.findByStudentId(studentId);
	}
	 
	
	 public List<Project> searchProjects(String searchTerm) {
	        Long id = null;
	        try {
	            id = Long.parseLong(searchTerm);
	        } catch (NumberFormatException e) {
	            // searchTerm is not a number, ignore the exception
	        }
	        return projectRepo.findByProjectNameContainingIgnoreCaseOrId(searchTerm, id);
	    }
	 
	 // delete project 
	 
	 public void deleteProject(Long projectId) {
	        projectRepo.deleteById(projectId);
	    }

	 
	 // Total Projects
	public Long countTotalProjects() {
		
		return projectRepo.count();
	}
	// total Completed projects
	public Long countCompletedProjects() {
		// TODO Auto-generated method stub
		 return projectRepo.countByP_Status("completed");
	}

	public Long countInProgressProjects() {
		// TODO Auto-generated method stub
		 return projectRepo.countByP_Status("working");
	}

	public Long countTotalStudents() {
		// TODO Auto-generated method stub
		 return studRepo.count();
	}
}
