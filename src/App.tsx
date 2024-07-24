import { useEffect, useState } from "react";
import "./App.css";
import apiClient from "./services/api-client";
import Nav from "./components/Nav";
import HeroBlock from "./components/HeroBlock";
import TeamBlock from "./components/TeamBlock";
import BlogBlock from "./components/BlogBlock";
import FeaturesBlock from "./components/FeaturesBlock";
import Footer from "./components/Footer";
import useMarket from "./hooks/useMarket";
import Change from "./components/Change";
import Market from "./components/Market";

function App() {
  return (
    <>
      <Nav />
      <HeroBlock />
      <FeaturesBlock />
      <Market />
      <TeamBlock />
      <BlogBlock />
      <Footer />
    </>
  );
}

export default App;
