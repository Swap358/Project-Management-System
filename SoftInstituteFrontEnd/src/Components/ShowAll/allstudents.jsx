import axios from "axios";
import React, { useEffect, useState } from "react";

export const ViewAllStudents = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    axios
      .get("http://localhost:8080/students")
      .then((responce) => {
        setStudents(responce.data);
        console.log(responce.data);
      })
      .catch((error) => {
        console.log("error Fetching data :", error);
      });
  };

  const handleRemove = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8080/deleteStudent/${id}`);
      alert(`student with id ${id} is removed`);
      console.log(`student with id ${id} is removed`);
      loadStudents(); // Reload students after removal
    } catch (error) {
      console.error("Error removing student:", error);
    }
  };

  return (
    <div className="container-fluid mt-2 ShowRecords">
      <h1>List Of All students</h1>
      <div className="table-responsive">
            <table className="table table-hover text-center">
            <thead>
                <tr>
                <th scope="col">Name</th>

                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
                <th scope="col">Pincode</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.city}</td>
                    <td>{student.pincode}</td>
                    <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(student.id)}
                    >
                        Remove
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
      </div>
    </div>
  );
};
