import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button, Image, Row } from 'react-bootstrap';
import photo from '../Images/avatarpic.png';
import wyncastlogo from '../Images/Wyncastlogo.png';
import { AppContext } from '../context/AppContext';
function NavBar() {
  const { image, currentUser } = useContext(AppContext);
  console.log(image ? image : currentUser?.avatar ? currentUser.avatar : photo);
  return (
    <>
      <Navbar style={{ background: '#A1C3D1' }}>
        <Navbar.Brand href="/">
          <Image src={wyncastlogo} 	style={{width: '150px', height: '60px'}} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/library-main" style={{ color:'#f7f7f7', fontSize:'18px', justifyContent:'center'}}> My Library</Nav.Link>
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
