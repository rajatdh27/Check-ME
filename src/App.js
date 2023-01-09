import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DataCard from "./components/DataCard/DataCard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [changeIcon, setChangeIcon] = useState(false);
  const [uid, setUid] = useState(null);
  const [data, setData] = useState({});
  const userHandler = (data) => {
    setData(data);
    setUid(data.uid);
    setChangeIcon(true);
    console.log(data.uid, "uid");
  };
  const dataHandler = (data) => {
    console.log("Data");
    setData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };
  const userSignOutHandler = () => {
    setData({});
    setUid(null);
    setChangeIcon(false);
  };

  return (
    <>
      <Navbar icon={changeIcon} signOut={userSignOutHandler} />
      <Routes>
        <Route exact path="/" element={<DataCard data={data} />} />
        <Route
          exact
          path="/signin"
          element={
            <>
              <SignUp
                dataManipulation={dataHandler}
                userHandler={userHandler}
              />
            </>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <>
              <Login userHandler={userHandler}/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
