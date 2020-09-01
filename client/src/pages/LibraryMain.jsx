import React from 'react';
import { Card, CardDeck, Container, Nav, Button } from 'react-bootstrap';
import HomeNavBar from '../components/HomeNavBar';
import Logo from '../Photos/wyncastV2.png';
import CardsNav from '../components/CardsNav';
import Blog from '../Images/Blog2.jpg';

const LibraryMain = () => {
  const cards = [
    {
      header: 'Library',
      title: 'Jaded Streets',
      body:
        'Host Jade Montego takes to Portlands streets for Live Podcasting and unpredictable interviews'
    },
    { header: 'Recommended', title: 'Go-mance', body: 'text' },
    { header: 'Top 10', title: 'Lady Rulers', body: 'text' }
  ];
  return (
    <div>
      <HomeNavBar />
      <h1>HOMEPAGE</h1>
      <Container className="d-flex">
        {cards.map((card) => {
          return (
            <CardsNav
              header={card.header}
              title={card.title}
              body={card.body}
            />
          );
        })}
      </Container>
      <div>
        <img className="mt-50" src={Blog} width="100%" height="650px" />
      </div>
    </div>
  );
};

export default LibraryMain;
