import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MypodcastSection from '../components/MypodcastSection';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import NavBar from '../components/NavBar';
const MyPodcast = ({ data, onCardClick, podcastSelection, history }) => {
  let { catOne, catTwo, catThree } = data;
  const { podcast, setPodcast } = useContext(AppContext);
  const [library, setLibrary] = useState([]);

  const podcastsToFetch = Object.values(podcast);

  useEffect(() => {
    const array = [];
    podcastsToFetch.forEach((id) => {
      axios.get(`/api/podcast/${id}`, { withCredentials: true }).then((res) => {
        array.push(res.data);
      });
    });
    setLibrary(array);
  }, [podcast]);

  const handlePost = () => {
    const user = sessionStorage.getItem('user');
    const userDetails = JSON.parse(user);
    const userId = userDetails._id;

    axios
      .post(`/api/podcast/favorite/${userId}`, library, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data.message);
        history.push('/library-main');
      });
  };

  return (
    <>
      <NavBar />
      <div className="mypodcastbackground">
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
                width: '50%'
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
                margin: '30px',
                color: '#A1C3D1',
                backgroundColor: '#F7F7F7'
              }}
              onClick={handlePost}
            >
              Add to My Library{' '}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPodcast;
