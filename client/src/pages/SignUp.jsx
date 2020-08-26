import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
const SignUp = () => {
  return (
    <>
      <NavBar />
      <Container className="fullscreen d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-4">Create Account</h1>
        <Form style={{ width: 300 }}>
          <Form.Group>
            <Form.Label htmlFor="Full Name">Full Name</Form.Label>
            <Form.Control id="Full Name" type="text" name="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control id="email" type="email" name="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control id="password" type="password" name="password" />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button type="submit" href="/About-Yourself">
              Login
            </Button>
          </Form.Group>
        </Form>
        <Link to="/login">Already have an acoount? Login.</Link>
      </Container>
    </>
  );
};

export default SignUp;
