import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Form1() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [CompanyWebsite, setCompanyWebsite] = useState("");

  async function submit(event) {
    event.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post("http://localhost:5000/companies", {
        Name: name,
        Email: email,
        Password: password,
        CompanyWebsite: CompanyWebsite,
      });
      console.log(response.data); // Log response data
    } catch (error) {
      console.error("Error", error.message);
    }
  }

  return (
    <>
      <Form onSubmit={submit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
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
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>CompanyWebsite</Form.Label>
            <Form.Control
              type="CompanyWebsite"
              placeholder="CompanyWebsite"
              value={CompanyWebsite} // Bind value to password state
              onChange={(e) => setCompanyWebsite(e.target.value)} // Update password state onChange
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)} // Update email state onChange
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  );
}

export default Form1;
