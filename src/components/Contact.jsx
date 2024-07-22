import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Input, initMDB } from 'mdb-ui-kit';
import './styles/contact.css'; // Import your CSS file

const Contact = () => {
  useEffect(() => {
    initMDB({ Input });
  }, []);

  return (
    <section id="contact" className="contact-section bg-light py-md-5 py-2">
      <Container>
        <Row className="justify-content-center">

          <Col md={6} className="contact-links">
            <div className='contactSeIcons'>
              <h2 className="contact-title">CONTACT</h2>
              <div className="links">
                <div className="link mx-2">
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
                </div>
                <div className="link mx-2">
                  <a href="#"><FontAwesomeIcon icon={faWhatsapp} className='icon' /></a>
                </div>
                <div className="link mx-2">
                  <a href="#"><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                </div>
                <div className="link mx-2">
                  <a href="#"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                </div>
              </div>
            </div>
            <img className='contactSectionImg' src="./assets/services/indoor-plants-studio.jpg" alt="" />
          </Col>
          <Col md={6} className="contact-form">
            <Form>
              <Form.Group className="form-item">
                <Form.Control className="input" type="text" name="sender" placeholder="Name" required />
              </Form.Group>
              <Form.Group className="form-item">
                <Form.Control className="input" type="email" name="email" placeholder="Phone" required />
              </Form.Group>
              <Form.Group className="form-item">
                <Form.Control className="input" type="email" name="email" placeholder="Place" required />
              </Form.Group>
              <Form.Group className="form-item">
                <Form.Control className="input" type="email" name="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="form-item">
                <Form.Control className="textarea" as="textarea" name="message" placeholder="Message" required />
              </Form.Group>
              <Button type="submit" className="submit-btn">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
