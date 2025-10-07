import { useLoaderData, Link, useSubmit } from "react-router-dom";

import Modal from "../components/Modal";
import styles from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();
  const submit = useSubmit();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      submit(null, { method: "delete" });
    }
  };
  if (!post) {
    return (
      <Modal>
        <main className={styles.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={styles.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={styles.details}>
        <p className={styles.name}>{post.name}</p>
        <p className={styles.text}>{post.description}</p>
       
    <div className={styles.buttonGroup}>
      <Link to="/" className={styles.cancelButton}>
        Cancel
      </Link>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
      </main>
    </Modal>
  );
}

export default PostDetails;
