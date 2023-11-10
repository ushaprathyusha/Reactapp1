import React from 'react';
import './AboutPage.css';
import image from "../Components/images/candy02.jpg"
import image2 from"../Components/images/candy03.jpg"
import image3 from "../Components/images/candy04.jpg"
import image4 from "../Components/images/ice5.jpg"
import image5 from "../Components/images/ice6.jpg"

const AboutPage = ({ showAboutPage }) => {
  return showAboutPage ? (
    <div>
      <h1>Cotton Candy</h1>
      <p>Think happy thoughts and eat happy foods.</p>
      <img src={image} alt="family" className='family'/>
      <h2>YOU MAKE MY DAY SWEET</h2>
     <h4>Candy World........!</h4> 
      <img src={image2} alt="family" className='family1'/>

      <img src={image3} alt="family" className='family2'/>
      <p>Don't go stealin' my cotton candy heart......!</p>
      <img src={image4} alt="family" className='family3'/>
      <img src={image5} alt="family" className='family11'/>

     
    </div>
  
  ) : null;
}

export default AboutPage;