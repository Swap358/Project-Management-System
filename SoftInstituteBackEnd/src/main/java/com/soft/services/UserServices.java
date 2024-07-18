 package com.soft.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.soft.model.User;
import com.soft.model.User.UserRole;
import com.soft.repository.UserRepository;

@Service
public class UserServices {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private  PasswordEncoder psEncoder;
	
	
	public UserServices(UserRepository userRepo, PasswordEncoder psEncoder) {
		super();
		this.userRepo = userRepo;
		this.psEncoder = psEncoder;
	}

	public List<User> getAllUsers() {
        return userRepo.findAll();
    }
	
	public User createUser(User newUser) {
		String encodedPassword=psEncoder.encode(newUser.getPassword());
		newUser.setPassword(encodedPassword);
		return userRepo.save(newUser);
		
	}
	
	 public User findByEmail(String email) {
	        return userRepo.findByEmail(email);
	    }

	 
	 
	 public User authUser(String email, String password) {
	        User userOptional = userRepo.findByEmail(email);
	        if (userOptional!= null) {
	            User user = userOptional;
	            if (psEncoder.matches(password, user.getPassword())) {
	                return user;
	            }
	        }
	        return null;
	    }
	 
	 public boolean authinc(String email, String password, UserRole role) {
	        User userOptional = findByEmail(email);
	        if (userOptional!=null) {
	            User user = userOptional;
	            if (role == user.getRole() && psEncoder.matches(password, user.getPassword())) {
	                return true;
	            }
	        }
	        return false;
	    }

	 //password change test
	 
	 public boolean verifyUser(String email, String oldPassword) {
	        User userOptional = userRepo.findByEmail(email);
	        
	        if (userOptional!=null) {
	            User user = userOptional;
	            return psEncoder.matches(oldPassword, user.getPassword());
	        }
	        return false;
	    }



	 
	//Update password
	 public boolean updatePassword(String email, String newPassword) {
	        User userOptional = userRepo.findByEmail(email);
	        if (userOptional!=null) {
	            User user = userOptional;
	            user.setPassword(psEncoder.encode(newPassword));
	            userRepo.save(user);
	            return true;
	        }
	        return false;
	    }
	

}

