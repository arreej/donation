import Navbar from '../src/components/Navbar';
import Head from 'next/head';
import styles from '../src/styles/About.module.css';
import Link from 'next/link';
import ImageCarousel from '../src/components/ImageCarousel';
import UserCard from '../src/components/UserCard';

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
    <>
      <Head>
        <title>Our Achievements</title>
        <meta name="description" content="Learn about our achievements and meet our team." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <main className={styles.main}>
          <h2>
            We are providing free medical and surgical care to deserving patients in Pakistan.
          </h2>
          <div>
            <ImageCarousel images={images} />
          </div>
          <div>
            <h1 >
              Meet Our Team
            </h1>
            <UserCard />
          </div>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 My Organization. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}