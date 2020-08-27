import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
const Login = () => {
  return (
    <>
      <NavBar />
      <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <h1 className="mb-4">Login</h1>
        <Form style={{ width: 300 }}>
          <Form.Group>
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              id="firstName"
              type="firstName"
              placeholder="First Name"
              name="firstName"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              id="lastName"
              type="lastName"
              placeholder="Last Name"
              name="lastName"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button type="submit">Login</Button>
          </Form.Group>
        </Form>
        <Link className="mt-4" to="/signup">
          Need an Account? Sign up.
        </Link>
      </Container>
    </>
  );
};

export default Login;
