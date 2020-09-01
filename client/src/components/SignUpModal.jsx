import React, { useState, useContext } from 'react';
import { Modal, Form, Button, Nav } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const SignUpModal = ({ history }) => {
  const { signUpModalOpen, setSignUpModalOpen } = useContext(AppContext);

  const handleModal = (event) => {
    event.preventDefault();
    // try {
    //   const response = await axios.post('/api/users/login', formData);
    //   setCurrentUser(response.data);
    //   // persists user if browser is refreshed.
    //   sessionStorage.setItem('user', response.data);
    //   history.push('/');
    // } catch (error) {
    //   console.log('Login Error: ', error);
    // }

    setSignUpModalOpen(!signUpModalOpen);
  };

  return (
    <Modal
      className="modal-popup"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={signUpModalOpen}
      backdrop="static"
    >
      <Form className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <Form.Text>Sign Up | WynCast</Form.Text>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name="username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            typep="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button
          className="mb-4 mt-2"
          type="submit"
          onSubmit={handleModal}
          href="/About-Yourself"
        >
          Let's Get Started!
        </Button>
      </Form>
    </Modal>
  );
};

export default SignUpModal;
