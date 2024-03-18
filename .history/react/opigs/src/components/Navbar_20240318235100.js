import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Authentication from './Authentication';

function CustomNavbar() {
    const [showSignUp, setShowSignUp] = useState(false);

    function signUp() {
        setShowSignUp(true);
    }

    return (
        <>
            <NavbarBootstrap expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavbarBootstrap.Brand href="#home">ONLINE PLACEMENT SYSTEM</NavbarBootstrap.Brand>
                    <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarBootstrap.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#login">Login</Nav.Link>
                            <button onClick={signUp}>Sign Up</button>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarBootstrap.Collapse>
                </Container>
            </NavbarBootstrap>
            {showSignUp && <Authentication />}
        </>
    );
}

export default CustomNavbar;
