import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">voot</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">My Voot</Nav.Link>
            <Nav.Link href="#action2">Premium</Nav.Link>
            <Nav.Link href="#action3">Sports</Nav.Link>
            <Nav.Link href="#action4">Shows</Nav.Link>
            <Nav.Link href="#action5">Movies</Nav.Link>
            <Nav.Link href="#action6">Channels</Nav.Link>
          </Nav>  
             </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;