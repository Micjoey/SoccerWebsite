import React from "react";
import "./Header.scss";
import { Navbar, Nav } from "react-bootstrap";
import ContactLink from "./Contact";

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Navbar.Brand href="/">Our Soccer Team</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/schedule">Schedule</Nav.Link>
          <ContactLink />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
