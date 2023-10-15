import { useState } from "react";
import "./App.css";
import Heading from "./components/heading/heading";
import TextArea from "./components/textarea/TextArea";

function App() {
  return (
    <>
      <div className="outer_container">
        <Heading />
        <TextArea />
      </div>
    </>
  );
}

export default App;
