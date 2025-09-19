import React, { useState } from 'react';
import './../styles/NavigationMenu.css';
import month2 from "./../assets/images/month2.jpeg";

function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className={`nav-menu ${menuOpen ? 'open' : ''}`}>
      <div className="header">
        <h1 className="logo">QUILLIO</h1>

        {/* Hamburger only visible on mobile */}
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>HOME</li>
          <li>BLOGS</li>
          <li>PODCAST</li>
          <li>BOOK SHELF</li>
          <li>ARCHIVE</li>
          <li>ABOUT US</li>
        </ul>
      </nav>

      <div className="home-image-container">
        <img 
          src={month2}
          alt="Home Book" 
          className="home-image"
        />
        <div className="image-date">June 2022</div>
      </div>
    </aside>
  );
}

export default NavigationMenu;
