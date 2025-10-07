import Post from "./Post";
import styles from "./PostList.module.css";

import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((p) => (
            <Post
              key={p.id}
              name={p.name}
              description={p.description}
              id={p.id}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts available</h2>
        </div>
      )}
    </>
  );
};

export default PostList;
