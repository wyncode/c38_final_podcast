import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

function LibraryMain(props) {
  const { podcast, setPodcast, selectedPodcast, currentUser } = useContext(
    AppContext
  );
  const [library, setLibrary] = useState([]);

  const podcastsToFetch = Object.values(podcast);

  // this is for a user who already has favs and preferences (a logged in user basically)
  const fetchUser = () => {
    const user = sessionStorage.getItem('user');
    const userDetails = JSON.parse(user);
    const userId = userDetails._id;
    axios.get(`api/user/${userId}`, { withCredentials: true }).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    const array = [];
    podcastsToFetch.forEach((id) => {
      axios.get(`/api/podcast/${id}`, { withCredentials: true }).then((res) => {
        array.push(res.data);
      });
    });
    setLibrary(array);
  }, []);

  // This is for a user who has just signed up
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
        fetchUser(userId);
      });
  };

  return (
    <div>
      <button onClick={handlePost}>TEST</button>
    </div>
  );
}

export default LibraryMain;
