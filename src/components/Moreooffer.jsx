import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './styles/moreoffers.css'; // Ensure your CSS file path is correct

function Moreooffer() {
    return (
        <Container className='musgro-Container'>
            <Row className="my-sm-5 my-2 gx-4">
                <Col md={6} className="position-relative moffer-col">
                    <img className='moreOfferimage' src="./assets/banners/promotion-3.jpg" alt="" />
                    <div className="moffer-text">
                        <h1 className='carousel-slideHead1'>-20% off</h1>
                        <h3>Musgro Bringing <br /> Life Home</h3>
                        <button className='bannerBtn mt-2'>SHOP NOW</button>
                    </div>
                </Col>
                <Col md={6} className="position-relative moffer-col">
                    <img className='moreOfferimage' src="./assets/banners/promotion-3.jpg" alt="" />
                    <div className="moffer-text">
                        <h1 className='carousel-slideHead1'>-20% off</h1>
                        <h3>Musgro Bringing <br /> Life Home</h3>
                        <button className='bannerBtn mt-2'>SHOP NOW</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Moreooffer;
