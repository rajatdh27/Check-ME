import React, { useState } from "react";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
function SignUp() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const nameHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, name: e.target.value };
    });
  };
  const emailHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, email: e.target.value };
    });
  };
  const userNameHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, userName: e.target.value };
    });
  };
  const passwordHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, password: e.target.value };
    });
  };
  const confirmPasswordHandler = (e) => {
    setUserInput((prevInput) => {
      return { ...prevInput, confirmPassword: e.target.value };
    });
  };
  return (
    <Card name="Sign Up" data={userInput}>
      <div className={styles.inputs}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={userInput.name}
          onChange={nameHandler}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          onChange={emailHandler}
        />
        <label>User Name:</label>
        <input
          type="text"
          name="user"
          autoComplete="off"
          onChange={userNameHandler}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          onChange={passwordHandler}
        />
        <span>+</span>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          onChange={confirmPasswordHandler}
        />
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
