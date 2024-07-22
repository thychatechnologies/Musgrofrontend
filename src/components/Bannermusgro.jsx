import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css'; // Import animate.css
import './styles/bannerMusgro.css'; // Import your custom CSS for styles

function Bannermusgro() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='musgro-Container'>
            <Container className='py-lg-5 py-2'>
                <Row className='row gap-lg-0 gap-4'>
                    <Col lg={8}>
                        <Carousel
                            fade
                            interval={3000} // Automatic sliding interval in milliseconds
                            activeIndex={index}
                            onSelect={handleSelect}
                            indicators={false} // Hide indicators
                            nextIcon={<FontAwesomeIcon icon={faChevronRight} className="carousel-control-icon" />}
                            prevIcon={<FontAwesomeIcon icon={faChevronLeft} className="carousel-control-icon" />}
                        >
                            <Carousel.Item className="banner-carousel-Item">
                                <img
                                    className=" w-100 mobbannerImage d-sm-none d-block"
                                    src="./assets/banners/banner-5.jpg"
                                    alt="Third slide"
                                />
                                <img
                                    className="d-sm-block d-none w-100 mobbannerImage"
                                    src="./assets/banners/banner-1.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption className="carousel-caption-left ">
                                    <h1 className='carousel-slideHead1'>-20% off</h1>
                                    <h3>Musgro Bringing <br /> Life Home</h3>
                                    <button className='bannerBtn mt-lg-4 mt-0'>SHOP NOW</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="banner-carousel-Item">
                                <img
                                    className=" w-100 mobbannerImage d-sm-none d-block"
                                    src="./assets/banners/banner-6.jpg"
                                    alt="Third slide"
                                />
                                <img
                                    className="d-sm-block d-none w-100 mobbannerImage"
                                    src="./assets/banners/banner-1.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption className="carousel-caption-left ">
                                    <h1 className='carousel-slideHead1'>-20% off</h1>
                                    <h3>Lush Plants for <br /> Every Space</h3>
                                    <button className='bannerBtn mt-lg-4 mt-0'>SHOP NOW</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="banner-carousel-Item">
                                <img
                                    className=" w-100 mobbannerImage d-sm-none d-block"
                                    src="./assets/banners/banner-5.jpg"
                                    alt="Third slide"
                                />
                                <img
                                    className="d-sm-block d-none w-100 mobbannerImage"
                                    src="./assets/banners/banner-1.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption className="carousel-caption-left ">
                                    <h1 className='carousel-slideHead1'>-20% off</h1>
                                    <h3>Make Your Home <br /> Green</h3>
                                    <button className='bannerBtn mt-lg-4 mt-0'>SHOP NOW</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col lg={4} className='d-flex justify-content-center align-items-center'>
                        <Row className='row-gap-4 banner-r justify-content-center justify-content-between'>
                            <Col sm={6} lg={12} className='banner-c'>
                                <div className='position-relative'>
                                    <img src="./assets/banners/banner-4.jpg" alt="" className="bannersubImg object-fit-cover" />
                                    <div className='Banner-rightcnt'>
                                        <p className='mb-0'>Best Seller</p>
                                        <h4>Doily Dream & <br /> Catcher</h4>
                                        <button className='bannerBtnR'>SHOP NOW</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={12} className='banner-c'>
                                <div className=' d-flex justify-content-end position-relative'>
                                    <img src="./assets/banners/banner-4.jpg" alt="" className="bannersubImg object-fit-cover" />
                                    <div className='Banner-rightcnttwo'>
                                        <p className='mb-0'>Best Seller</p>
                                        <h4>Doily Dream & <br /> Catcher</h4>
                                        <button className='bannerBtnR'>SHOP NOW</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Bannermusgro;
