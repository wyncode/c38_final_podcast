import React from 'react';
import { Container, Nav, Button, Card, CardDeck } from 'react-bootstrap';
import HomeNavBar from '../components/HomeNavBar';

import Cover from '../Images/podcastcover.jpg';

const CardsNav = ({ header, title, body }) => {
  return (
    //<CardDeck>
    <Card className="singleCard">
      <Card.Header>PODCAST</Card.Header>
      <Card.Img variant="top" src={Cover} width={300} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>{body}</Card.Text> */}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    //</CardDeck>
  );
};

export default CardsNav;
