import React, { useState } from 'react'

const Contact = () => {
    const [input,setInput]=useState("");
    const handinputchange =(e)=>{
        setInput(e.target.value)
        console.log(input);
        
    }

    
  return (
    <div>
        <input value={input}
        onChange={handinputchange} type='text'/>
       <h4>Hello world:{input}</h4>
       
       
    </div>
  )
}

export default Contact