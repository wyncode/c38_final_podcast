import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
    <Navbar style={{color:"white",background:"white"}}>
      <Navbar.Brand href="#home"><Image src="logo.png"  /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/About-Yourself">Library</Nav.Link>
          <Nav.Link href="/mypodcast">My podcast</Nav.Link>
          <Nav.Link href="/About-Yourself">About US</Nav.Link> 
        </Nav>
        <Navbar.Collapse className="justify-content-end"><Image src="avatar.png" /></Navbar.Collapse>
     
    </Navbar>
     
  </>
  );
}

export default NavBar;
