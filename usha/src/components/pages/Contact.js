import React from "react";
import "./Contact.css";
import image from "../pages/monu.jpg"
import image2 from "../pages/img17.jpg"


export const Contact = () => {
  return(
    <div>
      <div className="p1">
        <h1>surprise ME</h1>
        <h4>Make every event a celebration<br></br>
with Havmor ice creams</h4>
      <p>Weddings, birthdays, anniversaries, or any get-together;
         <br></br>memorable occasions deserve mouth-watering flavours.<br></br> 
         So, place a Party Order, and we’ll bring to the bowl a variety of <br></br>
         ice cream flavours that compliments every event. Havmor adds MORE <br></br>scoops of sweetness to all your celebrations.</p>
         <span></span>
         <p>Make your party memorable with Havmor ice creams</p>
      </div>
      <div className="w2">
        <span></span>
        <span></span>
         <h3>Let’s connect <br></br>
              Drop your queries below</h3>
              
          <input className="text" placeholder="Name"></input>
          <input className="text" placeholder="Email Id"></input>
          <div className="text01">
          <select className="t1" >
            <option value="" selected="selected">Select the Service Needed</option>
            <option value="Party Order">Party Order</option>
            <option value="Catering">Catering</option>
            </select>
            </div>
            <input  type="text" className="text02" ></input>
         <div>
         <img src={image} alt="family" className="f7"/>
         </div>
         <button className="w3">SEND</button>
      </div>
      <div className="h1">
        <h1>know us
BETTER</h1>
      <img src={image2} alt="family" className="f8"/>
      <h3>Life Is Better With ICe Cream ......!</h3>
      <p>“TIMES FOOD AWARD” FOR THE <br></br>“BEST SNACKS - VEGETARIAN IN FEB 2016”</p>
      </div>
    </div>
  )
};
export default Contact;