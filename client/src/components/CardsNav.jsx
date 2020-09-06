import React from 'react';
import { Container, Nav, Button, Card, CardDeck } from 'react-bootstrap';
import HomeNavBar from '../components/HomeNavBar';
import { useHistory } from 'react-router-dom';

import Cover from '../Images/podcastcover.jpg';

const CardsNav = ({ header, title, body }) => {
  console.log('CARD NAV HAS LOADED')
  const history = useHistory();
  const handleCardClick = ()=>{
    console.log({DOESCLICKWORK: 'YES IT DOES'})
    history.push('/play')
  }
  return (
    //<CardDeck>
    <Card className="singleCard" onClick={handleCardClick}>
      <Card.Header>!!!!!</Card.Header>
      <Card.Img variant="top" src={Cover} width={300} />
      <Card.Body>
        <Card.Title>Banana</Card.Title>
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
