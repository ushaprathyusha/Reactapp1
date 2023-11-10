import React ,{useState} from 'react'
import './Card1.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Card1() {
    const data = [
        { id: 1, 
            pic:'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*' ,
            name:'Lab' ,
            top:'cute and friendly' ,
            text:'₹ 19,000' , 
            rating:'Rating : 4.4'},

        { id: 2, 
            pic: 'https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*',
            name:'Maltipoo',
            top:'Energatic and friendly' ,
            text:'₹ 1,73,562',
             rating:'Rating : 4.0'},

        { id: 3,
             pic: 'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
             name:'Chow-chow',
             top:'Foodie and energy' ,
             text:'₹ 1,13,417', 
             rating:'Rating : 4.7'},
        { id: 4, 
            pic:'https://hips.hearstapps.com/hmg-prod/images/shih-tzu-little-dog-royalty-free-image-1652927214.jpg?crop=0.447xw:1.00xh;0.248xw,0&resize=980:*' ,
            name:'Shih Tzu',
            top:'Intalizent and security' ,
            text:'₹ 54,398',
             rating:'Rating : 4.6'},
        { id: 5,
             pic: 'https://hips.hearstapps.com/hmg-prod/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*',
             name:'Border Collie' ,
             top:'friendly and secur',
             text:'₹ 1.5700 *', 
             rating:'Rating : 4.6'},

        { id: 6,
             pic:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*' ,
             name:'Siberian Husky' ,
             top:'friendly and secur',
             text:'₹ 25,000*', 
             rating:'Rating : 4.7'},

        { id: 7,
             pic:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg?crop=1xw:0.9997114829774957xh;center,top&resize=980:*' ,
             name:'Pembroke Welsh Corgi' ,
             top:'friendly',
             text:'₹ 2.82 Lakh ', 
             rating:'Rating : 3.2'},

        { id: 8,
             pic: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x3839/australian-shepherd.jpg?resize=980:*',
             name:'Australian Shepherd' ,
             top:'security',
             text:'₹ 1.32 Lakh', 
             rating:'Rating : 4.6'},

        { id: 9, 
            pic:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-462376265.jpg?crop=1.0xw:1xh;center,top&resize=980:*' ,
            name:'Beagle',
            top:'friendly' ,
            text:'Rs.39000/-' , 
            rating:'Rating : 4.5'},
        { id: 10, 
            pic:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/shetland-sheep-dog.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
             name:'Shetland Sheepdog',
             top:'Security' ,
             text:'Rs.10.9200' , 
             rating:'Rating : 4.8'},

        { id: 11,
             pic:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-147786673.jpg?crop=0.4444444444444445xw:1xh;center,top&resize=980:*' ,
             name:'Golden Retriever',
             top:'most papulor in country' ,
             text:'Rs:13000', 
             rating:'Rating : 4.6'},
        { id: 12,
             pic:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x3839/dachshund.jpg?resize=980:*' ,
             name:'Dachshund' ,
             top:'security',
             text:'₹ 72000', 
             rating:'Rating : 4.1'},
        
      ]; 

      
      const [Search, setserach] = useState(""); 
      const handleInputChange = (e) => {
        setserach(e.target.value)
      };
      const filterdata = data.filter((Searchvalue) => {
        const itemsearched = Search.toLowerCase();
        return (
          Searchvalue.name.toLowerCase().includes(itemsearched) ||
          Searchvalue.text.toString().includes(itemsearched)||
          Searchvalue.id.toString().includes(itemsearched) ||
          Searchvalue.top.toLowerCase().includes(itemsearched)||
          Searchvalue.rating.toLowerCase().includes(itemsearched) 
        )
      });
      const rows = filterdata.map((item) => (
       
        <MDBCol md='4'>
         
      <div className='card-main'>          
        <div className='cardcontainer'>
            <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={item.pic} fluid alt='...' style={{height:'13em',width:'300px'}}  className='image-card'/>
            <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
            </MDBRipple>
            <MDBCardBody>
            <MDBCardTitle>{item.name}</MDBCardTitle>
            <MDBCardText>
                {item.top}
                </MDBCardText>
                <MDBCardText>
                {item.text}
                </MDBCardText>
                <MDBCardText>
                {item.rating}
                </MDBCardText>
            {/* <MDBBtn href='#' className='button'>Booking</MDBBtn> */}
            </MDBCardBody>
        </MDBCard>
        </div>
    </div>
        </MDBCol>


      ));
  return (
    <div>
      <div className='pet1'>
        <h1>PET SHOP</h1>
        <h4></h4>
      </div>
        <input type='text' value={Search} onChange={handleInputChange} className='card-input-css' placeholder='      Search'/>
       <MDBRow>
     {rows}
     
    </MDBRow>
    </div>
  )
}

export default Card1