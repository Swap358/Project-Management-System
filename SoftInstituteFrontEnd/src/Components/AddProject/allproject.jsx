import axios from "axios";
import "./allproject.css";
import React, { useEffect, useState } from "react";
import ProjectSearchForm from "./SearchProject/ProjectSearchForm";

export const AllProject = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedTName, setSelectedTName] = useState("");
  const [selectedTrainerId, setSelectedTrainerId] = useState();
  const [projects, setProject] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    loadProjects();
    loadTrainers();
  }, []);

  const loadProjects = () => {
    axios
      .get("http://localhost:8080/allProjects")
      .then((response) => {
        setProject(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error fetching data :", error);
      });
  };

  const loadTrainers = () => {
    axios
      .get("http://localhost:8080/trainers")
      .then((response) => {
        setTrainers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching trainers:", error);
      });
  };

  const handleTrainerChange = (event) => {
    const trainerId = event.target.value;
    const selectedTrainer = trainers.find(trainer => parseInt(trainer.id) === parseInt(trainerId));
    setSelectedTrainerId(trainerId);
    setSelectedTName(selectedTrainer ? selectedTrainer.name : "");
  };

  const handleAssign = (project) => {
    setSelectedProject(project);
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const trainerId = selectedTrainerId;

    const updatedProject = {
      ...selectedProject,
      trainer: { id: selectedTrainerId },
      t_name: selectedTName,
      t_a_status: "Assigned",
      p_status: "Not Assign To Student"
    };

    axios.put(`http://localhost:8080/updateProject/${selectedProject.id}`, updatedProject)
      .then((response) => {
        console.log("Project assigned to trainer successfully:", response.data);
        loadProjects();
        setShowForm(false);
      })
      .catch((error) => {
        console.log("Error assigning project to trainer:", error);
      });
  };


// delete project 
const handleDelete = (projectId) => {
  axios.delete(`http://localhost:8080/deleteProject/${projectId}`)
    .then((response) => {
      // console.log("Project deleted successfully:", response.data);
      alert(response.data)
      setProject(projects.filter(project => project.id !== projectId));
    })
    .catch((error) => {
      console.log("Error deleting project:", error);
    });
};


  return (
    <div className="ShowRecords m-2">
      <h1>List Of All Projects</h1>
    
      <ProjectSearchForm setProjects={setProject} onChange={()=>{if(!setProject){loadProjects()}}} />
      <div className="table-responsive">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Project Description</th>
              <th scope="col">Project Requirement</th>
              <th scope="col">Trainer Assign Status</th>
              <th scope="col">Trainer Name</th>
              <th scope="col">Student Assign Status</th>
              <th scope="col">Student Name</th>
              <th scope="col">Project Created Date</th>
              <th scope="col">Project Assign Date</th>
              <th scope="col">Project Deadline</th>
              <th scope="col">Project Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
            projects.map((project) => (
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
                  {project.t_a_status !== "Assigned" ? (
                    <div className="d-grid gap-2"><button className="btn btn-danger "  onClick={() => handleAssign(project)} >
                      Assign To Trainer
                    </button>
                    <button className="btn btn-primary"  onClick={() => handleDelete(project.id)}>Delete</button></div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && selectedProject && (
        <div className="assign-form-container">
          <div className="assign-form">
            <div className="head">Assign to Trainer</div>
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
                <label>Assign Project to Trainer</label>
                <select
                  name="trainer_id"
                  value={selectedTrainerId}
                  onChange={handleTrainerChange}
                  required
                >
                  <option value="">Select Trainer</option>
                  {trainers.map((trainer) => (
                    <option key={trainer.id} value={trainer.id}>
                      {trainer.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="Assign-button">
              <button type="submit">Assign</button> 
              <button type="reset" onClick={() => setShowForm(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
