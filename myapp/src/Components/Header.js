import React from 'react';
import './Header.css';
import image from "../Components/images/candy.jpg"
import image01 from "../Components/images/ice.jpg"



const Header = ({ showAboutPage,showIcePage, onAboutClick,onIceClick  }) => {
  return (
    <div>
    <header>
      <nav>
      <img src={image} alt="candy" className='img'/>
        <ul className="header-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#Candy" onClick={onAboutClick}>Candy</a>
          </li>
          <li>
            <a href="#Ice" onClick={onIceClick}>Ice Cream</a>
          </li>
        </ul>
      </nav>
    </header>
    <div>
    <h3>WELL COME TO CANDY & ICE CREAM WORLD</h3>
    <img src={image01} alt="candy" className='img01'/>
    </div>
    </div>
    

   
    
  );
}

export default Header;