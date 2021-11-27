import React from 'react';
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="mb-5 py-5" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><h1>Tour-a-dour</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-white fw-bold me-2 navbar-brand" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white fw-bold me-2 navbar-brand" as={HashLink} to="/home#services">Services</Nav.Link>
                        <DropdownButton id="dropdown-item-button" className="me-2" title="Admin">
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/myorder">My Service</Dropdown.Item>
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/addService">Add a Service</Dropdown.Item>
                            <Dropdown.Item className="text-black fw-bold me-2 navbar-brand" as={Link} to="/allorder">Others Service</Dropdown.Item>
                        </DropdownButton>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className="text-white fw-bold me-4 navbar-brand" as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;