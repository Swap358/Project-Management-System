package com.soft.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="Trainer")
public class Trainer {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		Long id;
		private String name;
	    private String specialization;
	    private String email;
	    private String phone;
	    private String password;
	    private String city;
	    private String pincode;
	    private String gender;
	    
	    @JsonIgnore
	    @ManyToOne
	    @JoinColumn(name = "admin_id")
	    private Admin admin;
	    
	   
	    @OneToMany(mappedBy = "trainer")
	     private List<Student> student =new ArrayList<>();
	    
	    
		public List<Student> getStudent() {
			return student;
		}



		public void setStudent(List<Student> student) {
			this.student = student;
		}



		public Admin getAdmin() {
			return admin;
		}



		public void setAdmin(Admin admin) {
			this.admin = admin;
		}



		public Trainer() {
	    	
	    }


		
//		public Trainer(String name, String specialization, String email, String phone, String password, String city,
//				String pincode, String gender, Admin admin) {
//			this.name = name;
//			this.specialization = specialization;
//			this.email = email;
//			this.phone = phone;
//			this.password = password;
//			this.city = city;
//			this.pincode = pincode;
//			this.gender = gender;
//			this.admin = admin;
//		}


		public Trainer(String name, String specialization, String email, String phone, String password, String city,
				String pincode, String gender) {
			this.name = name;
			this.specialization = specialization;
			this.email = email;
			this.phone = phone;
			this.password = password;
			this.city = city;
			this.pincode = pincode;
			this.gender = gender;
		}


		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public String getSpecialization() {
			return specialization;
		}


		public void setSpecialization(String specialization) {
			this.specialization = specialization;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		public String getPhone() {
			return phone;
		}


		public void setPhone(String phone) {
			this.phone = phone;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}


		public String getCity() {
			return city;
		}


		public void setCity(String city) {
			this.city = city;
		}


		public String getPincode() {
			return pincode;
		}


		public void setPincode(String pincode) {
			this.pincode = pincode;
		}


		public String getGender() {
			return gender;
		}


		public void setGender(String gender) {
			this.gender = gender;
		}
	    
		
		
	    
	    

}
