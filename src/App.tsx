import { useState } from "react";
import "./App.css";
import apiClient from "./services/api-client";
import Collapsible from "./components/Collapsible";

function App() {
  const coins = apiClient.get("/coins/list").then((res) => res.data);
  return (
    <>
      <img src="src\assets\lycian-temple.png" alt="" />
      <h1 className="logo__text">LYCIAN</h1>
    </>
  );
}

export default App;
