import React from 'react';
//import './Navbar.scss';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  return (
    <Nav>
      <Logo>Jung's Studio</Logo>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? 'Close' : 'Menu'}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem><Link to='/'>Home Page</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/">Skills</Link></NavItem>
        <NavItem><Link to='/contact'>Contact</Link></NavItem>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><Link to='/'>Home Page</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/">Skills</Link></NavItem>
        <NavItem><Link to='/contact'>Contact</Link></NavItem>
      </MobileNav>
    </Nav>
  );
};
export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: fixed;
  z-index: 99;
  //padding: var(--spacing-3) 0; 
  background-color: rgb(255, 255, 255);
  top: 0;
  width:100%;
  max-width: 900px;
  padding: 15px;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    font-family: "Open Sans", sans-serif;
    color: #323232;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  font-family: "Proza Libre", sans-serif;
  font-size: 1.5rem;
  margin: 0;
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

