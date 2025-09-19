import React, { useState } from 'react';
import './../styles/NavigationMenu.css';
import month2 from "./../assets/images/month2.jpeg";
import accountlogo from "./../assets/images/account.png"
function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const date = new Date();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentYear = date.getFullYear();

  return (
    <aside className={`nav-menu ${menuOpen ? 'open' : ''}`}>
      <div className="header">
        {/* Hamburger on left */}
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Logo center */}
        <h1 className="logo">QUILLIO</h1>

        {/* Account Icon on right */}
        <div className="account-icon">
          <img 
            src={accountlogo}          
          >
          </img>
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
