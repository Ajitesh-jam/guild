import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoKgp from "./Images/logo.png";
function CustomNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ height: "90px", width: "100%" }}
      >
        <div style={{ padding: "10px" }}>
          <img
            src={logoKgp}
            alt=" "
            style={{
              height: "80%",
              width: "80%",
              marginTop: "30%",
              marginBottom: "30%",
            }}
          ></img>
        </div>
        <Navbar.Brand href="/" style={{ fontSize: "40px" }}>
          INDIAN INSTITUTE OF TECHNOLOGY
        </Navbar.Brand>
      </Navbar>

      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ height: "100px", fontSize: "30px", width: "100%" }}
      >
        <Navbar.Brand href="/" style={{ padding: "2px 60px" }}>
          CAREER ADVISING AND <br></br>PROFESSIONAL DEVELOPMENT{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/login" style={{ padding: "2px 30px" }}>
              STUDENTS
            </Nav.Link>
            <Nav.Link href="/company/login" style={{ padding: "2px 30px" }}>
              RECRUITERS
            </Nav.Link>
            <Nav.Link href="/login" style={{ padding: "2px 30px" }}>
              ALUMNI
            </Nav.Link>
            <NavDropdown
              title="COORDINATOR"
              id="navbarScrollingDropdown"
              style={{ padding: "2px 60px" }}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
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
      </Navbar>
    </>
  );
}

export default CustomNavbar;
