import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import dataServices from "../../services/dataServices";
import { auth } from "../../firebaseConfig";
import styles from "./SignUp.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
function SignUp(props) {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        props.userHandler(currentUser);
        navigate("/");
      }
    });
  }, []);
  const icons = {
    open: faEye,
    close: faEyeSlash,
  };
  const [toggle, setToggle] = useState({
    passwordToggle: false,
    confirmPasswordToggle: false,
  });
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const register = async () => {
    console.log("register");
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        userInput.email,
        userInput.password
      );
      console.log(user.user.uid);
      await dataServices.setData(user.user.uid, userInput);
    } catch (error) {
      console.log(error.message);
    }
  };
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
  const passwordIconHandler = () => {
    setToggle((prevState) => {
      return {
        ...prevState,
        passwordToggle: !toggle.passwordToggle,
      };
    });
  };
  const confirmPasswordIconHandler = () => {
    setToggle((prevState) => {
      return {
        ...prevState,
        confirmPasswordToggle: !toggle.confirmPasswordToggle,
      };
    });
  };
  const dataHandler = (data) => {
    props.dataManipulation(data);
    console.log(auth);
  };
  return (
    <Card
      name="Sign Up"
      data={userInput}
      dataHandler={dataHandler}
      userCreationHandler={register}
    >
      <div className={styles.inputs}>
        <div className={styles.inputContainer}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={userInput.name}
            onChange={nameHandler}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            onChange={emailHandler}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>User Name:</label>
          <input
            type="text"
            name="user"
            autoComplete="off"
            onChange={userNameHandler}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Password:</label>
          <input
            type={toggle.passwordToggle ? "text" : "password"}
            name="password"
            autoComplete="off"
            onChange={passwordHandler}
          />
          <FontAwesomeIcon
            icon={toggle.passwordToggle ? icons.close : icons.open}
            className={styles.icon}
            onClick={passwordIconHandler}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Confirm Password:</label>
          <input
            type={toggle.confirmPasswordToggle ? "text" : "password"}
            name="confirmPassword"
            autoComplete="off"
            onChange={confirmPasswordHandler}
          />
          <FontAwesomeIcon
            icon={toggle.confirmPasswordToggle ? icons.close : icons.open}
            className={styles.icon}
            onClick={confirmPasswordIconHandler}
          />
        </div>
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
