
// components/Header.js
import React from 'react';
import Link from 'next/link'; 
import styles from './Header.module.css'; 

const Header = () => {
  return (

    <header className={styles.header}>
      <h1 style={{ color: 'white' }}>edpide</h1>
      <nav>
        <ul className={styles.navList}>

          <li className={styles.navItem}>
            <Link href="/Templates">Templates</Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/packages">Packages</Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/register">Register</Link>
          </li>

          <li className={`${styles.navItem} ${styles.login}`}>
            <Link href="/">Login</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
