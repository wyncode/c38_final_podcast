import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button, Image, Row } from 'react-bootstrap';
import photo from '../Photos/wyncastv1.png';
import { AppContext } from '../context/AppContext';
function NavBar() {
  const { image, currentUser } = useContext(AppContext);
  console.log(image ? image : currentUser?.avatar ? currentUser.avatar : photo);
  return (
    <>
      <Navbar style={{ color: 'white', background: 'white' }}>
        <Navbar.Brand href="/">
          <Image src="logo.png" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/library-main">My Library</Nav.Link>
        </Nav>
        <Navbar.Brand className="justify-content-end" href="/profile">
          <Image
            src={
              image
                ? URL.createObjectURL(image)
                : currentUser?.avatar
                ? currentUser.avatar
                : photo
            }
            alt="profile-picture"
            width={150}
            height={150}
            roundedCircle
          />
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavBar;
