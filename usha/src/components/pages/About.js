import React from "react";
import "./About.css";
import image from "../pages/img15.jpg"
import image2 from "../pages/img18.jpg"



export const About = () => {
  return (
    <div>
       <div>
       <img src={image} alt="family" className="z1"/>
       </div>
       
       <div className="u1">
        <h1>ABOUT</h1>
        <p>Established in the year 1944 and now a part of LOTTE Wellfood Co. Ltd., Havmor has grown to be loved by all. 
          <br></br> But how did we do it? Well! We are present in every nook and corner around the nation with 72,000 retail outlets and<br></br> 
           over 200 flagship stores.This network spans across 18 states and 5 union territories.
            </p>
            <br></br>
            <p>With our committed team and the latest technology in the industry, we produce over 4 million litres of ice cream, that approx 36 million units of ice cream served to consumers every single day. That’s a lot of ice cream! While delivering this huge quantity, we never compromise on quality. Our products undergo stringent quality checks that adhere to global quality standards.</p>
            <br></br>
            <p>We are also proud to tell you about our list of esteemed clients which includes the Indian Institute of Management - Ahmedabad and renowned hotels like Taj, Le Meridian, ITC, Hyatt, Four Seasons, Fortune Landmark, Radisson, Marriott, and Crowne Plaza, to name a few.
            </p>
            <br></br>
            <div>
              <h1>Innovating Always</h1>
              <p>We carry innovation in our hearts, coming up with unique flavours for you to experience. It’s the essence of every creation. From traditional recipes like Kulfis to modern favourites like Belgian Dark Chocolate and Hazelnut Ice Cream Cake, our portfolio boasts of 150+ products and speaks for our wide range. Signature tubs, ice candies, crunchy cones, you name it and we have it! </p>
              <br></br>
            </div>
            <div>
            <img src={image2} alt="family" className="z2"/>
            </div>
            <div className="x1">
              <h1>Lotte Group</h1>
              <p>Founded by Mr. Shin Kyu-kho, the twin head quartered Lotte Group was<br></br>
               first established in 1948 in Japan as a confectionery company. The second headquarter<br></br>
                was established in 1967 in Korea. Over the years, the Group has successfully diversified into<br></br> 
                businesses ranging from F&amp;B, Retail and Hospitality to Chemicals and Construction to Finance.<br></br> 
                The Group has now over 80 affiliates. Notwithstanding Korea, the group’s presence extends to <br></br>
                India, China, Pakistan, Russia, Kazakhstan and Belgium along with South East Asia. Lotte Group aspires<br></br>
                 to be amongst the top 10 business groups in Asia.
</p>
         <br></br>
<br>
</br>
<br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
       </div>
    </div>
    
  )
};
export default  About;