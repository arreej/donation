import Navbar from '../src/components/Navbar';
import Head from 'next/head';
import styles from '../src/styles/Cancel.module.css';
import Link from 'next/link';
import ImageCarousel from '../src/components/ImageCarousel';

export default function About() {
  const images = [
    // '/achievements.jpg',
    '/clothes.jpg',
    '/clothesd.jpg',
    '/clothes.jpg',
    '/food.jpg',
    '/medical.jpg',
    '/water.jpg',
    '/winter.jpg',
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Our Achievements</title>
        <meta name="description" content="Your donation was not completed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Donate for the right cause</h1>
        <p>You can be the reason behind someone's smile</p>
        <Link className={styles.h2} href="/donate">Back to Donations</Link>
        <div>
          <h1>Image Carousel Example</h1>
          <ImageCarousel images={images} />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}