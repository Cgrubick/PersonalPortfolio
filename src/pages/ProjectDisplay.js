
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

import { useParams } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { ProjectList } from '../helpers/Projects';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    
    const { id } = useParams();
    const project = ProjectList[id];
    return (
    <div className="project">
        <h1>{project.name}</h1>
        
            <img src = {project.image} alt='' />
        <img src = {project.image2} alt='' />
        <p>
            Skills: {project.skills}
        <br/>
        
            {project.description}
            <br/>
            <Link href={project.link}  >
                <GitHubIcon/>
            </Link>
        </p>
        

    </div>
    );
  
}

export default ProjectDisplay;