import React from 'react';
import { Container, Button, Form, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import '../App.css';
const AboutYou = ({ data, onclick, slectedCategories, onDone }) => {
  console.log('datatatat', data);
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
        <Row>
          {slectedCategories.map((rec) => (
            <Button variant="primary" style={{ margin: '5px' }} key={rec.id}>
              {rec.name}
            </Button>
          ))}
        </Row>
        <div className="gridArea">
          {data &&
            data.map((rec) => (
              <div className="grid-item" key={rec._id}>
                <Button
                  variant="outline-primary"
                  onClick={() => onclick({ id: rec._id, name: rec.name })}
                >
                  {rec.name}
                </Button>
              </div>
            ))}
        </div>
      </Container>
      <div className="finalButton">
        <Button variant="primary" onClick={onDone}>
          Ready! take me to my PODCASTS
        </Button>
      </div>
    </>
  );
};

export default AboutYou;
