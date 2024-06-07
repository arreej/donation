import React from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar'
import axios from 'axios'; // Import Axios
import styles from "../src/styles/Blog.module.css"
import BlogCard from '../src/components/BlogCard';



const BlogPage = ({ posts }) => {
    return (
      <div>
        <Head>
          <title>Blog</title>
          <meta name="description" content="Welcome to my blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar />
  
        <main>
          <h1>Blog</h1>
          <div className={styles.blogCardContainer}>
            {posts.map(post => (
              <BlogCard
                key={post.id}
                title={post.attributes.title}
                description={post.attributes.description}
                publishedAt={post.attributes.publishedAt}
                imageUrl={post.attributes.cover.data.attributes.url}
              />
            ))}
          </div>
        </main>
      </div>
    );
  };
  

export async function getStaticProps() {
    try {
      const res = await axios.get(`http://localhost:4200/api/articles?populate=*`);
      const posts = res.data.data; // Extract data array from response
      console.log(posts.data,"----")
      return {
        props: {
          posts,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          posts: [],
        },
      };
    }
  }
export default BlogPage;