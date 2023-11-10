import React from 'react'
 import Card1 from './Card1'
// import Navbar from './components/Navbar'
// import Loginform from './components/Loginform'
// import Login from './components/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
// import Login from './Login'
// import Home from './Home'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          {/* { <Route path='/' element={<Loginform/>}/>} */}
          { <Route path='/Card1' element={<Card1/>}/> }
          {/* { <Route path='/' element={<Login/>}/>} */}
        </Routes>
      </Router>
     <Card1/>
    </div>
  )
}

export default App