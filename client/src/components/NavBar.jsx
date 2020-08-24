import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar>
      <Nav.Item>
        {/*save for later to add logo */}
        {/* <img width="70px" src={Logo} /> */}
        <Button href="/">Home</Button>
      </Nav.Item>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button href="/Login">Log In</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
