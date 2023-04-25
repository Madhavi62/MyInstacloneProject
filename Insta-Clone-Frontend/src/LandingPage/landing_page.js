import React from 'react';
import landing from "./ass_13.png"
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Landing_page() {
const navigate = useNavigate()
  return (
    <div id='enter'>
    <img src={landing}></img>
       <div id='goto' >
          <h1 >10XTeam 04</h1>
          <button className='color' onClick={()=>{navigate('/InstaClone')}}>Enter</button>
        </div>
    </div>
  )
}