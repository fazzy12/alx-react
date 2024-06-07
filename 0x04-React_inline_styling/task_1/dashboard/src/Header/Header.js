import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/hoberton_logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  title: {
    // color: '#e0354b',
    color: 'green',
    marginLeft: '20px',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="Holberton Logo" />
      <h1 className={css(styles.title)}>Welcome to the Dashboard</h1>
    </header>
  );
}

export default Header;