import React, { useContext, useState } from 'react';
import axios from 'axios';
import './change.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const Navigate =useNavigate();
  const { userRole, setUserRole } = useContext(UserContext);


  
  console.log("use role : "+userRole)

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    console.log("use role : "+userRole)
    if (!email || !oldPassword || !newPassword) {
      setMessage('Please fill out all fields.');
      return;
    }

    try {
      // Make a POST request to the backend to verify the old password and email
      const response = await axios.post('http://localhost:8080/verify', { email, oldPassword });

      if (response.data.success) {
        // If verification is successful, update the password
        const updateResponse = await axios.post('http://localhost:8080/update-password', { email, newPassword });

        if (updateResponse.data.success) {
          setMessage('Password changed successfully.');
          alert('Password changed successfully.',{message})
          setUserRole(null)
          Navigate('/userlogin')

        } else {
          setMessage('Failed to change password.');
        }
      } else {
        setMessage('Invalid email or password.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
  <div className='change-div'> 
     <div className='change-pass-sec'>
       <div className='change-form' >
      <h2>Change Password<hr /></h2>
      
      <form onSubmit={handleChangePassword}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            autoComplete='email'
            placeholder='Enter Email'
            required 
          />
        </div>
        <div>
          <label>Old Password:</label>
          <input 
            type="password" 
            value={oldPassword} 
            onChange={(e) => setOldPassword(e.target.value)} 
            autoComplete='password'
            placeholder='Enter Old Password'
            required 
          />
        </div>
        <div>
          <label>New Password:</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            autoComplete='newPassword'
            placeholder='Enter New Password'
            required 
          />
        </div>
       <div className='d-flex bg-light gap-5'>
         <button type="submit">Change Password</button>
        <button type="reset" onClick={()=>window.history.back()}>Cancel</button>
        </div>
      </form>
      {message && (message)}
    </div>
   </div>
  </div>
  );
};

export default ChangePassword;
