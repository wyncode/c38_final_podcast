import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import NavBar from '../components/NavBar';
function LibraryMain(props) {
  const { podcast, setPodcast, selectedPodcast, currentUser } = useContext(
    AppContext
  );
  const [userData, setUserData] = useState(null);

  // this is for a user who already has favs and preferences (a logged in user basically)
  const fetchUser = () => {
    const user = sessionStorage.getItem('user');
    const userDetails = JSON.parse(user);
    const userId = userDetails._id;
    axios.get(`api/user/${userId}`, { withCredentials: true }).then((res) => {
      setUserData(res.data);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // This is for a user who has just signed up

  userData && userData.favorite.map((item) => console.log(item));

  return (
    <>
      <NavBar />
      {userData &&
        userData.favorite.map((item) => <p key={item._id}>{item.title}</p>)}
    </>
  );
}

export default LibraryMain;
