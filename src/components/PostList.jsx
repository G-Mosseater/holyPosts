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
      <h2 style={{ textAlign: "center", color: "white" }}>
        Holy Posts is an app to share and explore posts. Built with React, React
        Router (loaders & actions), Supabase, CSS Modules, JavaScript, and Vite.
        The code can be found{" "}
        <a
          href="https://github.com/G-Mosseater/holyPosts/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "lightblue" }}
        >
          here
        </a>
        .
      </h2>
    </>
  );
};

export default PostList;
