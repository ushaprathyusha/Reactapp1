import React from 'react'
import './IcePage.css'
import image from "./Components/images/ice1.jpg"
import image2 from "./Components/images/ice3.jpg"
import image3 from "./Components/images/ice4.jpg"





const IcePage = () => {
  return (
    <div>
      <h1>A surprise in every lick.</h1>
      <img src={image} alt="family" className='family00'/>
      <p>A little lick of frozen cream every now and then, goes a long, long way.</p>
      <img src={image2} alt="family" className='family01'/>
      <p>I scream, you scream, we all scream for ice cream!</p>
      <img src={image3} alt="family" className='family011'/>
      
      
      


    </div>
  )
}

export default IcePage
