import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../App.css';
import CardsNav from '../components/CardsNav';

function Top10() {
  return (
    <>
      <Row className="m-5">
        <h3>Trending on our lists</h3>
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

export default Top10;
