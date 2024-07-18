import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectSearchForm from "../../Components/AddProject/SearchProject/ProjectSearchForm";

export const TrainerProjects = () => {
  const [students, setStudents] = useState([]);
  
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedStudentName, setSelectedStudentName] = useState("");
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const loggedInTrainerId=sessionStorage.getItem("uId");

 
  useEffect(() => {
    loadProjects();
    loadStudents();
  },[]);

  const loadStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const loadProjects = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/allProject/trainer/${loggedInTrainerId}`);
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };


  const handleStudentChange = (event) => {
    const studentId = event.target.value;
    const selectedStudent = students.find(
      (student) => student.id === parseInt(studentId)
    );
    setSelectedStudentId(studentId);
    setSelectedStudentName(selectedStudent ? selectedStudent.name : "");
  };

  const handleAssign = (project) => {
    setSelectedProject(project);
    setShowForm(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedProject = {
      ...selectedProject,
      student: { id: selectedStudentId },
      s_name: selectedStudentName,
      s_a_status: "Assigned",
      p_status: "Pending",
    };

    try {
      await axios.put(
        `http://localhost:8080/updateProject/${selectedProject.id}`,
        updatedProject
      );
      loadProjects();
      setShowForm(false);
    } catch (error) {
      console.error("Error assigning project to student:", error);
    }
  };

  return (
    <div className="container-fluid mt-2 ShowRecords">
      <h1>List Of All Projects</h1>
      <ProjectSearchForm setProjects={setProjects}/>
     <div className="table-responsive">
     <table className="table table-hover text-center">
        <thead >
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Project Requirement</th>
            <th>Trainer Assign Status</th>
            <th>Trainer Name</th>
            <th>Student Assign Status</th>
            <th>Student Name</th>
            <th>Project Created Date</th>
            <th>Project Assign Date</th>
            <th>Project Deadline</th>
            <th>Project Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td>{project.projectDescription}</td>
              <td>{project.projectRequirements}</td>
              <td>{project.t_a_status}</td>
              <td>{project.t_name}</td>
              <td>{project.s_a_status}</td>
              <td>{project.s_name}</td>
              <td>{project.projectAddingDate}</td>
              <td>{project.p_a_status}</td>
              <td>{project.projectDeadline}</td>
              <td>{project.p_status}</td>
              <td>
                {project.s_a_status !== "Assigned" && (
                  <button
                    className="btn btn-danger"
                    onClick={() => handleAssign(project)}
                  >
                    Assign To Student
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>

      {showForm && selectedProject && (
        <div className="assign-form-container">
          <div className="assign-form">
            <h2>Assign Project to Student</h2>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  value={selectedProject.projectName}
                  readOnly
                />
              </div>
              <div>
                <label>Project Description</label>
                <textarea
                  name="projectDescription"
                  value={selectedProject.projectDescription}
                  readOnly
                />
              </div>
              <div>
                <label>Project Created Date</label>
                <input
                  type="text"
                  name="projectAddingDate"
                  value={selectedProject.projectAddingDate}
                  readOnly
                />
              </div>
              <div>
                <label>Project Deadline</label>
                <input
                  type="text"
                  name="projectDeadline"
                  value={selectedProject.projectDeadline}
                  readOnly
                />
              </div>
              <div>
                <label>Assign Project to Student</label>
                <select
                  name="student_id"
                  value={selectedStudentId}
                  onChange={handleStudentChange}
                  required
                >
                  <option value="">Select Student</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Assign</button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
