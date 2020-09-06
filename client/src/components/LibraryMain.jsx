import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';


function LibraryMain(props) {
  const {} = useContext(AppContext);
  const [userData, setUserData] = useState();

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
    console.log(userData);
  }, []);

  // This is for a user who has just signed up

  userData && userData.favorite.map((item) => console.log(item));

  return (
    <>
      <Container>
        <div className="cardContainer">
          {userData &&
            userData.favorite.map((item) => (
              <div key={item._id}>
                <Card className="singleCard">
                  <Card.Header>{item.author}</Card.Header>
                  <Card.Img
                    variant="top"
                    src={item.coverImage}
                    height="180px"
                    width="180px"
                  />
                  <Card.Footer>{item.title}</Card.Footer>
                </Card>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
}

export default LibraryMain;
