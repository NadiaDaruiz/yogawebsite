import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import sparkles from '../assets/sparkles.png';
import Sparkle from 'react-sparkle';


function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div className="nav-container sparkles" >
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2 nav-logo" />
        <NavbarBrand href="/" className="link-landing">
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
                <Link to="/yogaandwine"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Yoga and Wine
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
                <Link to="/practice"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Practice
                </Link>
              </NavLink>
            </NavItem>

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
                <Link to="/contact"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Contact
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <a rel="noopener noreferrer" href="https://yogaandwinewithlara.wordpress.com/" target="_blank"
                  onClick={toggleNavbar}
                  style={{ color: "black" }}>Blog
                </a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Sparkle color='random' flickerSpeed={'slow'} flicker={true} count={30} fadeOutSpeed={10} overflowPx={0} />
    </div>
  )
}

export default NavBar;  
