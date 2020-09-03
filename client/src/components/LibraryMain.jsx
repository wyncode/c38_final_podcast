import React, { useEffect, useState } from 'react';
import axios from 'axios';
function LibraryMain(props) {
  const [selectedPodcasts, setSelectedPodcasts] = useState();
  console.log('selectedp', props.selectedPodcast);
  const podcastsToFetch = Object.values(props.selectedPodcast);
  console.log(podcastsToFetch);
  podcastsToFetch.forEach((podcast) => {
    console.log('I am over here:' + podcast);
  });
  const mapPodcasts = async () => {
    try {
      const response = await axios.get(`/api/podcast/id=${podcastsToFetch}`);
      // http://our.api.com/Product?id=["101404","7267261"]
      // const response = await axios.get("/api/podcast/:id", FormData);
      console.log('response', response);
      setSelectedPodcasts(response);
      // // persists user if browser is refreshes.
      // sessionStorage.setItem('user', response.data);
      // setIsLoginModalOpen(false);
      // history.push('/library-main');
    } catch (error) {
      console.log('Login Error: ', error);
    }
  };
  useEffect(() => {
    // const mapPodcasts = async () => {
    //   try {
    //     const response = await axios.get(`/api/podcast/${podcastsToFetch[0]}`)
    //     // http://our.api.com/Product?id=["101404","7267261"]
    //     // const response = await axios.get("/api/podcast/:id", FormData);
    //     console.log('response', response)
    //     // // persists user if browser is refreshes.
    //     // sessionStorage.setItem('user', response.data);
    //     // setIsLoginModalOpen(false);
    //     // history.push('/library-main');
    //   } catch (error) {
    //     console.log('Login Error: ', error);
    //   }
    // }
    mapPodcasts();
  }, []);
  // const mapPodcasts = async () => {
  //   try {
  //     const response = await axios.get(`/api/podcast/?id=${podcastsToFetch}`)
  //     http://our.api.com/Product?id=["101404","7267261"]
  //     const response = await axios.get("/api/podcast/:id", FormData);
  //     console.log(response)
  //     // // persists user if browser is refreshes.
  //     // sessionStorage.setItem('user', response.data);
  //     // setIsLoginModalOpen(false);
  //     // history.push('/library-main');
  //   } catch (error) {
  //     console.log('Login Error: ', error);
  //   }
  return (
    <div>
      <h1>My Library</h1>
      <button onClick={mapPodcasts}>click</button>
    </div>
  );
}
export default LibraryMain;
