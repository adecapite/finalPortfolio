import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import budget from '../images/budget.png';
import flare from '../images/flare.png';
import notes from '../images/notesnotesnotes.png'
import weather from '../images/weather.png'
import planner from '../images/planner.png'
import horiseon from '../images/horiseonrefactor.jpeg'

function Projects() {
    return(
        <Container fluid="md">
        <h3 id="projects">Projects</h3>
        <Row>
            <Col style={{backgroundImage: `url(${budget})`, backgroundSize: 'cover'}}>
            <a href="https://billsbillsbills.herokuapp.com/">
        <h4>Budget Tracker</h4>
            </a>
            
            </Col>
            <Col style={{backgroundImage: `url(${flare})`, backgroundSize: 'cover'}}>
            <a href="https://github.com/adecapite/groupEighteen">
        <h4>Flare: A tool for vicitims of domtestic violence.</h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${notes})`, backgroundSize: 'cover'}}>
            <a href="https://notesnotesnotes.herokuapp.com/">
        <h4>Note taking app</h4>
            </a>
            </Col>
        </Row>
        <Row>
            <Col style={{backgroundImage: `url(${weather})`, backgroundSize: 'cover'}}>
            <a href="https://github.com/adecapite/weatherDashboard">
        <h4>Local weather dashboard </h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${planner})`, backgroundSize: 'cover'}}>
            <a href="https://github.com/adecapite/dailyPlanner"> 
        <h4>Day Planner</h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${horiseon})`, backgroundSize: 'cover'}}> 
            <a href="https://github.com/adecapite/horiseon_coderefactor">
        <h4>Refactor of a professional site</h4>
            </a>
            </Col>
        </Row>
        </Container>
    )
}


export default Projects;
