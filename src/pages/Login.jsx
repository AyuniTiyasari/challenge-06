import React, {useState} from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import GoogleLogin from '../components/GoogleLogin'
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onSubmit = async (e) => {
      e.preventDefault();

        let data = JSON.stringify({
          email,
          password,
        });

        dispatch(login(data, navigate))
    };
  return (
    <Container className="p-4">
      <Row className="mb-4">
        <Col>
          <Form onSubmit={onSubmit}>
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
          <h4 className='text-center'>Or</h4>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <GoogleLogin buttonText="Login with Google 🚀" />
        </Col>
      </Row>
    </Container>
  )
}

export default Login