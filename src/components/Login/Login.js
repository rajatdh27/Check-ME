import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./Login.module.css";
function Login() {
  return (
    <Card name="Login">
      <div className={styles.inputs}>
        <label>Name:</label>
        <input type="text" name="name" autoComplete="off" />
        <label>Password:</label>
        <input type="text" name="password" autoComplete="off" />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <Button buttonName="Login"/>
        </div>
        <p>
          Not a member? <span>Sign Up</span>
        </p>
        <span>Forgot Password?</span>
      </div>
    </Card>
  );
}

export default Login;
