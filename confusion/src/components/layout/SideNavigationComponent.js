import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideNavigationComponent.css";
import { logout } from "../authentication/AuthenticationService";

const SideNavigationComponent = (props) => {
  const onClickLogout = () => {
    logout();
    props.updateAuth();
  };
  return (
    <div className="side-navigation">
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
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={onClickLogout}>Sign out</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SideNavigationComponent;
