package com.soft.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name="students")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String phone;
	private String password;
	private String city;
	private int pincode;
	private String gender;
	
	
	 @JsonIgnore
	 @ManyToOne
	 @JoinColumn(name = "trainer_id")
	 private Trainer trainer;
	
	 
	
	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public Student() {
		
	}

	public Student(String name, String email, String phone, String password, String city, int pincode, String gender) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.city = city;
		this.pincode = pincode;
		this.gender = gender;
	}
	
	
	public Student(String name, String email, String phone, String password, String city, int pincode, String gender,
			Trainer trainer) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.city = city;
		this.pincode = pincode;
		this.gender = gender;
		this.trainer = trainer;
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

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
		

	
}
