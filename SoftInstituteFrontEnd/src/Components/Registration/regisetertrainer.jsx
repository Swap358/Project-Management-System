import axios from 'axios';
import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
export const RegiseterTrainer = () => {
  let Aid = sessionStorage.getItem("uId");
  console.log(Aid);

  const [formdata, setFromData] = useState({
    name: '',
    specialization: '',
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
    setFromData({ ...formdata, [e.target.name]: e.target.value });
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

    if (!formdata.name.trim()) newErrors.name = "Name is required";
    if (!formdata.specialization.trim()) newErrors.specialization = "Specialization is required";
    if (!validateEmail(formdata.email)) newErrors.email = "Invalid email address";
    if (!validatePhone(formdata.phone)) newErrors.phone = "Phone number must be 10 digits";
    if (formdata.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formdata.password !== formdata.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formdata.city.trim()) newErrors.city = "City is required";
    if (!validatePincode(formdata.pincode)) newErrors.pincode = "Pincode must be 6 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post(`http://localhost:8080/addTrainer/${Aid}`, formdata);
      const userData = {
        email: formdata.email,
        password: formdata.password,
        role: "TRAINER"
      };
      await axios.post('http://localhost:8080/addUser', userData);

      setFromData({
        name: '',
        specialization: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        city: '',
        pincode: '',
        gender: 'male'
      });
      alert("Trainer Registration Successful");
      navigate('/allTrainer');
    } catch (error) {
      console.log("Error in registering trainer:", error);
      alert('Failed to register trainer');
    }
  };

  return (
    <div className='bodyergi'>
      <div className="containers">
        <div className="title">Trainer Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name='name'
                  value={formdata.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="input-box">
                <span className="details">Specialization</span>
                <input
                  type="text"
                  placeholder="Enter your specialization"
                  name='specialization'
                  value={formdata.specialization}
                  onChange={handleChange}
                  required
                />
                {errors.specialization && <p className="error">{errors.specialization}</p>}
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name='email'
                  value={formdata.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name='phone'
                  value={formdata.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name='password'
                  value={formdata.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  name='confirmPassword'
                  value={formdata.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input
                  type="text"
                  placeholder="Enter your City"
                  name='city'
                  value={formdata.city}
                  onChange={handleChange}
                  required
                />
                {errors.city && <p className="error">{errors.city}</p>}
              </div>
              <div className="input-box">
                <span className="details">Pincode</span>
                <input
                  type="text"
                  placeholder="Enter your Pincode"
                  name='pincode'
                  value={formdata.pincode}
                  onChange={handleChange}
                  required
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
                value={formdata.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </div>
            <div className="button d-flex justify-content-center gap-5">
              <input type="submit" value="Register" />
              <input type="reset" value="Cancel" onClick={() => { window.history.back() }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
