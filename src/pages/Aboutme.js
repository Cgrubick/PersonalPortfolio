import React from 'react';
import "../styles/Aboutme.css"
import {Link} from 'react-router-dom';

function Aboutme() {
  return (
    <div className="description"> 
        <div className="blurb">
        <h2>About me</h2>
            <p> I am a Computer and Electrical Engineering student at West Virginia University. <br/>I am also minoring in Computer Science. I am a senior planning to graduate in December 2023. <br/> 
            Feel free to read more about me in the about me page!
            <br/>
            <br/>
        <Link to ="/projects" className="button button-slide" >Projects</Link>
     </p>
    <br/>
    <br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    </div>
    
  )
}

export default Aboutme;