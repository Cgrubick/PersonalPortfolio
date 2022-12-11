
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

import { useParams } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { ProjectList } from '../helpers/Projects';

function ProjectDisplay() {
    
    const { id } = useParams();
    const project = ProjectList[id];
    return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src = {project.image} alt='' />
        <p>
            Skills: {project.skills}
        </p>
        <p>
            {project.description}
        </p>
        <Link href={project.link}  >
                <GitHubIcon/>
        </Link>

    </div>
    );
  
}

export default ProjectDisplay;