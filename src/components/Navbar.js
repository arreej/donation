import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
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
        {/* <li className={styles.dropdown}>
          <Link href="#features">Features</Link>
          <ul className={styles.dropdownContent}>
            <li>
              <Link href="/feature1">Feature 1</Link>
            </li>
            <li>
              <Link href="/feature2">Feature 2</Link>
            </li>
          </ul>
        </li> */}
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