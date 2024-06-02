import styles from '../styles/BlogCard.module.css';

const BlogCard = ({ title, description, publishedAt, imageUrl }) => {
  // Format the published date
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const fullImageUrl = `http://localhost:1337${imageUrl}`;

  return (
    <div className={styles.card}>
      <img src={fullImageUrl} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.publishedDate}>Published on {formattedDate}</p>
    </div>
  );
};

export default BlogCard;