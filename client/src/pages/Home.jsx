import React, { useContext } from 'react';
import { Container, Nav, Button, Card, Row } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import HomeNavBar from '../components/HomeNavBar';
import Logo from '../Photos/wyncastV2.png';
import Photo from '../Photos/HomePhoto.jpg';
const Home = () => {
  const { setSignUpModalOpen } = useContext(AppContext);

  return (
    <>
      <HomeNavBar />
      <Container>
        <Nav.Item className="fullscreen d-flex flex-column align-items-center mb-2">
          <img src={Logo} />
        </Nav.Item>
        <Nav.Item className="d-flex flex-column align-items-center ">
          <img src={Photo} height="700px" />
        </Nav.Item>

        {/* Three cards */}
        <div>
          <Row className="mt-3">
            <Card style={{ width: '18rem' }} className="mr-5 ml-5">
              <Card.Body>
                <Card.Title>Step One</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Make an account
                </Card.Subtitle>
                <Card.Text>
                  Make an account to able to use our app freely.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="mr-5 ml-5">
              <Card.Body>
                <Card.Title>Step Two</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Preference
                </Card.Subtitle>
                <Card.Text>
                  Next you will be able to choose your favorite category for a
                  better experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="mr-3 ml-5">
              <Card.Body>
                <Card.Title>Step Three</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Enjoy!
                </Card.Subtitle>
                <Card.Text>
                  Now you will be able to listen to your favorite podcast!
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
        <Nav.Item className="fullscreen d-flex flex-column align-items-center mt-5">
          <Button onClick={() => setSignUpModalOpen(true)} className="mb-5">
            Find the next podcast
          </Button>
        </Nav.Item>
      </Container>
    </>
  );
};

export default Home;
