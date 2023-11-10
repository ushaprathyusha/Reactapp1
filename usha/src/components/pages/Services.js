import React from "react";
import "./Services.css";
import image from "../pages/img10.jpg"
import image2 from "../pages/img12.jpg"
import image3 from "../pages/img13.jpg"
import image4 from "../pages/img14.jpg"
import image5 from "../pages/img16.jpg"




export const Services = () => {
  return (
    <>
     <div className="y">
      <div className="p1">
        <h1>best
                SELLERS</h1>
                <div className="p01"> 
                <img src={image} alt="family" className="y1"/>
                <h3>Chocolate </h3>
                <p>500 gm</p>
                <a href="https://www.swiggy.com/">
              <button className="b1">BUY</button></a>
                </div>
                <div className="p02">
                <img src={image2} alt="family" className="y2"/>
                <h3>Mixed Ice cream</h3>
                <p>270 gm</p>
               <a href="https://www.swiggy.com/" ><button className="b2">BUY</button></a>
                </div>
                <div className="p03">
                <img src={image3} alt="family" className="y3"/>
                <h3>Straw Berry </h3>
                <p>750 gm</p>
                <a href="https://www.swiggy.com/" ><button className="b3">BUY</button></a>
                </div>
                <div className="p04">
                <img src={image4} alt="family" className="y4"/>
                <h3>Jelly Ice Cream</h3>
                <p> 1 Box 100 gm</p>
                <a href="https://www.swiggy.com/" ><button className="b4">BUY</button></a>
                </div>
                <div>
                  <h1>I love you more than ice cream, and that's saying a lot.</h1>
                <img src={image5} alt="family" className="y5"/>
                
                </div>

      </div>
     </div>
    </>
  );
};
export default Services;