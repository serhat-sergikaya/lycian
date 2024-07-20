import { useState } from "react";
import "./App.css";
import apiClient from "./services/api-client";
import { IoIosMenu } from "react-icons/io";
import Nav from "./components/Nav";
import HeroBlock from "./components/HeroBlock";
import TeamBlock from "./components/TeamBlock";
import { FaFacebookF } from "react-icons/fa";
import BlogBlock from "./components/BlogBlock";

function App() {
  const [flag, setFlag] = useState(true);
  const coins = apiClient.get("/coins/list").then((res) => res.data);
  return (
    <>
      <Nav />
      <HeroBlock />
      <TeamBlock />
      <BlogBlock />
    </>
  );
}

export default App;
