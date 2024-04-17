import {Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header >
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Jobify" style={{ maxHeight: '125px'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link href="/cart"><FaShoppingCart/>&nbsp;סל הקניות</Nav.Link>    
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/login"><FaUser/>&nbsp;כניסת משתמש</Nav.Link>    
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
export default Header