import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';



const Login = () => {
  const { setIsLoginModalOpen } = useContext(AppContext);
  const { setSignUpModalOpen } = useContext(AppContext);
  return (
   
  <Container>
   <Button onClick={() => setIsLoginModalOpen(true)}>Log In</Button>
   {/* <LoginModal /> */}
   <Button onClick={() => setSignUpModalOpen(true)}>Listen to Your Podcast!</Button>
  
  </Container>
  );
};

export default Login;
