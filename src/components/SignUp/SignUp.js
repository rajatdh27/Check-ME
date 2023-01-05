import React from "react";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
function SignUp() {
  return (
    <Card name="Sign Up">
      <div className={styles.inputs}>
        <label>Name:</label>
        <input type="text" name="name" autoComplete="off" />
        <label>Email:</label>
        <input type="text" name="password" autoComplete="off" />
        <label>User Name:</label>
        <input type="text" name="password" autoComplete="off" />
        <label>Password:</label>
        <input type="text" name="password" autoComplete="off" />
        <label>Confirm Password:</label>
        <input type="text" name="password" autoComplete="off" />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <Button buttonName="Sign Up" />
        </div>
      </div>
    </Card>
  );
}

export default SignUp;
