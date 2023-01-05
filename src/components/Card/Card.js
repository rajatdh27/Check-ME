import React from "react";
import styles from "./Card.module.css";
function Card(props) {
  return (
    <div className={styles.card}>
      <form className={styles.form}>
        <div className={styles.title}>
          <h1>{props.name}</h1>
        </div>
        {props.children}
      </form>
    </div>
  );
}

export default Card;
