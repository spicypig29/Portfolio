import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='Navbar-Container'>
      {/* Header Section */}
      <nav>
        <h2 id="logo"><a href="/">Jung</a></h2>
        <ul className="navigation-items">
          <li className="navigation-item"><Link to='/'>Home Page</Link></li>
          <li className="navigation-item"><Link to="/projects">Projects</Link></li>
          <li className="navigation-item"><Link to="/">Skills</Link></li>
          <li className="navigation-item"><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;