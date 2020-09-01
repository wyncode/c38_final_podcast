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
        <div className="gridArea">
          <div className="grid-item" id="culture">
            <Button variant="outline-primary">Culture</Button>
          </div>
          <div className="grid-item" id="education">
            <Button variant="outline-primary">Education</Button>
          </div>
          <div className="grid-item" id="technology">
            <Button variant="outline-primary">Technology</Button>
          </div>
          <div className="grid-item" id="politics">
            <Button variant="outline-primary">Politics</Button>
          </div>
          <div className="grid-item" id="spitiruality">
            <Button variant="outline-primary">Spitituality</Button>
          </div>
          <div className="grid-item" id="film">
            <Button variant="outline-primary"> Film </Button>
          </div>
          <div className="grid-item" id="comedy">
            <Button variant="outline-primary">Comedy</Button>
          </div>
          <div className="grid-item" id="business">
            <Button variant="outline-primary">Business</Button>
          </div>
          <div className="grid-item" id="tv">
            <Button variant="outline-primary">T.V</Button>
          </div>
          <div className="grid-item" id="religion">
            <Button variant="outline-primary">Religion</Button>
          </div>
          <div className="grid-item" id="news">
            <Button variant="outline-primary">News</Button>
          </div>
          <div className="grid-item" id="sports">
            <Button variant="outline-primary">Sports</Button>
          </div>
        </div>
      </Container>
      <div className="finalButton">
        <Button variant="primary">Ready! take me to my PODCASTS</Button>
      </div>
    </>
  );
};

export default AboutYou;
