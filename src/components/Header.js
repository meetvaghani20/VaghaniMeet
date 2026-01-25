import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import meet from '../PHOTO/IMG_0578.jpg';

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="nav-custom">
      <Container>
        <Navbar.Brand href="" className="d-flex align-items-center gap-2">
          <img
            src={meet}
            alt="Vaghani Meet"
            width="40"
            height="40"
            className="rounded-circle"
            style={{ objectFit: 'cover' }}
          />
          <span className="fw-bold">Vaghani Meet</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
