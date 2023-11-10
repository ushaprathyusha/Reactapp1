import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2023 Cotton Candy Delights</p>
      <p>Contact us at:'https://www.havmor.com/'</p>
      <div className='h2'>
        <h4>SURPRISE ME</h4>
            <p>party mood</p>
               <br></br>
            <p>Contests</p>
            <br></br>
            <p>Meet Our Shop</p>
            <br></br>
            <p>We are Closed by</p>
      </div>
      <div className='h3'>
            <h4>KNOW US BETTER
</h4>
<p>Term & Use</p>
<br></br>
    <p>Award</p>
    <br></br>
    <p>Career</p>
    <br></br>
    <p>Privacy&Palacy</p>
    <br></br>
    <p>FAQ</p>
      </div>
      <div className='h4'>
        <h4>Office Address</h4>
        <p>2nd floor, Commerce House 4,<br></br>
           besides shell petrol pump, Prahladnagar<br></br>
             Anandnagar road, Ahmedabad-380015,<br></br>
           Corporate office : 079 4020 9000</p>
      </div>
      <div className='h5'>
         <h4>Customer Care</h4>
         <p>080 987654321</p>
      </div>

    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'pink',
  textAlign: 'center',
  padding: '10px',
  position: 'relative',
  left: '0',
  bottom: '0',
  width: '100%',
};


export default Footer;