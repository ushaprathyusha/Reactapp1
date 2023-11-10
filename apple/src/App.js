// import React from 'react';
// import Home from './component/pages/Home';
// import Contact from './component/pages/Contact';
// import Login from './component/pages/Login';


// function App() {
//   return (
//     <Login/>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';
import Login from './component/pages/Login';
import FormData from './component/formData';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/fromData' exact element={<FormData/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

