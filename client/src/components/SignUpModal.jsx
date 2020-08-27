
 import React, { useState, useContext } from 'react';
 import { Modal, Form, Button } from 'react-bootstrap';
 import { AppContext } from '../context/AppContext';
 
 const SignUpModal = () => {
const { signUpModalOpen, setSignUpModalOpen} = useContext(AppContext);

const [formData, setFormData] = useState(null)
const handleModal = (event) => {
    event.preventDefault();
    setSignUpModalOpen(!signUpModalOpen);

  }

const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
    
    return (
 <Modal 
 className="modal-popup"
 size="md"
 aria-labelledby="contained-modal-title-vcenter"
 centered
 show={signUpModalOpen}
 backdrop="static">
     <Form className="container d-flex flex-column align-items-center justify-content-center fullscreen">
         <Form.Text>Sign Up | WynCast</Form.Text>
     <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="PodcastFan@gmail.com" name="email" />
      </Form.Group>
     
     <Form.Text className="mb-4"></Form.Text>
     <Form.Group>
       <Form.Label>Username</Form.Label>
       <Form.Control type="text" placeholder="CodeBear8836" name="username" />
     </Form.Group>


     <Form.Group>
       <Form.Label>Password</Form.Label>
       <Form.Control typep="password" placeholder="Not 'password'" name="password" />
     </Form.Group>
     <Button className="mb-4 mt-2" type="submit" onSubmit={handleModal}>
          Let's Get Started!
        </Button>
     </Form>
     </Modal>

    )};


    export default SignUpModal;