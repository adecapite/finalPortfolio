import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import budget from '../images/budget.png';
import flare from '../images/flare copy.png';
import notes from '../images/notesnotesnotes.png'
import weather from '../images/weather copy.png'
import planner from '../images/planner copy.png'
import horiseon from '../images/horiseonrefactor copy.jpeg';

function Projects() {
    return(
        <Container fluid="md">
        <h3 id="projects">Projects</h3>
        <Row>
            <Col style={{backgroundImage: `url(${budget})`, backgroundSize: 'cover'}}>
            <a href="https://billsbillsbills.herokuapp.com/">
        <h4>Budget Tracker<SocialIcon bgColor="white" url="https://billsbillsbills.herokuapp.com/" /></h4>
            </a>
            
            </Col>
            <Col style={{backgroundImage: `url(${flare})`, backgroundSize: 'cover'}}>
            <a href="https://github.com/adecapite/groupEighteen">
        <h4>Flare: A tool for vicitims of domtestic violence.<SocialIcon bgColor="white" url="https://github.com/adecapite/groupEighteen" /></h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${notes})`, backgroundSize: 'cover'}}>
            <a href="https://notesnotesnotes.herokuapp.com/">
        <h4>Note taking app <SocialIcon bgColor="white" url="https://notesnotesnotes.herokuapp.com/" /></h4>
            </a>
            </Col>
        </Row>
        <Row>
            <Col style={{backgroundImage: `url(${weather})`, backgroundSize: 'cover'}}>
            <a href="https://github.com/adecapite/weatherDashboard">
        <h4>Local weatehr dashboard <SocialIcon bgColor="white" url="https://github.com/adecapite/weatherDashboard" /></h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${planner})`, backgroundSize: 'cover'}}>
            <a href="https://github.com/adecapite/dailyPlanner"> 
        <h4>Day Planner<SocialIcon bgColor="white" url="https://github.com/adecapite/dailyPlanner" /></h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${horiseon})`, backgroundSize: 'cover'}}> 
            <a href="https://github.com/adecapite/horiseon_coderefactor">
        <h4>Refactor of a professional site <SocialIcon bgColor="white" url="https://github.com/adecapite/horiseon_coderefactor" /></h4>
            </a>
            </Col>
        </Row>
        </Container>
    )
}


export default Projects;