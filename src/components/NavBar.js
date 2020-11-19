import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

import '../styles/NavBar.css';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div className="nav-container">
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 nav-logo" />
        <NavbarBrand href="/">
          <h1 className="brand-headline">
            <span className="text-brand">lara daruiz</span>
            <span className="text-brand star">&#10023; </span>
            <span className="text-brand">yoga & wine</span>
          </h1>
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar >
            <NavItem>
              <NavLink>
                <Link to="/about" style={{ color: "black" }}>About</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/yogaintegral" style={{ color: "black" }}>Yoga Integral</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/yogaandwine" style={{ color: "black" }}>Yoga and Wine</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/practice" style={{ color: "black" }}>Practice</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/contact" style={{ color: "black", }}>Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;  
