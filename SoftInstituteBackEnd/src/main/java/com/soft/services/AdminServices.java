package com.soft.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soft.model.Admin;
import com.soft.repository.AdminRepository;

@Service
public class AdminServices {

	@Autowired
	private AdminRepository adminRepo;
	
//	private Admin admin;
		
	public List<Admin> getallAdmins(){
		return adminRepo.findAll();
	}
	
	public Admin CreateAdmin(Admin newAdmin) {
		
		return adminRepo.save(newAdmin);
	}
	
	public Admin findAdminById(Long admin_id) {
		return adminRepo.findById(admin_id).orElse(null);	
	}
	
	 public Optional<Long> findAdminIdByEmail(String email) {
	        return adminRepo.findIdByEmail(email);
	 }

	
	
}
