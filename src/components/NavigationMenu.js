import React from 'react';
import './../styles/NavigationMenu.css';
import month2 from "./../assets/images/month2.jpeg";

function NavigationMenu() {
  return (
    <aside className="nav-menu">
      <div className="header">
        <h1 className="logo">QUILLIO</h1>
        <div className="user-icon"></div>
      </div>

      <nav>
        <ul>
          <li><h2>HOME</h2></li>
          <li><span className="menu-link">BLOGS</span></li>
          <li><span className="menu-link podcast">PODCAST</span></li>
          <li><span className="menu-link">BOOK SHELF</span></li>
          <li><span className="menu-link">ARCHIVE</span></li>
          <li><span className="menu-link">ABOUT US</span></li>
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
  )
}

export default NavigationMenu;