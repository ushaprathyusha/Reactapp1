import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Dashboard from './Dashbord/Dashboard';
// import LoginMERN from './login/LoginForm';
// import FormDataMERN from './login/FetchDataComponent';
// import FormMERN from './login/RegisterForm';
// import FileUpload from './login/FileUpload';
import Employees from './Add employee/Employees';
// import Manage from './ManageEmployee/ManageEmployee'
import ManageEmployee from './ManageEmployee/ManageEmployee';

const App = () => {
  return (
      <div>
<Router>
        <Routes>
        
          {/* {/* <Route path='/' element={<LoginMERN/>}/> */}
          <Route path='/Manage' element={<ManageEmployee/>}/>
          {/* <Route path='/' element={<FormDataMERN/>}/> */} 
          <Route path='/Employees' element={<Employees/>}/>
         
        </Routes>
      </Router>
      

      {/* <FileUpload/> */}
      {/* <Dashboard/> */}
      
      </div>
    
  );
};

export default App;
