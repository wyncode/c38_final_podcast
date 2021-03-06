import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import '../App.css';
const AboutYou = ({ data, onclick, slectedCategories, onDone }) => {
  console.log('datatatat', data);
  return (
    <>
      <NavBar />
      <Container className="d-flex flex-column justify-content-center">
        <text style={{fontFamily:'Century Gothic', fontSize:'25px', color:'grey'}} className='d-flex justify-content-center' >Select up to 3 categories so we can begin to curate your rad experience:</text>
        <Row>
          {slectedCategories.map((rec) => (
            <Button style={{ margin: '5px', borderColor: '#3491b9', borderWidth: '2px'}} key={rec.id}>
              {rec.name}
            </Button>
          ))}
        </Row>
        <div className="gridArea">
          {data &&
            data.map((rec) => (
              <div className="grid-item" key={rec._id}>
                <Button
                  variant="outline-primary"
                  onClick={() => onclick({ id: rec._id, name: rec.name })}
                >
                  {rec.name}
                </Button>
              </div>
            ))}
        </div>
      </Container>
      <div className="finalButton">
        <Button style={{color: '#f7f7f7', backgroundColor:'#f172a1'}} onClick={onDone}>
          Ready! Take me to my PODCASTS
        </Button>
      </div>
    </>
  );
};

export default AboutYou;
