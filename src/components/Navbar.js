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
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="#features">Features</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <Link href="/donate">Donate Now</Link>
        </li>
        <li>
          <Link href="/blog">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;