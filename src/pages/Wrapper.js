import React from 'react'
import { Navigate } from "react-router-dom"

function Wrapper() {

  const token = localStorage.getItem("authToken");

  if(token === null || token === undefined) {
    return(
        <Navigate to="/login"/>
    )
  } else {
    return(
        <Navigate to={"/home"}/>
    )
  }  
}

export default Wrapper