import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './styles/bestproduct.css';
import CardProd from './CardProd';

function Bestproducts() {
    const [activeTab, setActiveTab] = useState('home');

    const renderCards = () => (
        <Row className="p-3 g-4 row-gap-4"> {/* Add g-4 class for gap */}
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
            <Col xs={12} sm={6} md={4} lg={3}><CardProd /></Col>
        </Row>
    );

    return (
        <Container className='my-sm-4 my-2'>
            <Row>
                <Col>
                    <div className='bsetPrd'>
                        <div className='HeadSection'>
                            <h1>Best Products</h1>
                            <p className='bestPrdes'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum dicta similique voluptatem voluptates! Quo aut voluptatem unde, debitis reiciendis inventore nihil ducimus
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="my-sm-4 my-3">
                <Col className='d-flex justify-content-center gap-sm-5 gap-3'>
                    <Button
                        className={`productTdbbtn bg-white text-black border-0 ${activeTab === 'home' ? 'active' : ''}`}
                        onClick={() => setActiveTab('home')}
                    >
                        Indoor
                    </Button>
                    <Button
                        className={`productTdbbtn bg-white text-black border-0 ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Outdoor
                    </Button>
                    <Button
                        className={`productTdbbtn bg-white text-black border-0 ${activeTab === 'contact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contact')}
                    >
                        Landscaping
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {activeTab === 'home' && renderCards()}
                    {activeTab === 'profile' && renderCards()}
                    {activeTab === 'contact' && renderCards()}
                </Col>
            </Row>
        </Container>
    );
}

export default Bestproducts;
