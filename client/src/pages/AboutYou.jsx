import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import '../App.css';
const AboutYou = () => {
  return (
    <>
      <NavBar />
      <Container className="d-flex flex-column justify-content-center">
        <Form>
          <Form.Label>Tell us about yourself...</Form.Label>
          <Form.Control
            type="text"
            placeholder="By selecting up to 3 favorite categories we can begin to curate your experience"
          />
        </Form>
      </Container>
    </>
  );
};

export default AboutYou;
