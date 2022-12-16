import React from 'react';
import "../styles/Aboutme.css"
import {Link} from 'react-router-dom';
import PFP from '../assets/aboutme_pics/pfp1.png';


function Aboutme() {
  return (
    <div className="description"> 
        
        <div className="blurb">
          <br/>
        <img src={PFP} width="200" height="250" alt=''></img>
        <h2>About me</h2>
            <p> I am working on a double major from West Virginia University in both Computer Engineering, and Electrical Engineering, <br/> 
            and am receiving a minor in Computer Science. I have interest in computer hardware, specifically hardware design <br/>
            and computer architecture. I am currently a senior and plan to graduate in December of 2023. I have had a passion for computers ever since middle school.<br/>
            In 8th grade I decided after learning what computer engineering was that I had to be one and I am happy to be able to begin to make that dream come true!<br/>
            You can also find my LinkedIn and Github in the footer for my resume and more in depth look at some of my projects!

            <br/>
            <br/>
        <Link to ="/projects" className="button button-slide" >Projects</Link>
     </p>
    <br/>
   
    
        </div>
    </div>
    
  )
}

export default Aboutme;