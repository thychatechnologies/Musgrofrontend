import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import './styles/features.css'

function FeaturesSection() {
    return (
        <Container className='py-5'>


            <Card className='border-0 shadow'>
                <Card.Body className=''>
                    <Row>
                        <Col md={4} className='section justify-content-center'>
                            <div className='d-flex gap-3 p-4 align-items-center'>
                                <img className='featuresImg' src="./assets/icons/1.png" alt="Free Shipping Icon" />
                                <div>
                                    <h4>Free Shipping</h4>
                                    <p className='mt-0'>Capped at ₹39 per order</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='section justify-content-center'>
                            <div className='d-flex gap-3 p-4 section align-items-center'>
                                <img className='featuresImg' src="./assets/icons/2.png" alt="Card Payments Icon" />
                                <div>
                                    <h4>Card Payments</h4>
                                    <p className='mt-0'>Fast & Secure Payments</p>
                                </div>
                            </div>
                        </Col>

                        <Col md={4} className='section justify-content-center'>
                            <div className='d-flex gap-3 p-4 section align-items-center'>
                                <img className='featuresImg' src="./assets/icons/3.png" alt="Easy Process Icon" />
                                <div>
                                    <h4>Easy Process</h4>
                                    <p className='mt-0'>Shop with Confidence</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default FeaturesSection
