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
            <InstagramIcon/>
            <Twitter/>
            <LinkedInIcon/>
            <EmailIcon/>
        </div>
        <p> &copy; 2023 tatianatech.com</p></div>
  )
}

export default Footer