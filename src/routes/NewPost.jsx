import styles from "./NewPost.module.css";
import Modal from "../components/Modal";

import { Link, Form, useNavigation } from "react-router-dom";

const NewPost = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <Modal>
        <Form method="post" className={styles.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} name="description" />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            
            <input type="text" id="name" required name="name" />
          </p>
          <p className={styles.actions}>
            <button disabled={isSubmitting}>
              {isSubmitting ? " Submitting" : "Submit"}
            </button>
            <Link to="/">Cancel</Link>
          </p>
        </Form>
      </Modal>
    </>
  );
};

export default NewPost;
