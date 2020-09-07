import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../App.css';
import CardsNav from '../components/CardsNav';
import NavBar from '../components/NavBar';
function Top10() {
  return (
    <>
      <NavBar />
      <Row className="m-5">
        <h3>Trending on our lists</h3>
      </Row>
      <Container className="cardContainer">
        <CardsNav className="singleCard" />
        <CardsNav className="singleCard" />
        <CardsNav className="singleCard" />
      </Container>
    </>
  );
}
export default Top10;
