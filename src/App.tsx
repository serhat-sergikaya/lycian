import { useState } from "react";
import "./App.css";
import apiClient from "./services/api-client";
import { IoIosMenu } from "react-icons/io";
import Nav from "./components/Nav";
import HeroBlock from "./components/HeroBlock";

function App() {
  const [flag, setFlag] = useState(true);
  const coins = apiClient.get("/coins/list").then((res) => res.data);
  return (
    <>
      <Nav />
      <HeroBlock />
    </>
  );
}

export default App;
