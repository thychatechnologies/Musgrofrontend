import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Input, initMDB } from 'mdb-ui-kit';
import Bestproducts from '../components/Bestproducts';
import { FaWhatsapp } from "react-icons/fa";
import './styles/home.css'
function Shop() {
    useEffect(() => {
        initMDB({ Input });
    }, []);

    return (
        <Container>

            <Row className="my-sm-5 my-2 g-5">
                <Bestproducts />
            </Row>

            <div className='whatsapp-icon'>
                <FaWhatsapp />
            </div>
        </Container>
    );
}

export default Shop;
