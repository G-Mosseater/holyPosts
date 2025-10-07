import styles from "./Post.module.css";
import { Link } from "react-router-dom";
const Post = ({ id, name, description }) => {
  return (
    <>
   <div className={styles.postContainer}>
      <Link to={id} className={styles.link}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </Link>
    </div>
    </>
  );
};

export default Post;
