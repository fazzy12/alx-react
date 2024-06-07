
import React from 'react';
import logo from '../assets/hoberton_logo.jpg'
import './Header.css'


function Header() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt="Holberton Logo" />
      <h1>Welcome to the Dashboard</h1>
    </header>
  );
}

export default Header;
