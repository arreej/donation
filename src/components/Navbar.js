"use client";

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Sidebar from '../components/SideBar';
import { useMediaQuery } from '@react-hook/media-query';

const Navbar = () => {
  const isMobile = useMediaQuery('only screen and (max-width: 770px)');

  return isMobile ? (
    <Sidebar />
  ) : (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">HelpingHands</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="/donate" className={styles.donateButton}>Donate Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;