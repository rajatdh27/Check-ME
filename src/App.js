import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DataCard from "./components/DataCard/DataCard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState({});
  const dataHandler = (data) => {
    setData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
    setToggle((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/signin"
          element={
            <>
              {!toggle ? <DataCard data={data} /> : ""}
              <SignUp dataManipulation={dataHandler} />
            </>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
