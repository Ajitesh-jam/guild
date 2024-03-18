import React from "react";
import Navbar from "./src/Navbar";
import Section from "./src/components/Section";
import Alert from "./src/components/Alert";

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
