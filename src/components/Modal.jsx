import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("/");
  }

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler}>
        <dialog
          open
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </dialog>
        <p></p>
      </div>
    </>
  );
};

export default Modal;
