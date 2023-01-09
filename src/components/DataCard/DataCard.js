import React from "react";
import styles from "./DataCard.module.css";
function DataCard(props) {
  console.log(props.data.uid, "dataacdr");
  return (
    <div
      className={styles.container}
      onClick={() => {
        console.log("hkh");
      }}
    >
      <div className={styles.card}>
        <div className={styles.data}>
          <p>Name: {props.data.uid ? props.data.uid : ""}</p>
          {/* <p>Email: {props ? props.data.email : ""}</p>
          <p>User Name: {props? props.data.userName : ""}</p> */}
        </div>
      </div>
    </div>
  );
}

export default DataCard;
