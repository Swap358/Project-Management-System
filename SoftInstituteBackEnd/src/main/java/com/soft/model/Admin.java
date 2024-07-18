package com.soft.model;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String username;
	private String email;
	private String phone;
	private String password;
	private String city;
	private int pincode;
	private String gender;
	
	public Admin() {}

	//mapping one to many 
	@OneToMany(mappedBy = "admin"  ,cascade = CascadeType.ALL)
	private List<Trainer> trainer =new ArrayList<>();
	
	
	public Admin(String name, String username, String email, String phone, String password, String city, int pincode,
			String gender) {
		super();
		this.name = name;
		this.username = username;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.city = city;
		this.pincode = pincode;
		this.gender = gender;
	}
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
	
	public List<Trainer> getTrainer() {
		return trainer;
	}

	public void setTrainer(List<Trainer> trainer) {
		this.trainer = trainer;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", name=" + name + ", username=" + username + ", email=" + email + ", phone=" + phone
				+ ", password=" + password + ", city=" + city + ", pincode=" + pincode + ", gender=" + gender + "]";
	}
	
	
	
}

