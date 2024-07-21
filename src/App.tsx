import { useState } from "react";
import "./App.css";
import apiClient from "./services/api-client";
import Nav from "./components/Nav";
import HeroBlock from "./components/HeroBlock";
import TeamBlock from "./components/TeamBlock";
import BlogBlock from "./components/BlogBlock";
import FeaturesBlock from "./components/FeaturesBlock";
import Footer from "./components/Footer";

function App() {
  const [flag, setFlag] = useState(true);
  const coins = apiClient.get("/coins/list").then((res) => res.data);
  return (
    <>
      <Nav />
      <HeroBlock />
      <FeaturesBlock />
      <TeamBlock />
      <BlogBlock />
      <Footer />
    </>
  );
}

export default App;
