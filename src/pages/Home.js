import React from 'react';
import "../styles/Home.css"
import {Link} from 'react-router-dom';



function Home() {
  return (
    <div className= "home">
        <div className = "about">
            <h2> Hello <br/>My name is Clayton Grubick!</h2>
        </div>
        <div className="blurb">
            <h2>About me</h2>
            <p> I am a Computer and Electrical Engineering student at West Virginia University. <br/>I am also minoring in Computer Science. I am a senior planning to graduate in December 2023. <br/> 
            Feel free to read more about me in the about me page!
            <br/>
            <br/>
            <Link to="/aboutme" className="button button-slide" >Learn more</Link>
            </p>
            

        </div>
        <div className="skills">
            
            <ol className="list">
                <li className="item">
                    <h2>Software</h2>
                    <span>LTSpice, Quartus Prime, KiCad, VIM, MacOS, Windows, Linux(Arch, Ubuntu), Jira, Git, NPM, Visio, Arduino, WSL</span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>C, Java, Python, Assembly(x86), HTML, CSS, React, Angular, Matlab, Javascript, C++, C#</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home;