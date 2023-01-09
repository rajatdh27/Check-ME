import React, { useState, useRef, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const refIcon = useRef(null);

  const handleClickOutside = (e) => {
    if (refIcon.current && !refIcon.current.contains(e.target)) {
      setToggle(false);
    }
  };
  const [toggle, setToggle] = useState(false);
  const dropDownHandler = () => {
    setToggle(!toggle);
  };
  const signOutHandler = () => {
    setToggle(!toggle);
    signOut(auth)
      .then(() => {
        props.signOut();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("started");
  };
  return (
    <div className={styles.navbar}>
      <h1>Check Me</h1>
      <div className={styles.items}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faUserNinja}
            className={styles.icon}
            onClick={dropDownHandler}
            ref={refIcon}
          />
          {toggle ? (
            <div
              className={styles.dropdown}
              ref={refIcon}
              onClick={() => setToggle(!toggle)}
            >
              {!props.icon ? (
                <>
                  <Link to="/signin" className={styles.link}>
                    <p>Sign In</p>
                  </Link>
                  <Link to="/login" className={styles.link}>
                    <p>Login</p>
                  </Link>
                </>
              ) : (
                <div className={styles.link} onClick={signOutHandler}>
                  <p>Sign Out</p>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
