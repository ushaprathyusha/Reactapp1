import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/pages";
import { Contact } from "./components/pages";
import { Services } from "./components/pages";
import { Home } from "./components/pages";
import Footer from "./components/pages/Footer";
import p1 from "./components/p1";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;