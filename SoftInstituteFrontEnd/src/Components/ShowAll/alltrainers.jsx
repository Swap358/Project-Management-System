import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewAllTrainers.css'; // Custom CSS for additional styles

export const ViewAllTrainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        loadTrainers();
    }, []);

    const loadTrainers = () => {
        axios.get('http://localhost:8080/trainers')
            .then(response => {
                setTrainers(response.data);
            })
            .catch(error => {
                console.error('Error fetching trainers:', error);
            });
    };

    const handleRemove = async (id) => {
        console.log(id);
        try {
            await axios.delete(`http://localhost:8080/deleteTrainer/${id}`);
            console.log(`Trainer with id ${id} is removed`);
            loadTrainers(); // Reload trainers after removal
        } catch (error) {
            console.error('Error removing trainer:', error);
        }
    };

    return (
        <div className='container-fluid mt-2 ShowRecords'>
            <h1 className='text-center'>List Of All Trainers</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Specialization</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">Pincode</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainers.map(trainer => (
                            <tr key={trainer.id}>
                                <td>{trainer.name}</td>
                                <td>{trainer.specialization}</td>
                                <td>{trainer.email}</td>
                                <td>{trainer.phone}</td>
                                <td>{trainer.city}</td>
                                <td>{trainer.pincode}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleRemove(trainer.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
