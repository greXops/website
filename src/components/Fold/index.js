import React from "react";
import styles from "./styles.module.css";

const Fold = (props) => {
  const title = props.title;
  const active = props.active;
  const handle = props.handle;
  const index = props.index;
  return (
    <div key={index} className={styles.fold}>
      <button
        className={`${styles.fold_trigger} ${active ? styles.open : ""}`}
        onClick={handle}
      >
        <span className={styles.circle} aria-hidden="true">
          <span className={`${styles.icon} ${styles.arrow}`}></span>
        </span>
        <span className={styles.button_text}>{title}</span>
      </button>
      <div className={`${styles.fold_content} ${active ? styles.open : ""}`}>
        {props.children}
      </div>
    </div>
  );
};
export default Fold;
