import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoKgp from './Images/logo.png';
function CustomNavbar() {
  return (
    <>
    <image src={logoKgp}></image>
        <Container>
            
      <Navbar expand="lg" className="bg-body-tertiary" style={{height:'90px'}}>
        <Container>
          <Navbar.Brand href="#" style={{fontSize:'40px'}}>INDIAN INSTITUTE OF TECHNOLOGY</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    <Navbar expand="lg" className="bg-body-tertiary" style={{height:'100px',fontSize:'30px',padding:'50px 50px'}}>
      <Container fluid>
        <Navbar.Brand href="#" >CAREER ADVISING AND <br></br>PROFESSIONAL DEVELOPMENT </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll
          >
            <Nav.Link href="#action1">STUDENTS</Nav.Link>
            <Nav.Link href="#action2">RECRUITERS</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}

export default CustomNavbar;

