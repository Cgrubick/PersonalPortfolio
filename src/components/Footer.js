import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Link href="https://github.com/Cgrubick"  >
                <GitHubIcon/> 
            </Link>
            <Link   href="https://linkedin.com/in/clayton-grubick-2a5206188">
                <LinkedInIcon /> 
            </Link>
            
        </div>
        <p> (304)224-8829</p>
        <p> &copy; claytongrubick.com</p>
    </div>
  )
}

export default Footer