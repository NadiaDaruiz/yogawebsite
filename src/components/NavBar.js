import React, { useState } from 'react';
import '../styles/NavBar.css';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div className="nav-container">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <h1 className="brand-headline">
            <span className="text-logo">lara daruiz</span>
            <span className="text-logo hide">&#10023;</span>
            <span className="text-logo">yoga & wine</span>
          </h1>
        </NavbarBrand>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/yogaintegral">Yoga Integral</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/yogaandwine">Yoga and Wine</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/practice">Practice</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;  
