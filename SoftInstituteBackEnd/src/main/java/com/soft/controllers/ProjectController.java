package com.soft.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.soft.model.Project;
//import com.soft.repository.ProjectRepository;
import com.soft.services.ProjectService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProjectController {
	
	@Autowired
	private ProjectService projServ;
	
//	@Autowired
//	private ProjectRepository projRepo;
	
	@GetMapping("/allProjects")
	public List<Project> getAllProjects(){
		return projServ.getAllProjects();
	}
	//test
	@GetMapping("/allProject/trainer/{id}")
	public List<Project> getTrainerProjects(@PathVariable Long id){
		return projServ.getTrainerProjects(id);
	}
	
	//get all project by student id
	@GetMapping("/allProject/student/{id}")
	public List<Project> getStudentProjects(@PathVariable Long id){
		return projServ.getStudentProjects(id);
	}
	
	
	@PostMapping("/addProject")
	public Project newProject(@RequestBody Project newProject) {
		return projServ.CreateProject(newProject);
	}
	
	
//	@PutMapping("/updateProject/{id}")
//	public ResponseEntity<Project> updateProject(@PathVariable Long id,@RequestBody Project updatedProject){
//			Project existingProject=projServ.findByid(id);
//			if(existingProject ==null) {
//				System.out.println("project not found....");
//			}
//			existingProject.setTrainer(updatedProject.getTrainer());
//			existingProject.setT_a_status(updatedProject.getT_a_status());
//			existingProject.setT_name(updatedProject.getTrainer().getName());
//			
//			System.out.println(updatedProject.getT_a_status());
//			
//			Project saveProject=projRepo.save(existingProject);
//		return ResponseEntity.ok(saveProject);
//		
//	}
	
	
	
	 @PutMapping("/updateProject/{id}")
	    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project updatedProject){
		 Project existingProject=projServ.findByid(id);
	        if(existingProject == null) {
	            return ResponseEntity.notFound().build();
	        }
	        updatedProject.setId(id); // Ensure the ID is set
	        existingProject.setT_a_status(updatedProject.getT_a_status());
	        existingProject.setTrainer(updatedProject.getTrainer());
	        existingProject.setT_name(updatedProject.getT_name()); 
	        Project savedProject = projServ.updateProject(updatedProject);
	        return ResponseEntity.ok(savedProject);
	    }
	 
	 
	 ///testing...
	 
	 @PutMapping("/updProject/{pid}/{t_id}")
	 public ResponseEntity<Project> updProject(@PathVariable Long pid,@PathVariable Long t_id, @RequestBody Project updatedProject) {
		 
		 return projServ.UpdProject(pid,t_id, updatedProject);
	 }
	 

	    @GetMapping("/projects")
	    public List<Project> searchProjects(@RequestParam String search) {
	        return projServ.searchProjects(search);
	    }
	    
	    //delete project 
	    
	    @DeleteMapping("/deleteProject/{id}")
	    public ResponseEntity<String> deleteProject(@PathVariable Long id) {
	        try {
	            projServ.deleteProject(id);
	            return ResponseEntity.ok("Project deleted successfully");
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting project");
	        }
	    }
	    
	    // Getting project Details / Statistics    
	    @GetMapping("/project-stats")
	    public Map<String ,Long> getProjetcStats(){
	    	Map<String ,Long> stats= new HashMap<>();
	    	 stats.put("totalProjects", projServ.countTotalProjects());
	         stats.put("completedProjects", projServ.countCompletedProjects());
	         stats.put("inProgressProjects", projServ.countInProgressProjects());
	         stats.put("totalStudents", projServ.countTotalStudents());
	         return stats;
	    }

}
