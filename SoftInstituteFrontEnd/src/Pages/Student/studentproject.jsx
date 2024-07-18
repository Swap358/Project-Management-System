import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProjectSearchForm from '../../Components/AddProject/SearchProject/ProjectSearchForm';

export const StudentProject = () => {

    const [projects, setProject] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showForm, setShowForm] = useState(false); // State to manage form visibility
    const[selected_p_status,setSelected_p_Status]=useState("");
    const loggedInStudentId=sessionStorage.getItem("uId");

   console.log(loggedInStudentId)
    useEffect(() => {
        loadProjects();
      },[]);



    const  handle_P_update= (project) => {
        setSelectedProject(project);
        setShowForm(true); // Show the form when Assign button is clicked
      };

      const loadProjects = () => {
    axios
      .get(`http://localhost:8080/allProject/student/${loggedInStudentId}`)
      .then((responce) => {

        setProject(responce.data);
        console.log(responce.data);
      })
      .catch((error) => {
        console.log("error fetching data :", error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (!selectedProject) return;

    const updatedProject = {
      ...selectedProject,
      p_status: selected_p_status
    };

    axios.put(`http://localhost:8080/updateProject/${selectedProject.id}`, updatedProject)
      .then((response) => {
        console.log('Project updated successfully:', response.data);
        loadProjects(); // Reload projects to reflect the updated data
        setShowForm(false); // Close the form after submission
      })
      .catch((error) => {
        console.error("Error updating project:", error);
      });
  };


      const handle_P_Status_Change =(event)=>{
        setSelected_p_Status(event.target.value);
      }

  return (
    <div className="ShowRecords">
    <h1>List Of All Projects</h1>
    <ProjectSearchForm setProjects={setProject}/>
   <div className="table-responsive">
   <table className="table table-hover text-center">
      <thead>   
        <tr>
          <th scope="col">Project Name</th>
          <th scope="col">Project Description</th>
          <th scope="col">project Requirement</th>
          <th scope="col">Trainer Assign Status</th>
          <th scope="col">Trainer name</th>
          <th scope="col">Student Assign Status</th>
          <th scope="col">Student Name</th>
          <th scope="col">Project Created Date</th>
          <th scope="col">Project Assign Date</th>
          <th scope="col">Project deadline </th>
          <th scope="col">Project Status</th>
          <th scope="col">Action</th>
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
              {project.p_status !=="Completed"? (
                //  project.p_status === "Not Assign to Student"
                <button
                  className="btn btn-danger"
                  onClick={() => handle_P_update(project)}
                >
                  Update Project Status
                </button>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>

    {/* open form to assign status ======= */}

    {showForm && selectedProject && (
      <div className="assign-form-container">
        <div className="assign-form">
          <div className="head">Assing to Trainer</div>
          {/* <h2>Assign Project to Manager</h2> */}
          <form onSubmit={handleFormSubmit}>
            <div>
              <label> Project name</label>
              <input
                type="text"
                name="projectName"
                value={selectedProject.projectName}
                readOnly
              />
            </div>
            <div>
              <label> Project Description</label>
              <textarea
                name="projectDescription"
                value={selectedProject.projectDescription}
                readOnly
              />
            </div>
            <div>
              <label> Project Created Date</label>
              <input
                type="text"
                name="projectAddingDate"
                value={selectedProject.projectAddingDate}
                readOnly
              />
            </div>
            <div>
              <label> Project Deadline</label>
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
                name="p_status"
                value={selected_p_status}
                onChange={handle_P_Status_Change}
                required
              >
                <option value="">Select Status</option>
                <option value="Completed">Completed</option>
                  <option value="Working...">Working...</option>
                  <option value="Pending...">Pending...</option>
              </select>
            </div>
            <button type="submit">Update</button> {"      "}
            <button
              onClick={() => {
                setShowForm(false);
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    )}
  </div>
  )
}
