import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";
import './styles/footermusgro.css';

function Footermusgro() {
  return (
    <Container fluid className="footer-container">
      <Container className="footer-fluid">
        <Row className="footer-rowone">
          <Col md={6}>
            <div className='d-flex align-items-center gap-2'>
              <div className='footer-icon'>
                <FaRegEnvelopeOpen />
              </div>
              <div className='mt-4'>
                <h4>Newsletter & Updates</h4>
                <p className='footerlinkcolor'>Sign up for our newsletter to get updates from us</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='newsletter-form mt-4'>
              <input type="text" placeholder="Enter your email" />
              <button className='border-0'>Submit</button>
            </div>
          </Col>
        </Row>
        <Row className="footer-rowtow">
          <Col md={3}>
            <ul>
              <li><b>Information</b></li>
              <li className='footerlinkcolor'>About Us</li>
              <li className='footerlinkcolor'>About Us</li>
              <li className='footerlinkcolor'>About Us</li>
              <li className='footerlinkcolor'>Delivery Information</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li ><b>Support</b></li>
              <li className='footerlinkcolor'>About Us</li>
              <li className='footerlinkcolor'>About Us</li>
              <li className='footerlinkcolor'>Contact Us</li>
              <li className='footerlinkcolor'>FAQs</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li><b>Legal</b></li>
              <li className='footerlinkcolor'>About Us</li>
              <li className='footerlinkcolor'>About Us</li>
              <li className='footerlinkcolor'>Terms of Service</li>
              <li className='footerlinkcolor'>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul>
              <li><b>Social</b></li>
              <li className='footerlinkcolor'>If you have any question please contact us at info@musgro.com</li>
              <li className='d-flex align-items-center footerlinkcolor'>
                <div className='footer-icons'>
                  <CiLocationOn />
                </div>
                Address
                123, Address.
              </li>
              <li className='d-flex align-items-center'>
                <div className='footer-icons text-white-50'>
                  <IoMdPhonePortrait />
                </div>
                <div className='d-flex flex-column'>
                  <a href="#" className='text-white-50'>+ 0 123 456 789</a>
                  <a href="#" className='text-white-50'>+ 0 123 456 789</a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-rowthree">
          <Col sm={6}>
            <p className=''> 2024 MusGro Made With  By Thycha Technologies .</p>
          </Col>
          <Col sm={6} className='d-flex justify-content-sm-end justify-content-center'>
            <img className='payment-icons' src="./assets/icons/payment.png" alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footermusgro;
