import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";


function NavBar (props){


  return (<Navbar bg="light" expand="lg">
    <Link to="/"><Navbar.Brand href="/">{"All\u0113"}</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
        <Link className={props.isUserLoggedIn ? "hidden" : ""} to="/login"><Nav.Link href="/login">Login</Nav.Link></Link>
        <Link className={props.isUserLoggedIn ? "" : "hidden"} to="/logout"><Nav.Link href="/logout">Logout</Nav.Link></Link>
        <Link className={props.isUserLoggedIn ? "hidden" : ""} to="/register"><Nav.Link href="/register">Create Account</Nav.Link></Link>

      </Nav>

    </Navbar.Collapse>
  </Navbar>)

}

export default NavBar;
