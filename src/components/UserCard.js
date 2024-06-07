import React from "react";
import styles from "../styles/UserCard.module.css";
import Link from "next/link";
import Image from "next/image";

// Define constants for user data
const USER = {
    name: 'Victor Crest',
    age: 26,
    location: 'London',
    profilePic: '/image-victor.jpg',
  };
  
  const STATS = {
    followers: '80K',
    likes: '803K',
    photos: '1.4K',
  };

function UserCard() {
    return (
      <main className={styles.main}>
        <div className={styles.mainCard}>
          <Image
            className={styles.profilePic}
            src={USER.profilePic}
            width={95}
            height={95}
            alt="profile image"
          />
          <p>
            {USER.name} <span>{USER.age}</span>
          </p>
          <p>{USER.location}</p>
          <div className={styles.hr} />
          <div className={styles.dataContainer}>
            <div>
              <p>{STATS.followers}</p>
              <p>Followers</p>
            </div>
            <div>
              <p>{STATS.likes}</p>
              <p>Likes</p>
            </div>
            <div>
              <p>{STATS.photos}</p>
              <p>Photos</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  export default UserCard;