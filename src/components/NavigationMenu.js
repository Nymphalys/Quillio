import React, { useState } from 'react';
import './../styles/NavigationMenu.css';
import month2 from "./../assets/images/month2.jpeg";

function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Get current month and year
  const date = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonth = monthNames[date.getMonth()];
  const currentYear = date.getFullYear();

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
        <div className="image-date">{currentMonth} {currentYear}</div>
      </div>
    </aside>
  );
}

export default NavigationMenu;
