import React from 'react'
import { useLocation } from 'react-router-dom';

const FormData = () => {
    const data = useLocation().state.submitteddata;
  return (
    <div>
      <h1> From Data</h1>
      <p>{data.fristname}</p>
      <p>{data.lastName}</p>
      <p>{data.email}</p>
      <p>{data.gender}</p>
    </div>
  )
}

export default FormData;
