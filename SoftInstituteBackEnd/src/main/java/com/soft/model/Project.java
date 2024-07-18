package com.soft.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Projects")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long id;
	private String projectName;
	private String projectDescription;
	private String projectRequirements;
	private String projectDeadline;
	private String projectAddingDate;
	
	private String t_a_status;
	private String t_name;
	private String s_a_status;
	private String s_name;
	private String p_a_status;
	private String p_status; 
	
	
	
		
		@ManyToOne
	    @JoinColumn(name = "trainer_id")
	    private Trainer trainer;
		private String t_assign_status;
		
		
		@ManyToOne
		@JoinColumn(name="student_id")
		private Student student;
		private String stud_assign_status;
	
	public Project () {
		
	}
	
	

	public Project(Long id, String projectName, String projectDescription, String projectRequirements,
			String projectDeadline, String projectAddingDate, String t_a_status, String t_name, String s_a_status,
			String s_name, String p_a_status, String p_status, String t_assign_status, String stud_assign_status) {
		this.id = id;
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.projectRequirements = projectRequirements;
		this.projectDeadline = projectDeadline;
		this.projectAddingDate = projectAddingDate;
		this.t_a_status = t_a_status;
		this.t_name = t_name;
		this.s_a_status = s_a_status;
		this.s_name = s_name;
		this.p_a_status = p_a_status;
		this.p_status = p_status;
		this.t_assign_status = t_assign_status;
		this.stud_assign_status = stud_assign_status;
	}



	public Project(String projectName, String projectDescription, String projectRequirements, String projectDeadline,
			String projectAddingDate, String t_a_status, String t_name, String s_a_status, String s_name,
			String p_a_status, String p_status, Trainer trainer, String t_assign_status, Student student,
			String stud_assign_status) {
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.projectRequirements = projectRequirements;
		this.projectDeadline = projectDeadline;
		this.projectAddingDate = projectAddingDate;
		this.t_a_status = t_a_status;
		this.t_name = t_name;
		this.s_a_status = s_a_status;
		this.s_name = s_name;
		this.p_a_status = p_a_status;
		this.p_status = p_status;
		this.trainer = trainer;
		this.t_assign_status = t_assign_status;
		this.student = student;
		this.stud_assign_status = stud_assign_status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public String getProjectRequirements() {
		return projectRequirements;
	}

	public void setProjectRequirements(String projectRequirements) {
		this.projectRequirements = projectRequirements;
	}

	public String getProjectDeadline() {
		return projectDeadline;
	}

	public void setProjectDeadline(String projectDeadline) {
		this.projectDeadline = projectDeadline;
	}

	public String getProjectAddingDate() {
		return projectAddingDate;
	}

	public void setProjectAddingDate(String projectAddingDate) {
		this.projectAddingDate = projectAddingDate;
	}

	public String getT_a_status() {
		return t_a_status;
	}

	public void setT_a_status(String t_a_status) {
		this.t_a_status = t_a_status;
	}

	public String getT_name() {
		return t_name;
	}

	public void setT_name(String t_name) {
		this.t_name = t_name;
	}

	public String getS_a_status() {
		return s_a_status;
	}

	public void setS_a_status(String s_a_status) {
		this.s_a_status = s_a_status;
	}

	public String getS_name() {
		return s_name;
	}

	public void setS_name(String s_name) {
		this.s_name = s_name;
	}

	public String getP_a_status() {
		return p_a_status;
	}

	public void setP_a_status(String p_a_status) {
		this.p_a_status = p_a_status;
	}

	public String getP_status() {
		return p_status;
	}

	public void setP_status(String p_status) {
		this.p_status = p_status;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public String getT_assign_status() {
		return t_assign_status;
	}

	public void setT_assign_status(String t_assign_status) {
		this.t_assign_status = t_assign_status;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public String getStud_assign_status() {
		return stud_assign_status;
	}

	public void setStud_assign_status(String stud_assign_status) {
		this.stud_assign_status = stud_assign_status;
	}
	
	
	
		
}
