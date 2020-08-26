import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';


const Login = (props) => {
  // const [show, setShow] = useState(!sessionStorage.getItem('AGE_CONFIRMED'));
  const [modalState, setModalState] = useState(false)
  const [formData, setFormData] = useState(null)
  const handleModal = () => {
    setModalState(!modalState);
  }
  const handleChange = (event) => {
    setFormData({...FormData, [event.target.name]: event.target.value})
  }
//     const handleLogin = async (event) => {
// event.preventDefault();
// // try {
// //   const response = await axios.post('/api/users/login', formData);
// // }
    
 
  
  return (
    <div>
    <Button onClick={() => handleModal()} className="login justify-content-end">Login</Button>
    <Modal
      className="modal-popup"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalState}
      backdrop="static"
      // onHide=
    >
      <Form className="container d-flex flex-column align-items-center justify-content-center fullscreen" >
        <Form.Text className="mb-4">Log In!</Form.Text>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="CodeBear8836" name="username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="PodcastFan@gmail.com" name="email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control typep="password" placeholder="Not 'password'" name="password" />
        </Form.Group>

        {/* <Modal.Title id="contained-modal-title-vcenter">ARE YOU OVER 21?!</Modal.Title>
			</Modal.Header>
			<Modal.Body>You have to be over 21 years old to access to our site</Modal.Body>
			<Modal.Footer>
				<Button className="modal-button-yes" variant="success" onClick={handleClose}>
					Yes, I am
				</Button>
				<Button className="modal-button-no" variant="danger" onClick={handleClose}>
					<a
						style={{ color: 'white', textDecoration: 'none' }}
						href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					>
						No, I am not
					</a>
				</Button> */}
        <Button className="mb-4 mt-2" type="submit">
          Abra Cadabra
        </Button>
      </Form>
    </Modal>
    </div>
  )
};

export default Login;
