import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import './App.css';

function Barrrr() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <div className="n_1">
            <img src="/img/logo/logo.png" alt="bassant" />
          </div>
          <div className="n_2">
            <HashLink to="/#Home">Home</HashLink>
            <HashLink to="/#About">About</HashLink>
            <HashLink to="/#Product">
              <NavDropdown title="Product" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Product</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </HashLink>
            <HashLink to="/#Privacy">Privacy</HashLink>
          </div>
        </Container>
      </Navbar>
      {/* end navbar */}
    </>
  );
}

export default Barrrr;