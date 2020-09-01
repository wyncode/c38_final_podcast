import React, { useState, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const LoginModal = ({ history }) => {
  const { isLoginModalOpen, setIsLoginModalOpen } = useContext(AppContext);

  const handleModal = (event) => {
    event.preventDefault();
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <Modal
      className="modal-popup"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isLoginModalOpen}
      backdrop="static"
    >
      <Form className="container d-flex flex-column align-items-center justify-content-center fullscreen">
        <Form.Text className="mb-4">Log In!</Form.Text>
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
        <Button className="mb-4 mt-2" type="submit" onSubmit={handleModal}>
          Login
        </Button>
      </Form>
    </Modal>
  );
};

export default LoginModal;
