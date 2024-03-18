import React from "react";
import Navbar from "../../react/my-app/Navbar";
import Section from "./components/Section";
import Alert from "./components/Alert";

function MainPage() {
  return (
    <>
      <Navbar/>
      <Alert/>
      <Section/>
    </>
  );
}

export default MainPage;
