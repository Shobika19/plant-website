import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="success" variant="success" expand="lg">
            <Navbar.Brand href="/" style={{color:"white", fontWeight:"bolder"}}>Happy to plant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto" >
                    <LinkContainer to="/" style={{color:"yellow"}}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create" style={{color:"yellow"}}>
                        <Nav.Link>Create Post</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/View" style={{color:"yellow"}}>
                        <Nav.Link>View Details</Nav.Link>
                    </LinkContainer>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavigationBar;                                                                                         