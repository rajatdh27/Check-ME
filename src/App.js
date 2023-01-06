import React, { useState } from "react";
import Container from "./components/Container/Container";
import DataCard from "./components/DataCard/DataCard";
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
    <Container>
      {!toggle ? <DataCard data={data} /> : ""}
      <SignUp dataManipulation={dataHandler} />
    </Container>
  );
}

export default App;
