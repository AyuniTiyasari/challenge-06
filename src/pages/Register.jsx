import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleLogin from "../components/GoogleLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/authActions"

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

      let data = JSON.stringify({
        name,
        email,
        password,
      });

      dispatch(register(data, navigate))
    };

  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="text-center">Or</h4>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <GoogleLogin buttonText="Register with Google 🚀" />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;