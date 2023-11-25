// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginform from './Loginform'; // Adjust the path accordingly


// Define your main App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
