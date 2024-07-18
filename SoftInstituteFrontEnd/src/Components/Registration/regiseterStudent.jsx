import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const RegisterStudent = () => {
    let Tid=sessionStorage.getItem("uId");
    console.log(Tid);
    const [formdata, setFromData] = useState({
        name: '',
        email: '',
        username:"",
        phone: '',
        password: '',
        // confirmPassword: '',
        city: '',
        pincode: '',
        gender: '',
    })

    const navigate = useNavigate();
    const handleChange = (e) => {

        setFromData({ ...formdata, [e.target.name]: e.target.value });
       
    }
    //console.log(formdata)
const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
        await axios.post(`http://localhost:8080/addStudent/${Tid}`, formdata);
       
        const userData = {
            email: formdata.email,
            password: formdata.password,
            role: "STUDENT"
        };

        //add user when register and add in user table ....
        await axios.post('http://localhost:8080/addUser', userData);




        setFromData({
            name: '',
        email: '',
        username:"",
        phone: '',
        password: '',
        // confirmPassword: '',
        city: '',
        pincode: '',
        gender: '', // Reset gender to default
        });

        navigate('user/admin/Student/all');
    } catch (error) {
        console.log("error in registering student :", error)
        alert('failed to register Stuudent...');
    }
}
  return (
    <div className='bodyergi'>
    <div className="containers">
        <div className="title"> Student Registration</div>
        <div className="content">
            <form  onSubmit={handleSubmit} >
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="Enter your name" name='name' value={formdata.name} onChange={handleChange} required />
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" placeholder="Enter your email" name='email' value={formdata.email} onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Enter your username" name='username' value={formdata.username} onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="text" placeholder="Enter your number" name='phone' value={formdata.phone} onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="text" placeholder="Enter your password" name='password' value={formdata.password} onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="text" placeholder="Confirm your password" name='password' required/>
                    </div>
                    <div className="input-box">
                                <span className="details">City</span>
                                <input type="text" placeholder="Enter your City" name='city' value={formdata.city} onChange={handleChange} required/>
                            </div>
                            <div className="input-box">
                                <span className="details"> Pincode</span>
                                <input type="text" placeholder="Enter your Pincode" name='pincode' value={formdata.pincode} onChange={handleChange} required/>
                            </div>
                </div>
                <div className="form-group">
                            <label>Gender</label>
                            <select className="form-control" id="genderSelect" name="gender"
                                onChange={handleChange} value={formdata.gender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                            </select>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                            {/* <div className="button">
                               <span> <input type="submit" value="Register"/></span>
                               <span> <input type="submit"  style={{float:'right'}} value="Cancle"/></span>
                            </div> */}
                            
                       </form>
                </div>
        </div>

    </div>
  )
}
