import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserContext";
export const Login = () => {
  const navigate = useNavigate();

  const { setUserRole } = useContext(UserContext);


  const [login, setLogin] = useState({
    email: "",
    password: "",
    role: "",
    // m_id:sessionStorage.getItem("uId"),
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  //  const Usrole = sessionStorage.getItem("userRole");


 //email validation
 const validateEmail=(email)=>{
  const re =/^[^\s@]+@[^\s@]+\.[^\s@]/;

  return re.test(String(email).toLocaleLowerCase());
 }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));

    if (name === "email") {
      setIsEmailValid(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
  if (!validateEmail(login.email)) {
    alert("Please enter a valid email address.");
    return;
  }

     console.log("Submitted login details:", login);

    try {
      const response = await axios.post("http://localhost:8080/login", login);
                // users=await axios.get("http://localhost:8080/users")
                

      
      if (response.data === "Login Valid") 
      {
        alert("Login successful:  "+response.data);
        sessionStorage.setItem("userRole", login.role);
        console.log("User Role:", sessionStorage.getItem("userRole"));
        setUserRole(login.role);

        navigate("/admin/dashboard");
      }else console.log("Error in login   ",response.data)
      // Reset the form after successful login
      setLogin({
        email: "",
        password: "",
        role: "",
      });
    } catch (error) {
      console.error("Login failed:", error);
      
      // Handle error, show appropriate message to the user
    }
    getUserID(login.email);
    

  };

  console.log("User Role:", sessionStorage.getItem("userRole"));

  console.log(login.role);


const getUserID = async (email)=>{
  try {
    let url = (login.role === "ADMIN") ? "admins" :
          (login.role === "TRAINER") ? "trainers" :
          (login.role === "STUDENT") ? "students" : "";
    // if(login.role ==="ADMIN"){
    //     url="admins"
    // }else if(login.role === "Trainer"){
    //   url="trainers";
    // }else {
    //   url="students"
    // }


      console.log("URL :"+url);
       const users=await axios.get("http://localhost:8080/"+url)
      //  console.log(users.data)
       const userId=users.data.map((i,key)=>{
        if(email === i.email)
           { 
            sessionStorage.setItem("uId",i.id);
            return i.id;}
          else 
              return 'user not found';
        // return i.id;
       });

       console.log(userId);
       console.log("User Id:", sessionStorage.getItem("uId"));
        
      
  } catch (error) {
      console.log(error)
  }
}




  return (
    <>
      {/* <Navbar userRole={Usrole} /> */}
      <div className="bodyergi">
        <div className="login-containers align-items-center">
          <div className="title"> User Login </div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <label>User Role</label>
                <select
                  name="role"
                  className="form-select"
                  onChange={handleChange}
                  value={login.role}
                  required
                >
                  <option>Select</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="STUDENT">STUDENT</option>
                  <option value="TRAINER">TRAINER</option>
                </select>
                <br />
                <br />
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  className={`form-control ${isEmailValid ? "" : "is-invalid"}`}
                  onChange={handleChange}
                  value={login.email}
                  placeholder="Enter your User Name"
                  autoComplete="username"
                  required
                />
                {!isEmailValid && <div className="invalid-feedback">Please enter a valid email address.</div>}

                <br />
                <br />

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  className="form-control"
                  onChange={handleChange}
                  value={login.password}
                  placeholder="Enter your User password"
                  required
                />

                <div className="d-flex py-4">
                  <span>
                    <button
                      type="submit"
                      value="Submit"
                      className="btn btn-success "
                    >Submit</button>
                  </span>
                </div>
                <div className="d-flex py-4">
                  <span>
                    <Link to="/">
                      <button
                        type="submit"
                        value="Cancle"
                        className="btn btn-secondary borderd"
                      >Cancle</button>
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
