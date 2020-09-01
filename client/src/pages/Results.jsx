import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar';

function Results() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>First Results</h1>
        <div>
          <Row>
            {/* <Cards />
            <Cards />
            <Cards />
            <Cards /> */}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Results;
