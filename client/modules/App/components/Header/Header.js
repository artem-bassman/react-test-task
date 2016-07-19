import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Header.css';

import BurgerMenu from 'react-burger-menu';
const Menu = BurgerMenu.slide;

export function Header(props) {
  return (
    <div className={styles.header}>
      <div style={{ float: 'right', width: '35px', height: '35px', position: 'relative', border: '1px solid lightgray', top: '7px', margin: '0 7px' }}>
        <Menu right>
          <Link style={{ display: 'block', textAlign: 'center', padding: '10px' }} id="home" className={styles.menuItem} to="/">Home</Link>
          <Link style={{ display: 'block', textAlign: 'center', padding: '10px' }} id="about" className={styles.menuItem} to="/about">About</Link>
          <Link style={{ display: 'block', textAlign: 'center', padding: '10px' }} id="contact" className={styles.menuItem} to="/contact">Contact</Link>
        </Menu>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
