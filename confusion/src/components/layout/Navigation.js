import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="mx-5" href="#home">
        Tippin
      </Navbar.Brand>
      <Navbar.Toggle className="mx-5" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mx-5" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Signup</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
