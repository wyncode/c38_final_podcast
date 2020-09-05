import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import MypodcastSection from '../components/MypodcastSection';
import { AppContext } from '../context/AppContext';
import NavBar from '../components/NavBar';
const MyPodcast = ({ data, onCardClick, podcastSelection, history }) => {
  let { catOne, catTwo, catThree } = data;
  const { podcast, setPodcast } = useContext(AppContext);

  const handlePodcast = () => {
    setPodcast(podcastSelection);
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <MypodcastSection data={catOne} onCardClick={onCardClick} />
        </div>
        {catOne && catOne.length && (
          <hr
            style={{
              border: '2px solid grey',
              width: '90%'
            }}
          />
        )}
        <div>
          <MypodcastSection data={catTwo} onCardClick={onCardClick} />
        </div>
        {catTwo && catTwo.length && (
          <hr
            style={{
              border: '2px solid grey',
              width: '90%'
            }}
          />
        )}
        <div>
          <MypodcastSection data={catThree} onCardClick={onCardClick} />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {' '}
          <Button
            variant="outline-primary"
            style={{
              width: '30%',
              margin: '30px'
            }}
            onClick={() => history.push('/library-main')}
          >
            Add to My Library{' '}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyPodcast;
