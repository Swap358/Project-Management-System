
import './App.css';
import { UserContext, UserProvider } from './UserContext';
import { useContext } from 'react';
import { AppRoutes } from './approutes';
//import Swal from 'sweetalert2';
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

function App() {
  // const { userRole } = useContext(UserContext);
  // const Usrole=sessionStorage.getItem('userRole');
  return (
    <UserProvider >
      <div>
       
        {/* <RegisterStudent/> */}
        
        <AppRoutes/>
  </div>
    </UserProvider>
  );
}

export default App;