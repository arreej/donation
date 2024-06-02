import Navbar from '../src/components/Navbar';
import Head from 'next/head';
import styles from '../src/styles/Success.module.css';
import Link from 'next/link';

export default function Success() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Donation Successful</title>
        <meta name="description" content="Thank you for your donation!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Thank You for Your Donation!</h1>
        <p>Your support helps us continue our work and make a difference.</p>
        <Link href="/" className={styles.h2}>Back to Home</Link>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}