import React from "react";
import styles from "./DataCard.module.css";
function DataCard(props) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        console.log("hkh");
      }}
    >
      <div className={styles.card}>
        <div className={styles.data}>
          <p>Name: {props.data.name}</p>
          <p>Email: {props.data.email}</p>
          <p>User Name: {props.data.userName}</p>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
