import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/about.css';
import Missions from '../components/Missions';

function AboutComponent() {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col lg={6} md={12} className="mb-4 mb-md-0">
                    <div className="aboutImgContainer">
                        <img
                            className="aboutImg"
                            src='./assets/services/about.jpg'
                            alt="Main"
                        />
                    </div>
                </Col>
                <Col lg={6} md={12}>
                    <div className="allText bottomText">
                        <p className="text-blk subHeadingText">About Us</p>
                        <p className="text-blk description">
                            Welcome to Musgro! We are passionate about bringing the beauty and benefits of plants into every space.
                            Founded by nature lovers, Musgro has grown from a small local nursery into a trusted online destination
                            for plant enthusiasts across the country. Our mission is to inspire and empower individuals to create
                            and nurture their own green oasis.
                        </p>
                        <div className="button-container">
                            <a className="exploreAbout" href="#services">View Services</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='missionSection'>
               <Missions/>
            </Row>
        </Container>
    );
}

export default AboutComponent;
