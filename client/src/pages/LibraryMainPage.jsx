import React, { useEffect, useContext } from 'react';
import { Card, CardDeck, Container, Nav, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import CardsNav from '../components/CardsNav';
import Blog from '../Images/Blog2.jpg';
import { AppContext } from '../context/AppContext';
import LibraryMain from '../components/LibraryMain';

const LibraryMainPage = () => {
  const { podcast } = useContext(AppContext);
  useEffect(() => {
    const podcastsToFetch = Object.values(podcast);
    console.log(podcastsToFetch);
    // loop through each id in the podcastsToFetch array, and make a GET request for the details of each podcast using the id.
  }, []);
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
      <NavBar />

      <h1>HOMEPAGE</h1>
      <Container className="d-flex">
        {cards.map((card) => {
          return (
            <CardsNav
              key={card.header}
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

export default LibraryMainPage;
