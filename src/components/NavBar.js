import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import Sparkle from 'react-sparkle';


function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div className="nav-container" >
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 nav-logo" />
        <NavbarBrand href="/">
          <h1 className="brand-headline" style={{ position: "relative" }}>
            <Sparkle color='random' fadeOutSpeed={10} count={60} flickerSpeed={'slowest'} flicker={false} />
            <span className="text-brand">Lara Daruiz</span>
            <span className="text-brand star">&#10023;</span>
            <span className="text-brand hide">Yoga & Wine</span>
          </h1>
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar >
            <NavItem>
              <NavLink>
                <Link to="/about"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>About
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/yogaintegral"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Yoga Integral
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/yogaandwine"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Yoga and Wine
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/practice"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Practice
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="/contact"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Contact
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <Link to="#"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Blog
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar;  
