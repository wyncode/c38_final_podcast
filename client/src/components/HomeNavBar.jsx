import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../Photos/wyncastV2.png';

function HomeNavBar() {
  return (
    <>
      <Navbar />
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button href="/Login">Returning User: Log in</Button>
      </Navbar.Collapse>
    </>
  );
}

export default HomeNavBar;
