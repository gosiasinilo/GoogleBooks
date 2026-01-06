import { useEffect } from "react";
import styles from "./Modal.module.scss";

export default function Modal({ isOpen, close, children }) {
     if (!isOpen) return null;
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, close]);



  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.button} onClick={close}>
          X
        </button>
        <div className={styles.content}>{children}</div>
      </div>
      </div>
  );
}