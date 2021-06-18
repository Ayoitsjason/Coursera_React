import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideNavigationComponent.css";

const SideNavigationComponent = () => {
  return (
    <div className="side-navigation bg-light">
      <Navbar className="flex-column" expand="lg">
        <Navbar.Brand className="mx-5" as={Link} to="/">
          Tippin
        </Navbar.Brand>
        <Navbar.Toggle className="mx-5" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mx-5 flex-column" activeKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#signout">Sign out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SideNavigationComponent;
