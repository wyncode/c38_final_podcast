import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../Photos/wyncastV2.png';
import Avatar from '../Photos/wyncastv1.png';
function NavBar() {
  return (
    <Navbar>
      <Nav.Item>
        <Nav.Link href="/">
          <img width="130px" height="60px" src={Logo} />
        </Nav.Link>
      </Nav.Item>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <img width="130px" height="60px" src={Avatar} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
