
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/navmusgro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



function Navmusgro() {


    const navigate = useNavigate()

    const navigateConatct = () => {
        navigate('/contact')
    }
    const navigateAbout = () => {
        navigate('/about')
    }

    const navigateShop = () => {
        navigate('/shop')
    }
    const navigateServices = () => {
        navigate('/services')
    }

    const navigateHome = () => {
        navigate('/')
    }



    return (
        <div className='musgro-Container'>
            <Navbar expand="lg" className="bg-body-tertiary ">
                <Container className='py-3'>
                    <Navbar.Brand href="#">
                        <img className='nav-logos' src="./assets/logo.png" alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />



                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="justify-content-between w-100 align-items-center">
                            <div></div>
                            <Nav>
                                <Nav.Link onClick={navigateHome}>HOME</Nav.Link>
                                <Nav.Link onClick={navigateAbout}>ABOUT</Nav.Link>
                                <Nav.Link onClick={navigateShop}>SHOP</Nav.Link>
                                <Nav.Link onClick={navigateServices}>SERVICES</Nav.Link>
                                <Nav.Link onClick={navigateConatct}>CONTACT</Nav.Link>

                            </Nav>
                            <Nav className='gap-2 navpc'>

                                <Nav.Link href="#action1" className='fs-4'><FontAwesomeIcon icon={faUsers} /></Nav.Link>
                                <Nav.Link href="#action2" className='fs-4'><FontAwesomeIcon icon={faHeart} /></Nav.Link>
                                <Nav.Link href="#action2" className='fs-4'> <FontAwesomeIcon icon={faBagShopping} /></Nav.Link>

                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navmusgro;
