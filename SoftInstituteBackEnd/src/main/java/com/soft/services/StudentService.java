package com.soft.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.soft.model.Student;
import com.soft.model.Trainer;
import com.soft.repository.StudentRepository;
import com.soft.repository.TrainerRepository;

@Service
public class StudentService {

		@Autowired
		private StudentRepository studRepo;
		@Autowired
		private TrainerRepository TrainRepo;
		public List<Student> getAllStudents(){
			return studRepo.findAll();
		}
		
		public Student CreateStudent(Long trainer_id,Student newStudent) {
			
			Trainer trainer=TrainRepo.findById(trainer_id).orElse(null);
			if(trainer != null) {
				newStudent.setTrainer(trainer);
				return studRepo.save(newStudent);
			}else
			{
				System.out.println("user not found");
				return null;
			}
			
		}
		
		
		
		  public void deleteStudent(Long id) {
			if(!studRepo.existsById(id)) {
				System.out.println("Student not forund");
			}
			studRepo.deleteById(id);
		}
		 
		
		
}
