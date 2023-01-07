import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
    setToggle((prevState) => {
      return !toggle;
    });
  };
  return (
    <div className={styles.navbar}>
      <h1>Check Me</h1>
      <div className={styles.items}>
        {/* <h2>Sign Up</h2>
        <h2>Login In</h2> */}
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faUserNinja}
            className={styles.icon}
            onClick={dropDownHandler}
          />
          {toggle ? (
            <div className={styles.dropdown} ref={refIcon}>
              <Link to="/signin" className={styles.link}>
                <p>Sign In</p>
              </Link>
              <Link to="/login" className={styles.link}>
                <p>Login</p>
              </Link>
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
