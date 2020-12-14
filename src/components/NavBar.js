import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import sparkles from '../assets/sparkles.png';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div className="nav-container" >
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 nav-logo" />
        <NavbarBrand href="/">
          <h1 className="brand-headline">

            <span className="text-brand">Lara Daruiz</span>
            <img src={sparkles} alt="three stars" className="star" />
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
                <Link to="https://yogaandwinewithlara.wordpress.com/"
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
