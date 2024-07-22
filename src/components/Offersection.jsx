import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/offersection.css';

function Offersection() {
    return (
        <Container className="offer-section my-4 overflow-hidden">
            <Row className="flex-column-reverse flex-md-row">
                <Col xs={12} md={3} className="mb-3 mb-md-0 d-flex justify-content-center justify-content-md-end">
                    <img className="img-fluid reduced-img" src="./assets/banners/promotion-2.jpg" alt="Promotion 2" />
                </Col>
                <Col xs={12} md={6} className="mobsectionoffer mb-3 mb-md-0 position-relative p-0 d-flex align-items-center justify-content-center">
                    <div className="position-relative w-100">
                        <img className="img-fluid w-100 reduced-img" src="./assets/banners/promotion-5.jpg" alt="Promotion 5" />
                        <div className="offer-text">
                            <h1 className="carousel-slideHead1">-20% off</h1>
                            <h3>Musgro Bringing <br /> Life Home</h3>
                            <button className="bannerBtn mt-2">SHOP NOW</button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3} className="mb-3 mb-md-0 d-flex justify-content-center">
                    <img className="img-fluid reduced-img" src="./assets/banners/promotion-2.jpg" alt="Promotion 2" />
                </Col>
            </Row>
        </Container>
    );
}

export default Offersection;
