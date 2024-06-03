import Image from "next/image";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Helping Hands</title>
      <meta name="description" content="Welcome to my awesome landing page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />

    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to My Landing Page</h1>
      <p className={styles.subtitle}>This is a great place to introduce your product or service.</p>
    </header>

    <main className={styles.main}>
      <section className={styles.section}>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>

      <section className={styles.section}>
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Awesome feature</li>
          <li>Feature 2: Another great feature</li>
          <li>Feature 3: Yet another feature</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Contact</h2>
        <p>Get in touch with us at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
      </section>
    </main>

    <footer className={styles.footer}>
      <p>&copy; 2024 My Landing Page. All rights reserved.</p>
    </footer>
  </div>
  );
}
