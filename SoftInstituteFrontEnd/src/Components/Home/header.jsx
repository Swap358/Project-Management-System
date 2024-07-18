import React from "react";
import loginpage from "../../Assets/loginpage.png";
import "./header.css";
import img1 from "./../../Assets/project1.jpg";

export const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-7 col-12 py-2 ">
            <h2 className="headrng-1">
              Effortlessly Streamline your task with <br />
              Softonic Institute Project Management System.
            </h2>
          </div>
          <div className="col-md-5 col-12 py-2 d-flex justify-content-center">
            <img
              src={loginpage}
              alt=""
              className="object-fit-contain mx-auto d-block headerimg"
            />
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap bg-light p-4">
        <div className="col-sm-12 col-md-4">
          <div className="img-cntr">
            <img src={img1} alt="project-img" />
          </div>
        </div>
        <div className="col-sm-12 col-md-8 d-flex align-items-center">
          <div className="div-aritcle">
            <h4>
              <span >Welcome To </span>
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
        <div className="col-sm-12 col-md-8 d-flex align-items-center">
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
        <div className="col-sm-12 col-md-4">
          <div className="img-cntr">
            <img src={img1} alt="project-img" />
          </div>
        </div>
      </div>
    </>
  );
};
