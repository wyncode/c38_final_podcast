import React, { useContext } from 'react';
import { Navbar, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import logo from '../Images/Logo.png';
function HomeNavBar() {
  const { setIsLoginModalOpen } = useContext(AppContext);
  return (
    <Navbar>
      <Navbar.Brand href="/">
        <Image src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button onClick={() => setIsLoginModalOpen(true)}>
          Returning User: Sign In
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HomeNavBar;
