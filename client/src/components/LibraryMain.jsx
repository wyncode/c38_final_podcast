import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

function LibraryMain(props) {
  const { podcast, setPodcast, selectedPodcast } = useContext(AppContext);
  const [library, setLibrary] = useState([]);
  const [data, setData] = useState({});

  const podcastsToFetch = Object.values(podcast);
  console.log(library);
  useEffect(() => {
    const array = [];
    podcastsToFetch.forEach((id) => {
      axios.get(`/api/podcast/${id}`, { withCredentials: true }).then((res) => {
        array.push(res.data);
      });
    });
    setLibrary(array);
  }, []);

  const handlePost = () => {
    library.forEach((item) => setData(item));
    axios
      .post('/api/podcast/favorite', data, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <button onClick={handlePost}>TEST</button>
    </div>
  );
}

export default LibraryMain;
