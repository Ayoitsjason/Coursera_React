import React from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideNavigationComponent.css";
import { logout } from "../authentication/AuthenticationService";

const SideNavigationComponent = (props) => {
  const onClickLogout = () => {
    logout();
    props.updateAuth();
  };
  return (
    <Col xs={2} className="p-0">
      <Navbar
        className="justify-content-start side-navigation flex-column"
        expand="lg"
      >
        <Navbar.Brand className="m-0" as={Link} to="/">
          Tippin
        </Navbar.Brand>
        <Navbar.Toggle
          className="justify-content-center"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column align-self-start" activeKey="/home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={onClickLogout}>Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default SideNavigationComponent;
