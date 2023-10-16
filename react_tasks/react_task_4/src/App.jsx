import { useState } from "react";
import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <>
      <div className="outerContainer">
        <h1 className="text-center">Dummy data</h1>
        <Table />
      </div>
    </>
  );
}

export default App;
