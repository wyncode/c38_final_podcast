import React from 'react';
import {
  Container,
  Button,
  Form,
  Card,
  CardDeck,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import '../App.css';
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';
const Play = (props) => {
    const location = useLocation();
    console.log('=================')
    console.log(location.state) // this is all of your stuff location.state.coverImage
  const { showMoreArray, singlePodcast } = props;
  return (
    <>
      <NavBar />
      <Container className="d-flex flex-column justify-content-center">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <Form style={{ width: '80%' }}>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-search"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                  </svg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                style={{
                  border: '2px solid grey'
                }}
                id="inlineFormInputGroup"
                placeholder="search"
              />
              {/* <Form.Control
                            type="text"
                            style={{
                                border: "2px solid grey",
                                borderRadius: "10px",
                                margin: "15px",

                            }}
                        /> */}
            </InputGroup>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
              }}
            >
              <Form.Label>Currently Playing</Form.Label>
            </div>
          </Form>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <Card style={{ width: '300px', marginBottom: '30px' }}>
            <Card.Img
              variant="top"
              src={location.state.coverImage}
              style={{ width: '300px', height: '300px' }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: 'center'
                }}
              >
                {singlePodcast?.title}
              </Card.Title>
            </Card.Body>
            <Card.Footer>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <svg
                  style={{ fontSize: '50' }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-play-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>

                <svg
                  style={{ fontSize: '50' }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pause-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                </svg>
                <svg
                  style={{ fontSize: '50' }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-stop-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                </svg>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </Container>



      <CardDeck  style={{marginLeft:'30%', width: '40%', marginBottom:'10rem'}}>
        <Card>
            <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sports-wars-1564771929.jpg" />
        </Card>
            <Card>
            <Card.Img variant="top" src="https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/startup-podcast-logo.png?width=600&name=startup-podcast-logo.png" />
        </Card>
        <Card>
            <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edge-of-sports-1564771797.jpg" />
     </Card>
        </CardDeck>
    </>
  );
};
export default Play;
