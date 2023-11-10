import React from "react";
import "./Home.css";
import image from "../pages/img02.jpg"
import image1 from "../pages/img04.jpg"
import image2 from "../pages/img06.jpg"
import image3 from "../pages/img07.jpg"
import image4 from "../pages/img08.jpg"
import image5 from "../pages/img09.jpg"



export const Home = () => {
  return ( 
  <div>
    <div>
     <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WELL COME TO CANDY & ICE CREAM WORLD....!</h1>
      
      <img src={image} alt="family" className="f1"/>
    <div className="water">
      <h3>Benefits of cotton candy</h3>
      <p>● Promote longevity. This point we also surprised. ...</p>
      <p>● Increase production of blood vessels. We feel like people  <br></br>don't appreciate blood vessels enough. ...</p>
      <p>● Lower stress levels.</p>
    </div>
      <div>
      <img src={image1} alt="family" className="f2"/>
      </div>
      <img src={image2} alt="family" className="f3"/>
      <img src={image3} alt="family" className="f4"/>
      <img src={image4} alt="family" className="f5"/>
      <div className="w1">
        <h3>Without ice cream, there would be darkness and chaos.</h3>
      <img src={image5} alt="family" className="f6"/>
      <br></br>
      <br></br>
      </div>
    
  </div>
  </div>
  )
};
export default Home;