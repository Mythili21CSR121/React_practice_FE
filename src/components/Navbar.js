import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Custom styles
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Container>
      <Navbar.Brand as={Link} to="#" className="navbar-brand">MS Restaurant</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          {/* <NavDropdown title="Menu" id="basic-nav-dropdown" className="dropdown-toggle dropdown-menu-dark">
            <NavDropdown.Item as={Link} to="/appetizers" className="dropdown-item">Appetizers</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/soups-salads" className="dropdown-item">Soups & Salads</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/desserts" className="dropdown-item">Desserts</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pizzas" className="dropdown-item">Pizzas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/beverages" className="dropdown-item">Beverages</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link as={Link} to="/menu" className="nav-link">Menu</Nav.Link>
          <Nav.Link as={Link} to="#" className="nav-link">About</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
          <Nav.Link as={Link} to="/todo" className="nav-link">Todo</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/login" className="nav-link"><i className="glyphicon glyphicon-log-in"></i> Login</Nav.Link>
          <Nav.Link as={Link} to="/signup" className="nav-link"><i className="glyphicon glyphicon-log-in"></i> signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
