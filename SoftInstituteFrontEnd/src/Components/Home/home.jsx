import React from "react";
import loginpage from "../../Assets/loginpage.png";
import "./home.css";

import img1 from "./../../Assets/project1.jpg";
import { ProjInfo } from "../ProjectInfo/ProjInfo";
import { Footer } from "../Footer/footer";

export const Home = () => {
  return (
    <>
      <div className="container bg-light pt-4">
        <div className="row">
          <div className="col-md-7 col-12 py-2">
            <h2 className="headrng-1">
              Effortlessly Streamline your task with <br />
              Softonic Institute Project Management System.
            </h2>
          </div>
          <div className="col-md-5 py-2 d-none d-md-flex headerimg d-flex justify-content-center">
            <img
              src={loginpage}
              alt="login"
              className="img-fluid mx-auto d-blocks pic"
            />
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap bg-light p-4">
        <div className="col-sm-12 col-md-4 img-cntr d-flex justify-content-center align-items-center">
          <img src={img1} alt="project-img" className="img-fluid pic" />
        </div>
        <div className=" col-md-8 col-sm-12  align-items-center float-right">
          <div className="div-article">
            <h4>
              <span>Welcome To </span>
              <br />
              Project Management System
            </h4>
            <p>
              A Project Management System is a powerful tool designed to help
              individuals and teams efficiently organize, track, and accomplish
              their tasks/projects. By centralizing projects and tasks in one
              place, it allows users to easily create, assign, and prioritize
              assignments, ensuring that nothing falls through the cracks. With
              features such as deadlines, reminders, and progress tracking, it
              promotes accountability and keeps everyone on the same page.
            </p>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap bg-light p-4">
        <div className="col-sm-12 col-md-8 d-flex align-items-center order-2 order-md-1">
          <div className="div-article">
            <h4>Handle Multiple Projects Efficiently</h4>
            <p>
              Handling multiple projects efficiently is a skill that requires
              effective organization, prioritization, and time management. The
              key to success lies in establishing a systematic approach to
              balance and execute tasks across various projects. Breaking down
              each project into manageable tasks, setting clear deadlines, and
              prioritizing based on urgency and importance can help prevent
              feeling overwhelmed.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 d-flex img-cntr justify-content-center align-items-center order-1 ">
          <img src={img1} alt="project-img" className="img-fluid pic" />
        </div>
      </div>
      <ProjInfo/>
      <Footer/>
    </>
  );
};
