import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import Twitter from '@material-ui/icons/Twitter';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a href="https://www.instagram.com/tata.obando/"><InstagramIcon/></a>
          <a href="https://twitter.com/tatiobandore"><Twitter/></a>
          <a href="https://www.linkedin.com/in/tatiana-obando/"><LinkedInIcon/></a>
          <a href="mailto:ltatiobandore@gmail.com"><EmailIcon/></a>
        </div>
      
        <p> &copy;2023 Tatiana Obando </p></div>
  )
}

export default Footer