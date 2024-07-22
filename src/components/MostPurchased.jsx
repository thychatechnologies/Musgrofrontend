import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './styles/mostpurchased.css';
import './styles/myswiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Required for Swiper styles
import 'swiper/css/navigation'; // Swiper navigation styles
import { Navigation, FreeMode } from 'swiper/modules'; // Import necessary Swiper modules
import CardProd from './CardProd';

function MostPurchased() {
    return (
        <div>
            <Container className='my-sm-5 my-2'>
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
                <Row className="justify-content-center my-sm-4 my-2">
                    <Col xs={12} className='swiper-compen'>
                        <Swiper
                            spaceBetween={30}
                            freeMode={true}
                            navigation={true}
                            className="mySwiper"
                            modules={[Navigation, FreeMode]} // Use modules property instead of SwiperCore.use
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            {Array.from({ length: 10 }).map((_, index) => (
                                <SwiperSlide key={index}><CardProd /></SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MostPurchased;
