import React, { useState } from 'react';
import axios from 'axios';

const ProjectSearchForm = ({ setProjects }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm) return;
    
    axios
      .get(`http://localhost:8080/projects?search=${searchTerm}`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });

    
      if(!setProjects){alert("No Project Found")}
    console.log(searchTerm);
  };

  return (
    <div className="d-flex gap-2">
      <input
        type="search"
        className='form '
        name="proj-name"
        placeholder="Search By Id or Name"
        value={searchTerm}
        onChange={(e) => {
            setSearchTerm(e.target.value)}}
      />
      <button className='btn btn-success' value="submit" onClick={handleSearch}  >Search</button>
    </div>
  );
};

export default ProjectSearchForm;
