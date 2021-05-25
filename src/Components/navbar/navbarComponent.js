import React from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./navbarComponent.css";

export default function NavbarComponent() {
  return (
    <>
      <Navbar className="bg-color" variant="dark">
        <Navbar.Brand href="#home">Lorem Ipsum</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>

        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
