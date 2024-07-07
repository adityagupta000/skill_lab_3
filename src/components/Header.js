import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => (
  <Navbar bg="black" variant="dark" expand="lg" className="header-navbr">
    <div className="container-fluid">
      <Navbar.Brand as={NavLink} to="/" className="brand-logo">book-library</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto option">
          <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/event" className="nav-link">Books</Nav.Link>
          <Nav.Link as={NavLink} to="/categories" className="nav-link">Categories</Nav.Link>
          <Nav.Link as={NavLink} to="/about-us" className="nav-link">About Us</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
        </Nav>
        <div className="shift">
          <NavLink to="/login" className="btn btn-outline-primary mx-2">Login</NavLink>
          <NavLink to="/register" className="btn btn-outline-info">Sign up</NavLink>
        </div>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;