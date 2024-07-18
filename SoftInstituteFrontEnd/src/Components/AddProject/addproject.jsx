import React, { useState } from 'react'
import './addproject.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export const AddProject = () => {
  const [projectData, setProjectData] = useState({
    projectName: '',
    projectDescription: '',
    projectRequirements: '',
    projectDeadline: '',
    projectAddingDate: '',

    t_a_status:"Not Assign",
    t_name:'Not Assign',
    s_a_status:'Not Assign',
    s_name:'Not Assign',
    p_a_status:'Not Assign',
    p_status:'Not Assign To Trainer'

  });
  const navigate=useNavigate();
 
  const currentDate = (new Date().toLocaleDateString());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to the server

    try {
      projectData.projectAddingDate=currentDate;
      await axios.post('http://localhost:8080/addProject', projectData)
        navigate('/admin/project/all')
      console.log("project :",projectData);
      // Clear form fields after submission



      
      setProjectData({
        projectName: '',
        projectDescription: '',
        projectRequirements: '',
        projectDeadline: '',
        projectAddingDate: '',
        // t_a_status:'',
        // t_name:'',
        // s_a_status:'',
        // s_name:'',
        // p_a_status:'',
        // p_status:''
      });


    } catch (error) {
      console.log("error:", error)
    }
  };

  return (
    <>
      <div className='bodyback'>
        <div className='containerp'>
          <div className='title'>Add Project</div>
          <div className='content'>

            <form onSubmit={handleSubmit}>
              <div className="proj-details">
                <div className='input-box'>
                  <label>Project Name:</label>
                  <input type="text" name="projectName" value={projectData.projectName} onChange={handleChange} required />
                </div>
              </div>


              <div className="text-details">
                <label>Project Description:</label><br />
                <textarea name="projectDescription" className="project-textarea" value={projectData.projectDescription} onChange={handleChange} required></textarea>
              </div>

              <div className="proj-details">
                <label>Project Requirements:</label>
                <textarea name="projectRequirements" className="project-textarea" value={projectData.projectRequirements} onChange={handleChange} required></textarea>
              </div>
              <div className="proj-details">
                <label>Project Deadline:</label>
                <input type="date" name="projectDeadline" className="project-input" value={projectData.projectDeadline} onChange={handleChange} required />
              </div>
              
              <div className='project-button'>
                <button type="submit">Add Project</button>
                <button type="reset" onClick={()=>{navigate('/')}}>Cancle</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}
