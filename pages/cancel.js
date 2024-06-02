import Navbar from '../src/components/Navbar';
import Head from 'next/head';
import styles from '../src/styles/Cancel.module.css';
import Link from 'next/link';

export default function Cancel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Donation Cancelled</title>
        <meta name="description" content="Your donation was not completed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Donation Cancelled</h1>
        <p>Your donation was not completed. Please try again.</p>
        <Link className={styles.h2} href="/donate">Back to Donations</Link>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}