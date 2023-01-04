import React from "react";
import Button from "../Button/Button";
import styles from "./Container.module.css";
function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form className={styles.form}>
          <div className={styles.title}>
            <h2>Login</h2>
          </div>
          <div className={styles.inputs}>
            <label>Name:</label>
            <input type="text" name="name" autoComplete="off" />
            <label>Password:</label>
            <input type="text" name="password" autoComplete="off" />
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <Button />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Container;
