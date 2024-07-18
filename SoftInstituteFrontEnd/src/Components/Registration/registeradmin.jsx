import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    pincode: '',
    gender: 'male' // Default gender
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const validatePincode = (pincode) => {
    const re = /^\d{6}$/;
    return re.test(pincode);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email address";
    if (!validatePhone(formData.phone)) newErrors.phone = "Phone number must be 10 digits";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!validatePincode(formData.pincode)) newErrors.pincode = "Pincode must be 6 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('http://localhost:8080/addAdmin', formData);
      const userData = {
        email: formData.email,
        password: formData.password,
        role: "ADMIN"
      };
      await axios.post('http://localhost:8080/addUser', userData);

      setFormData({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        city: '',
        pincode: '',
        gender: 'male'
      });
      navigate('/');
    } catch (error) {
      console.log("Error in registering admin:", error);
      alert('Failed to register admin');
    }
  };

  return (
    <div className='bodyergi'>
      <div className="containers">
        <div className="title">Admin Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name='name'
                  required
                  onChange={handleChange}
                  value={formData.name}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  name='username'
                  required
                  onChange={handleChange}
                  value={formData.username}
                />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name='email'
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name='phone'
                  required
                  autoComplete="tel"
                  onChange={handleChange}
                  value={formData.phone}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name='password'
                  required
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={formData.password}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  name='confirmPassword'
                  required
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input
                  type="text"
                  placeholder="Enter your city"
                  name='city'
                  required
                  onChange={handleChange}
                  value={formData.city}
                />
                {errors.city && <p className="error">{errors.city}</p>}
              </div>
              <div className="input-box">
                <span className="details">Pincode</span>
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  name='pincode'
                  required
                  onChange={handleChange}
                  value={formData.pincode}
                />
                {errors.pincode && <p className="error">{errors.pincode}</p>}
              </div>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control"
                id="genderSelect"
                name="gender"
                onChange={handleChange}
                value={formData.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
