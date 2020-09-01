import React, { useState, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const SignUpModal = ({ history }) => {
  const { signUpModalOpen, setSignUpModalOpen } = useContext(AppContext);
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModal = (event) => {
    event.preventDefault();
    setSignUpModalOpen(!signUpModalOpen);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/');
    } catch (error) {
      console.log('SignUp Error: ', error);
    }
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
      <Form
        className="container d-flex flex-column align-items-center justify-content-center fullscreen"
        onSubmit={handleSignUp}
      >
        <Form.Text>Sign Up | WynCast</Form.Text>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

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
            typep="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
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
