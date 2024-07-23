import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTree, FaLeaf, FaSprayCan, FaWhatsapp } from 'react-icons/fa';
import './styles/services.css';


function Services() {
    const [isBouncing, setIsBouncing] = useState(false);

    const handleWhatsAppClick = () => {
        setIsBouncing(true);
        setTimeout(() => {
            setIsBouncing(false);
        }, 1000); // Duration of the animation
    };

    return (
        <div className="services-section py-lg-5 py-4">
            <Container>

                <Row className="service-row">
                    <h1 className="services-title pb-lg-5 pb-2">Our Services</h1>
                    <Col md={6} className="service-item">
                        <div className="service-image">
                            <img src="../assets/services/servicesImg1.webp" alt="Elegant Plant Decoration" />
                        </div>
                    </Col>
                    <Col md={6} className="service-item">
                        <div className="service-content">
                            <h2 className="service-subtitle">Elegant Plant Decor</h2>
                            <p className="service-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vitae sed nihil architecto deserunt. Esse qui, quisquam distinctio nam labore sequi obcaecati totam quibusdam, harum asperiores reprehenderit iure, ea autem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto eum facere earum est vel, blanditiis perferendis magnam esse, dolore ducimus non atque, fuga pariatur officia possimus obcaecati. Vero, enim.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, non quia unde a reiciendis quis laboriosam nulla hic, modi ipsa quidem error voluptates sint. A quis assumenda ad pariatur ipsa!
                            </p>
                            <button className="service-button">Learn More</button>
                        </div>
                    </Col>
                </Row>

                <Row className="service-row pt-lg-5 pt-2 g-4">
                    <Col sm={6} md={4}>
                        <Card className="h-100">
                            <Card.Body className="text-center">
                                <div className="service-icon">
                                    <FaTree />
                                </div>
                                <Card.Title>Tree Care</Card.Title>
                                <Card.Text>
                                    Our dedicated experts specialize in enhancing the health and beauty
                                    of your trees through professional pruning, precise trimming, and
                                    comprehensive care solutions. Whether it's shaping for aesthetic
                                    appeal or ensuring optimal growth, we deliver meticulous attention
                                    to detail to maintain the vitality and longevity of your trees.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} md={4}>
                        <Card className="h-100">
                            <Card.Body className="text-center">
                                <div className="service-icon">
                                    <FaLeaf />
                                </div>
                                <Card.Title>Gardening</Card.Title>
                                <Card.Text>
                                    Transform your outdoor spaces into vibrant havens with our comprehensive gardening services.
                                    From meticulous lawn maintenance and seasonal planting to expert landscaping and sustainable
                                    garden design, our team brings passion and expertise to every project.
                                    Whether you're looking to create a serene retreat or enhance your property's curb appeal,
                                    we tailor our services to meet your gardening aspirations with creativity and care.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} md={4}>
                        <Card className="h-100">
                            <Card.Body className="text-center">
                                <div className="service-icon">
                                    <FaSprayCan />
                                </div>
                                <Card.Title>Watering Services</Card.Title>
                                <Card.Text>
                                    Ensure your plants thrive year-round with our professional watering services.
                                    Our skilled team provides tailored watering schedules and techniques to meet
                                    the specific needs of your garden, ensuring optimal hydration and health for
                                    all plant varieties. Whether you require regular maintenance or specialized
                                    care during dry spells, we're committed to preserving the beauty and vitality
                                    of your landscape through expert watering solutions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div 
                    className={`whatsapp-icon ${isBouncing ? 'bounce' : ''}`} 
                    onClick={handleWhatsAppClick}
                >
                    <FaWhatsapp />
                </div>

            </Container>
        </div>
    );
}

export default Services;
