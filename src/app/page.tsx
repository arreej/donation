import Image from "next/image";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
    <Head>
      <title>Helping Hands</title>
      <meta name="description" content="Welcome to my awesome landing page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Helping Hands</h1>
        <p className={styles.subtitle}>
          At Helping Hands, we believe in the power of collective action to create meaningful change. 
          Our mission is simple: to make a positive impact on the lives of those in need through compassion, dedication, and generosity.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1>What We Do</h1>
          <p>Through our tireless efforts and the support of our community, 
            we strive to address a wide range of challenges.
            Each donation we receive goes directly towards funding these initiatives and making a tangible difference in the lives of those we serve.
          </p>
        </section>

        <section className={styles.section}>
          <h1>Why Donate?</h1>
          <p>
            Your donation is more than just a financial contribution; 
            it's a beacon of hope for those in need. With your support, 
            we can continue to expand our reach, amplify our impact, 
            and create a brighter future for generations to come. 
            Every rupee donated brings us one step closer to our goal of building a more inclusive and compassionate world.
          </p>
        </section>

        <section className={styles.section}>
          <h1>Contact</h1>
          <p>
            Get in touch with us at 
            <a href="mailto:helpinghands@gmail.com"> 
            helpinghands@gmail.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Helping Hands. All rights reserved.</p>
      </footer>
    </div>
  </>
  );
}
