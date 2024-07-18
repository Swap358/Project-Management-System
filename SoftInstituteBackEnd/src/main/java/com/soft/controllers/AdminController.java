package com.soft.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.soft.model.Admin;
import com.soft.services.AdminServices;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {
	
		@Autowired 
		private AdminServices adminServ;
		//private UserServices userServ;
		
		@GetMapping("/admins")
		public List<Admin> getAllAdmin(){
			return adminServ.getallAdmins();
		}
		
		@PostMapping("/addAdmin")
		public Admin newAdmin(@RequestBody Admin newAdmin) {
			
			return adminServ.CreateAdmin(newAdmin);
			
		}
		
		
		
		 @GetMapping("/admin/{email}")
		    public ResponseEntity<Long> getAdminIdByEmail(@PathVariable String email) {
		        Optional<Long> adminIdOptional = adminServ.findAdminIdByEmail(email);
		        if (adminIdOptional.isPresent()) {
		            return ResponseEntity.ok(adminIdOptional.get());
		        } else {
		            return null;
		        }
		    }
		
		 
}
