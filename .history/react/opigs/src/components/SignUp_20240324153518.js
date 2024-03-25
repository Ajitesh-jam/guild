import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Form1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(event) {
    event.preventDefault(); // Prevent form submission

    try {
      // Send email and password to the backend API
      await axios.post("http://localhost:3000/signUp", {
        email: email,
        password: password,
      });

      // Clear the form fields after successful submission
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log("Error", e.message);
    }
  }

  return (
    <>
      <Form onSubmit={submit}>
        {" "}
        {/* Use onSubmit event handler for form submission */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email} // Bind value to email state
              onChange={(e) => setEmail(e.target.value)} // Update email state onChange
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password} // Bind value to password state
              onChange={(e) => setPassword(e.target.value)} // Update password state onChange
            />
          </Form.Group>
        </Row>
        {/* Other form fields... */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/signUp">SignUp Page</Link>
    </>
  );
}

export default Form1;
