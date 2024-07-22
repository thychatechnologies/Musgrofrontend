import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons'; // Import the regular heart and eye icons
import './styles/cardProd.css';
import 'animate.css/animate.min.css';
import { useNavigate } from 'react-router-dom';

function CardProd() {

    const navigate = useNavigate()
    const productDetailsnavigate = () => {
        navigate('productdetails')
    }
    return (
        <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6 col-xs-6 mb-30px">
            <Card className="product" style={{ backgroundColor: '#f7f8fa' }}>
                <div className="thumb position-relative">
                    <a href="#" className="image">
                        <img src='/assets/plants/plant-1.png' alt="Product" />
                        <img className="hover-image" src='/assets/plants/plant-1.png' alt="Product" />
                    </a>
                    <div className="badges d-flex flex-column gap-2">
                        <div className="newprd">
                            New
                        </div>
                        <div className="saleprd">
                            Sale
                        </div>
                    </div>

                    <div className="actions">
                        <a href="#" className="action wishlistBack d-flex justify-content"><FontAwesomeIcon icon={faHeart} /></a>
                        <div className='hiddenIcard animate__animated animate__backInDown'>
                            <a href="# " className='wishlistBack'> <FontAwesomeIcon icon={faEye} /></a>
                            <a href="#" className="wishlistBack"><FontAwesomeIcon icon={faSyncAlt} /></a>
                        </div>
                    </div>
                </div>
                <Card.Body className="content d-flex flex-column align-items-center justify-content-center p-0 position-relative">
                    <span className="ratings">
                        <span className="rating-wrap">
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                            <FontAwesomeIcon icon={faStar} className="star" />
                        </span>
                        <span className="rating-num">(5 Review)</span>
                    </span>
                    <Card.Title as="h5"><a href="#" className='text-decoration-none text-black'>Hand-Made Garlic Mortar</a></Card.Title>
                    <Card.Text className="price">
                        <span className="new">₹250</span>
                    </Card.Text>
                    <Button onClick={productDetailsnavigate} className="add-to-cart animate__animated animate__zoomIn" title="Add To Cart">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardProd;
