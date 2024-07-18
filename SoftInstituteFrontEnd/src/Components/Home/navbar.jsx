import React, { useContext } from 'react';
import logo1 from './../../Assets/logo2.png';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export const Navbar = () => {
    const navigate = useNavigate();
    const { userRole, setUserRole } = useContext(UserContext);

    // console.log('UserRole:', userRole);

    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    const handleLogout = () => {
        sessionStorage.removeItem('userRole');
        setUserRole(null);
        navigate('/');
    }

    return (
        <div className='nav-container'>
            <nav>
                <ul className="sidebar">
                    <li onClick={hideSidebar} className="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                        </svg>
                    </li>
                    

                   
                    {userRole === 'ADMIN' ? (<AdminNavbar />) :
                        userRole === 'TRAINER' ? (<TrainerNavbar />) :
                            userRole === 'STUDENT' ? (<StudentNavbar />) : null
                    }
                  


                    {userRole == null ?
                        (
                            < >
                                <li ><Link to="/">About Us</Link></li>
                                <li ><Link to="/userlogin">User Login</Link></li>
                            </>
                        ) :
                        (
                            <>
                                <li className="hideOnMobile"><Link to="/">Home</Link></li>
                                <li><Link onClick={handleLogout}>Logout</Link></li>
                            </>
                        )
                    }


                </ul>

                <ul >
                    <li>
                        <Link to='/'>
                            <img src={logo1} alt="Logo" className='logo'/>
                        </Link>
                    </li>
                  
                   
                    {userRole === 'ADMIN' ? (<AdminNavbar />) :
                        userRole === 'TRAINER' ? (<TrainerNavbar />) :
                            userRole === 'STUDENT' ? (<StudentNavbar />) : null
                            
                    }
                   
                    {userRole == null ?
                        (
                            <>
                                <li className="hideOnMobile"><Link to="/aboutus">About Us</Link></li>
                                <li className="hideOnMobile"><Link to="/userlogin">User Login</Link></li>
                            </>
                        ) :
                        (
                            <>
                                <li className="hideOnMobile"><Link to="/">Home</Link></li>
                                <li className="hideOnMobile"> <Link onClick={handleLogout}>Logout</Link></li>
                            </>
                        )
                    }

                    <li className="menu-button" onClick={showSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25">
                            <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const AdminNavbar = () => {
    return (
        <ul className='hideOnMobile'>
            <li></li>
            <li>
                <Link to="/admin/register-trainer">Register Trainer</Link>
            </li>
            <li>
                <Link to="/admin/project/add">Add Project</Link>
            </li>
            <li>
                <Link to="/admin/project/all">All Projects</Link>
            </li>
            <li>
                <Link to='/allTrainer'>View Trainers</Link>
            </li>
            <li>
                <Link to="/allStudents">View All Students</Link>
            </li>
            <li>
                <Link to="/change-password">Change Password</Link>
            </li>
        </ul>
    );
};

const TrainerNavbar = () => {
    return (
        <ul  className='hideOnMobile'>
            <li></li>
            <li>
                <Link to="/trainer/myproject">My Project</Link>
            </li>
            <li>
                <Link to="/trainer/register-student">Register Student</Link>
            </li>
            <li>
                <Link to='/allstudents'>View Students</Link>
            </li>
            <li>
                <Link to="/change-password">Change Password</Link>
            </li>
        </ul >
    );
}

const StudentNavbar = () => {
    return (
        <ul  className='hideOnMobile'>
            <li></li>
            <li>
                <Link to="/student/myproject">My Project</Link>
            </li>
            <li>
                <Link to='/change-password'>Change Password</Link>
            </li>
        </ul>
    );
}
