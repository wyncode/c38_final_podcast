import React, { useContext } from 'react';
import { Navbar, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import wyncastlogo from '../Images/Wyncastlogo.png';
function HomeNavBar() {
	const { setIsLoginModalOpen } = useContext(AppContext);
	return (
		<Navbar>
			<Navbar.Brand href="/">
				<img src={wyncastlogo} style={{ width: '200px' }} />
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="justify-content-end">
				<Button
					style={{ color: '#71b2ce', backgroundColor: '#f7f7f7', borderBlockColor: '#f7f7f7' }}
					onClick={() => setIsLoginModalOpen(true)}
				>
					Returning User: Sign In
				</Button>
			</Navbar.Collapse>
		</Navbar>
	);

}

export default HomeNavBar;
