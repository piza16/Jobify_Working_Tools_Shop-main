import {Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from "react-router-bootstrap";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header >
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>               
                    <Navbar.Brand>
                        <img src={logo} alt="Jobify" style={{ maxHeight: '125px'}}/>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Item>
                            <LinkContainer to='/cart'>
                                <Nav.Link><FaShoppingCart/>&nbsp;סל הקניות</Nav.Link>    
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to='/login'>
                                <Nav.Link><FaUser/>&nbsp;כניסת משתמש</Nav.Link>    
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
export default Header