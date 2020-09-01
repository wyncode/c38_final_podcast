import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import NavBar from '../components/NavBar';



function Results() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>First Results</h1>
        <div>
          <Row>

            <Card />
            <Card />
            <Card />
            <Card />

          </Row>
        </div>
      </Container>
    </>
  );
}

export default Results;
