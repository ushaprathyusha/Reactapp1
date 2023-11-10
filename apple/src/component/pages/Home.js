import React,{useState,useEffect,} from 'react';
import "./Home.css";

const Home = () => { 
  const [count,setCount]=useState(1);
  console.log("clicked count" +count);
  useEffect(()=> console.log("clicked"));
  const divided=()=>{
    setCount(count+1)
  }
  const reset=()=>{
    setCount(0)
  }
  return (
    <div className='usha'>
      <div>

      </div>
<h1>React Hook</h1>
<h3> Clicked count {count} </h3>
    <button className='usha1' onClick={divided}>
      Type click
    </button>
    <button className='usha1' onClick={reset}>
      Restart
    </button>
    <div>

    </div>
    <h3>IF U WANT TO CLICK UP HEE...............!</h3>
    
    </div>
  );

}

export default Home;
