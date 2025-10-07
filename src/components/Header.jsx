import { MdPostAdd } from "react-icons/md";
import { FaCross } from "react-icons/fa";

import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <FaCross />
        Holy posts
      </h1>
      <p>
        <Link to="/create-post" className={styles.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default Header;
