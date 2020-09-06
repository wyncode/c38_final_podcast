import React, { useContext } from 'react';
import { Container, Nav, Button, Card, Row } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import HomeNavBar from '../components/HomeNavBar';
import landingpagecss from '../Landingpage.css';
import LandingImage from '../Photos/Headphones.jpg';
const LandingPage = () => {
  const { setSignUpModalOpen } = useContext(AppContext);

  return (
    <>
      <HomeNavBar />
      <Container>
        <Nav.Item className="d-flex flex-column align-items-center mb-2">
          <img className="mt-50" src={LandingImage} width="43%" height="315px" style={{borderRadius:'.5%', marginBottom: '20px'}} />
        </Nav.Item>

        {/* Three cards */}
        <div>
        <h3 style={{fontFamily:'Century Gothic', color:'#81868f'}}>How It Works: </h3>
          <Row >
          
            <Card 
            style={{ width: '18rem', borderLeft:'2px solid #b39bc8', borderBottom: '2px solid #b39bc8' }} 
            className="mr-5 ml-5">
              <Card.Body>
                <Card.Title>Step 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Create an account
                </Card.Subtitle>
                <Card.Text>
                  Make an account to able to use our app freely.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', borderTop: '2px solid #b39bc8', borderLeft: '2px solid #b39bc8'}} className="mr-5 ml-5">
              <Card.Body>
                <Card.Title>Step 2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Choose you very favorites...
                </Card.Subtitle>
                <Card.Text>
                  Choose your favorite category for a
                  better experience
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', borderRight: '2px solid #b39bc8', borderBottom: '2px solid #b39bc8' }} 
            className="mr-3 ml-5">
              <Card.Body>
                <Card.Title>Step 3</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Enjoy!
                </Card.Subtitle>
                <Card.Text>
                 Listen to your preferred podcast picks, optimized to fit your taste!
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </Container>
      <Nav.Item className=" d-flex flex-column align-items-center mt-5">
        <Button onClick={() => setSignUpModalOpen(true)} className="mb-5" style={{
					
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '20',
              backgroundColor: '#71b2ce',
             
              width: '270px',
              height: '43px',
              paddingBlock: '15px',
              marginBottom: '3rem',
						}}>
          Find your next podcast!
        </Button>
      </Nav.Item>
    </>
  );
};

export default LandingPage;
