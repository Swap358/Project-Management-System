import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import './projectinfo.css'
export const ProjInfo = () => {
  // const totalProjects = 50;
  // const completedProjects = 30;
  // const inProgressProjects = 15;
  // const totalEmployees = 20;
const [data ,setData] =useState({
  totalProjects: 0,
  completedProjects: 0,
  inProgressProjects: 0,
  totalStudents: 0
});

useEffect(() => {
  // Fetch data from your backend API
  fetch('http://localhost:8080/project-stats')
    .then(response => response.json())
    .then(data => {
      setData({
        totalProjects: data.totalProjects,
        completedProjects: data.completedProjects,
        inProgressProjects: data.inProgressProjects,
        totalStudents: data.totalStudents
      });
    }).catch(error => console.error('Error fetching project stats:', error));
}, []);


  return (
    <div className='container'>
            <div className="">
            <div className="report-container">
      <div className="report-item">
       
        <CountUp start={0} end={data.totalProjects} duration={2.5} />
        <h6>Total Projects</h6>
      </div>
      <div className="report-item">
        
        <CountUp start={0} end={data.completedProjects} duration={2.5} />
        <h6>Completed Projects</h6>
      </div>
      <div className="report-item">
       
        <CountUp start={0} end={data.inProgressProjects} duration={2.5} />
        <h6>Total In Progress Projects</h6>
      </div>
      <div className="report-item">
        <CountUp start={0} end={data.totalStudents} duration={2.5} />
        <h6>Total Students</h6>
      </div>
    </div>
            </div>
    </div>
  )
}
