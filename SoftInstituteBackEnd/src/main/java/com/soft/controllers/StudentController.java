package com.soft.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.soft.model.Student;
//import com.soft.model.Trainer;
import com.soft.services.StudentService;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {
	
	@Autowired
	private StudentService studentServ;
	
	@GetMapping("/students")
	public List<Student> getAllStudent(){
		return studentServ.getAllStudents();
	}
	
	
	@PostMapping("/addStudent/{trainerId}")
	public Student newStudent(@PathVariable Long trainerId ,@RequestBody Student newStudent) {
		return studentServ.CreateStudent(trainerId,newStudent);
	}
	
	@DeleteMapping("/deleteStudent/{id}")
	public String deleteTrainer(@PathVariable Long id) {
		studentServ.deleteStudent(id);
		return "Student with id "+ id +"is deleted";
	}
	
	
	
	
	
/*@DeleteMapping("/deleteTrainer/{id}")
	public String deleteTrainer(@PathVariable Long id ) {
		trainServ.deleteTrainer(id);
		return "Trainer with id "+ id +"is deleted";
	}
 * 
 * 
 * 
 * 
 * @PostMapping("/addTrainer/{adminId}")
    public Trainer addTrainer(@PathVariable Long adminId, @RequestBody Trainer newTrainer) {
        return trainServ.CreateTrainer(adminId, newTrainer);
    }
 * */
	
	
}
