import React from "react";
import styles from "../styles/UserCard.module.css";
import Link from "next/link";
import Image from "next/image";

// Define constants for user data
const USERS = [
  {
    name: 'Victor Crest',
    age: 26,
    location: 'London',
    profilePic: '/image-victor.jpg',
  },
  {
    name: 'Jane Doe',
    age: 28,
    location: 'New York',
    profilePic: '/syd.jpg',
  },
  {
    name: 'John Smith',
    age: 30,
    location: 'Sydney',
    profilePic: '/amir.jpg',
  },
];

function UserCard() {
  return (
    <main className={styles.main}>
      {USERS.map((user, index) => (
        <div key={index} className={styles.mainCard}>
          <Image
            className={styles.profilePic}
            src={user.profilePic}
            width={95}
            height={95}
            alt="profile image"
          />
          <p>
            {user.name} <span>{user.age}</span>
          </p>
          <p>{user.location}</p>
        </div>
      ))}
    </main>
  );
}

export default UserCard;