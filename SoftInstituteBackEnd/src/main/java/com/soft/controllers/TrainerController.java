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

//import com.soft.model.Admin;
import com.soft.model.Trainer;
//import com.soft.services.AdminServices;
import com.soft.services.TrainerService;

@RestController
@CrossOrigin("http://localhost:3000")
public class TrainerController {
	
	@Autowired
	private TrainerService trainServ;
//	@Autowired 
//	private AdminServices adminServ;
	
	@GetMapping("/trainers")
	public List<Trainer> getAllTrainer(){
		return trainServ.getAllTrainers();
	}
	
	
	@PostMapping("/addTrainer/{adminId}")
    public Trainer addTrainer(@PathVariable Long adminId, @RequestBody Trainer newTrainer) {
        return trainServ.CreateTrainer(adminId, newTrainer);
    }
	
	
	
	@DeleteMapping("/deleteTrainer/{id}")
	public String deleteTrainer(@PathVariable Long id ) {
		trainServ.deleteTrainer(id);
		return "Trainer with id "+ id +"is deleted";
	}

}
