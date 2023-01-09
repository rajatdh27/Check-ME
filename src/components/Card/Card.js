import React, { useState } from "react";
import styles from "./Card.module.css";
function Card(props) {
  const [errorState, setErrorState] = useState({
    invalid: false,
    message: "",
  });
  const submitHandlerSignIn = (e) => {
    e.preventDefault();
    if (
      props.data.name.trim().length === 0 ||
      props.data.email.trim().length === 0 ||
      props.data.userName.trim().length === 0 ||
      props.data.password.trim().length === 0 ||
      props.data.confirmPassword.trim().length === 0
    ) {
      setErrorState((prevState) => {
        return {
          ...prevState,
          invalid: true,
          message: "Found empty field",
        };
      });
    } else if (props.data.password !== props.data.confirmPassword) {
      setErrorState((prevState) => {
        return {
          ...prevState,
          invalid: true,
          message: "Please recheck password",
        };
      });
    } else {
      props.userCreationHandler();
      setErrorState((prevState) => {
        return {
          ...prevState,
          invalid: false,
          message: "",
        };
      });
    }
  };
  const submitHandlerLogin = (e) => {
    e.preventDefault();
    props.login();
    console.log(props.data);
  };
  return (
    <>
      {errorState.invalid ? (
        <div className={styles.invalid}>
          <h2>{errorState.message}</h2>
        </div>
      ) : (
        ""
      )}
      <div className={styles.card}>
        <form
          className={styles.form}
          onSubmit={
            props.name === "Login" ? submitHandlerLogin : submitHandlerSignIn
          }
        >
          <div className={styles.title}>
            <h1>{props.name}</h1>
          </div>
          {props.children}
        </form>
      </div>
    </>
  );
}

export default Card;
