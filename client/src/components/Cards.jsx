import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Monkey from '../Photos/image-asset.png';

function Cards() {
  return (
    <Card style={{ width: '15rem', height: '18rem' }} className="mr-2 ml-2">
      <Card.Title>title</Card.Title>
      <Card.Img variant="top" src={Monkey} />
      <Card.Body>
        <Card.Text>Description</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Author: author</ListGroupItem>
        <ListGroupItem>Rating: rating ⭐</ListGroupItem>
        <ListGroupItem>Lenght: Lenght</ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <Card.Link href="#">podcast link</Card.Link>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
