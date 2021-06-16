import React from "react";
import Card from 'react-bootstrap/Card';
import { SocialIcon } from 'react-social-icons';
import Me from './../images/me.jpeg'

function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <Card border="dark">
      <h3 id="contact-me">Contact Me</h3>
      <Card.Img varient="top"
      src={Me} className="AbtImg" alt="professional headshot of developer" />
      <Card.Body id="contact-me">
      <Card.Link href="https://www.linkedin.com/in/anthony-decapite-688a9759/"><SocialIcon url="https://www.linkedin.com/in/anthony-decapite-688a9759/" /></Card.Link>
      <Card.Link href="https://github.com/adecapite"><SocialIcon url="https://github.com/adecapite" /></Card.Link>
      <Card.Link ><SocialIcon url="anthony.decapite@icloud.com" network="email"/></Card.Link>
      <Card.Link href="https://drive.google.com/file/d/10Vh6Uta8m189AAyMi9V1xK2bOBCEwg09/view?usp=sharing"><SocialIcon network="google" /></Card.Link>
      </Card.Body>
      <p>Copyright ⓒ {currentYear}</p>
      </Card>
    );
  }
  
  export default Footer;