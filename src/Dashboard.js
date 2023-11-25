import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Dashboard.css';
import { IconContext } from 'react-icons';
import image from "./i01.jpg"




function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
            <div className='nav-div-content'>
             
                <p className='all-nav-headings'> Home</p>
                <p className='all-nav-headings1'><Link to='/Aboutus' className='paragraph-nav'>About us</Link></p>
                <p className='all-nav-headings1'><Link to='/Services' className='paragraph-nav'>Services</Link></p>
                <p className='all-nav-headings1'><Link to='/ContactUs' className='paragraph-nav'>Contact Us</Link></p>
            </div>
        
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </div>
      <div className='ima1'>
        <div className='container-ima'>
        <h1>SAVE THE NATURE......</h1>
        <img src={image} alt='img' className='y1'/>
        </div>
            
      </div>
    </>
  );
}

export default Dashboard;