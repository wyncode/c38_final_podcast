import React, { useContext, useEffect } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const MypodcastSection = ({ data, onCardClick }) => {
  const { podcast, setPodcast, setSelectedPodcasts } = useContext(AppContext);
  const tempArray = [];

  console.log('PODCAST SELECTION: ', podcast);

  return (
    <CardDeck
      style={{
        width: '80%'
      }}
    >
      {data && data.length && (
        <Card.Body style={{ marginLeft: '100px' }}>
          <Card.Title />
          <Card.Text>
            <Button
              variant="outline-primary"
              style={{
                margin: '15% 5px 5px 5px',
                width: '100%',
                padding: '30px'
              }}
            >
              {/* {data[0].category} */}
            </Button>
          </Card.Text>
        </Card.Body>
      )}

      {data &&
        data.map((rec) => (
          <Card
            key={rec._id}
            onClick={() => {
              console.log(rec);

              onCardClick(rec._id);

              setPodcast({
                ...podcast,
                [rec.title]: rec._id
              });
            }}
          >
            <Card.Img
              variant="top"
              src={rec.coverImage}
              width="200px"
              height="200px"
            />
          </Card>
        ))}
    </CardDeck>
  );
};

export default MypodcastSection;
