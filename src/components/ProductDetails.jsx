import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './styles/productDetails.css';

function ProductDetails() {
    const [index, setIndex] = useState(0);
    const [mainImage, setMainImage] = useState('./assets/plants/plant-4.png');

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
        const images = ['./assets/plants/64554b4a-9b58-47dc-b18e-1954bc276fb0.jpg', './assets/plants/Peace Lily- Spathiphyllum Wallisii -4.jpg', './assets/plants/Pothos- Epipremnum Aureum -12.jpgPothos- Epipremnum Aureum -12.jpg'];
        setMainImage(images[selectedIndex]);
    };

    const handleThumbnailClick = (image, selectedIndex) => {
        setMainImage(image);
        setIndex(selectedIndex);
    };

    const images = [
        './assets/plants/plant-4.png',
        './assets/plants/plant-1.png',
        './assets/plants/plant-3.png',
    ];

    return (
        <div>
            <section id="product-info ">
                <Container>
                    <Row className='py-lg-5 py-2'>
                        <Col md={6} className="item-image-parent">
                            <Carousel activeIndex={index} onSelect={handleSelect} className="item-image-main">
                                {images.map((image, idx) => (
                                    <Carousel.Item key={idx}>
                                        <img className="d-block w-100 main-image" src={image} alt={`Slide ${idx + 1}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>

                        <Col md={6} className="item-info-parent">
                            <div className="main-info">
                                <h4>EYEBOGLER Regular Fit Men's Cotton T-Shirt</h4>
                                <div className="star-rating">
                                    <span>★★★★</span>★
                                </div>
                                <p>Price: <span id="price">₹ 449.00</span></p>
                            </div>

                            <div className="select-items">
                                <div className="thumb-box-container">
                                    {images.map((image, idx) => (
                                        <div key={idx} className="thumb-box" onClick={() => handleThumbnailClick(image, idx)}>
                                            <img src={image} alt={`Thumbnail ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita modi accusantium facilis voluptate, officiis velit odit numquam doloremque veniam qui aspernatur saepe dolorem, nemo similique autem beatae, hic sint? A?</p>

                                <div className="description">
                                    <ul>
                                        <li>Care Instructions: Machine Wash</li>
                                        <li>Fit Type: Classic Fit</li>
                                        <li>Color name: Black-White</li>
                                        <li>Material: Cotton</li>
                                        <li>Pattern: Solid</li>
                                    </ul>
                                </div>
                            </div>

                            <button className='productDetailsbtn'>ORDER NOW</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default ProductDetails;
