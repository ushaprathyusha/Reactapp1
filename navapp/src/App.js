// // import { Products } from './components/products';
// // import contents from './content';
// // import image from "./img15.jpg"
// // import image1 from "./img01.jpg"
// // import image2 from "./img02.jpg"
// // import  "./App.css"
// import MapFunction1 from './MapFunction1';
// import MapFuction2 from './MapFuction2';


// export default function App() {
//     return(<div>
//       <MapFunction1/>
//     </div>
     
// //       <div>

// //         <div>
// // <img src={image} alt='head' className='p1'></img>
// //         </div>
// //         <div>
// //       <img src={image1} alt='head1' className='p2' width='600px' height='350px'></img>
// //       <img src={image2} alt='head1' className='p3' width='600px' height='350px'/>
// //         </div>
// //            <div className='App'> 
// //                {contents.map(contents => (
// //                    <Products 
// //                        key={contents.id}
// //                        image={contents.image}
// //                        name={contents.name}
// //                        price={contents.price}
// //                        totalSales={contents.totalSales}
// //                        timeLeft={contents.timeLeft}
// //                        rating={contents.rating}
// //                    />
// //                ))}
// //            </div>
// //            </div>
//     )
// }


import React from "react";
import Category from "./components/Category";
const App=()=>{
  return(
    <div>
      <Category/>
      
    </div>
  )
}
export default App