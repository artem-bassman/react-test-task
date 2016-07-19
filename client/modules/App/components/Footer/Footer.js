import React from 'react';
import { Link } from 'react-router';

import styles from './Footer.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
