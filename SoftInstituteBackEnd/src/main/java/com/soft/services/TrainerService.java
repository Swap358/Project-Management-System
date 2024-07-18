package com.soft.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soft.model.Admin;
import com.soft.model.Trainer;
import com.soft.repository.AdminRepository;
import com.soft.repository.TrainerRepository;

@Service
public class TrainerService {

		@Autowired
		private TrainerRepository trainerRepo;
		
		@Autowired
		private AdminRepository adminRepo;
		
//		@Autowired
//		private AdminServices adminServ;
		
		//for get  all trainers list
		public List<Trainer> getAllTrainers(){
			return trainerRepo.findAll();
		}
		
		
		//for get trainer where added by admin special for admin's trainer list
		
//		public List<Trainer> getAllTrainerByAdminId(){
//			return trainerRepo.find
//		}
		
		
		public Trainer CreateTrainer(Long admin_id,Trainer newTrainer) {
			 Admin admin = adminRepo.findById(admin_id).orElse(null);
			
			 if (admin != null) {
		            newTrainer.setAdmin(admin);
		            return trainerRepo.save(newTrainer);
		        } else {
		            System.out.println("user not found...");
		            return null;
		        }
//			return trainerRepo.save(newTrainer);
		}
		
		
		
		public void deleteTrainer(Long id) {
			if(!trainerRepo.existsById(id)) {
				System.out.println("Trainer not forund");
			}
			trainerRepo.deleteById(id);
		}
		
		
		public Admin findAdminById(Long id) {
		    return adminRepo.findById(id)
		                    .orElse(null); // or throw an exception or handle it as per your requirement
		}
}
