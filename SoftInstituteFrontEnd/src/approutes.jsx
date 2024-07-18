import React from 'react'
import { Home } from './Components/Home/home';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import { Login } from './Components/Login/login';
import { RegisterAdmin } from './Components/Registration/registeradmin';
import { RegiseterTrainer } from './Components/Registration/regisetertrainer';
import { AddProject } from './Components/AddProject/addproject';
import { AllProject } from './Components/AddProject/allproject';
import { ViewAllTrainers } from './Components/ShowAll/alltrainers';
import { RegisterStudent } from './Components/Registration/regiseterStudent';
import { Navbar } from './Components/Home/navbar';
import { ViewAllStudents } from './Components/ShowAll/allstudents';
import { StudentProject } from './Pages/Student/studentproject';
import { TrainerProjects } from './Pages/Trainer/trainerporjects';
import ChangePassword from './Components/ChangePasswod/changepassword';

export const AppRoutes = () => {

  return (
    <div>
        <Router>
        <Navbar  />
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/userlogin' element={<Login/>}/>
                <Route path='user/admin/register' element={<RegisterAdmin/>}/>
                <Route path='/allTrainer' element={<ViewAllTrainers/>} />
                <Route path='/allStudents' element={<ViewAllStudents/>} />

                <Route path='/admin/dashboard' element={<Home/>} />
                <Route path='/admin/register-trainer' element={<RegiseterTrainer/>} />
                <Route path='/trainer/register-student' element={<RegisterStudent/>} />
                <Route path='/admin/project/add'   element={<AddProject/>}/>
                <Route path='/admin/project/all'   element={<AllProject/>}/>
                <Route path='/trainer/myproject'   element={<TrainerProjects />}/>
                <Route path='/student/myproject'   element={<StudentProject />}/>
                <Route path='/change-password'  element={<ChangePassword/>}/>

              </Routes>



        </Router>

    </div>
  )
}
