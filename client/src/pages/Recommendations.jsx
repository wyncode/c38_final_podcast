import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import '../App.css';
import CardsNav from '../components/CardsNav';
import NavBar from '../components/NavBar';
function Recommendations() {
  return (
    <>
      <NavBar />
      <Row className="m-5">
        <h3>Other titles you might enjoy...</h3>
      </Row>
      <Container className="cardContainer">
        <CardsNav className="singleCard" />
        <CardsNav className="singleCard" />
        <CardsNav className="singleCard" />

        {/* <Row className="m-5">
          <h3>Other titles you might enjoy...</h3>
        </Row>
        <div className="cardContainer">
          <Card className="singleCard">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Button variant="warning">Add to Library</Button>
          </Card>

          <Card className="singleCard">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Button variant="warning">Add to Library</Button>
          </Card>

          <Card className="singleCard">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Button variant="warning">Add to Library</Button>
          </Card>

          <Card className="singleCard">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Button variant="warning">Add to Library</Button>
          </Card> */}
      </Container>
    </>
  );
}

export default Recommendations;
