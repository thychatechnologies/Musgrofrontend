import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles/mission.css';  // Import the CSS file

function Missions() {
    return (
        <div>
            <>
                <Row className="justify-content-center">
                    <Col sm={6} md={4} className="mb-4 mission-cards">
                        <Card className="missionSeccard" style={{ width: '20rem' }}>
                            <Card.Body>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faBullseye} size="3x" />
                                </div>
                                <Card.Title>Mission</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} className="mb-4  mission-cards">
                        <Card className="missionSeccard" style={{ width: '20rem' }}>
                            <Card.Body>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faEye} size="3x" />
                                </div>
                                <Card.Title>Vision</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} className="mb-4  mission-cards">
                        <Card className="missionSeccard" style={{ width: '20rem' }}>
                            <Card.Body>
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faHeart} size="3x" />
                                </div>
                                <Card.Title>Values</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        </div>
    )
}

export default Missions;
