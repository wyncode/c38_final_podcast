import React, { useState, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginModal = () => {
  const history = useHistory();
  const { isLoginModalOpen, setIsLoginModalOpen } = useContext(AppContext);
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleModal = (event) => {
    event.preventDefault();
    setIsLoginModalOpen(true);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', formData);
      setCurrentUser(response.data);
      // persists user if browser is refreshes.
      sessionStorage.setItem('user', response.data);
      setIsLoginModalOpen(false);
      history.push('/library-main');
    } catch (error) {
      console.log('Login Error: ', error);
    }
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
      <Form
        className="container d-flex flex-column align-items-center justify-content-center fullscreen"
        onSubmit={handleLogin}
      >
        <Form.Text className="mb-4">Log In!</Form.Text>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
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

