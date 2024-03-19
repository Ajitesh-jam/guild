import React from 'react';
import './Navbar.css'; // Import your CSS file
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logoKgp from './Images/logo.png';

function CustomNavbar() {
  return (
    <>
      <div className="navbar-container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#" className="navbar-brand">INDIAN INSTITUTE OF TECHNOLOGY</Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#" className="navbar-brand">CAREER ADVISING AND <br/>PROFESSIONAL DEVELOPMENT</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className="navbar-toggler" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1" className="nav-link">STUDENTS</Nav.Link>
                <Nav.Link href="#action2" className="nav-link">RECRUITERS</Nav.Link>
                <Nav.Link href="#action2" className="nav-link">ALUMNI</Nav.Link>
                <NavDropdown title="COORDINATOR" id="navbarScrollingDropdown" className="nav-link">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2 form-control" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default CustomNavbar;
