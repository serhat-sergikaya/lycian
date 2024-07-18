import { useState } from "react";
import "./App.css";
import apiClient from "./services/api-client";
import { IoIosMenu } from "react-icons/io";
import Nav from "./components/Nav";

function App() {
  const [flag, setFlag] = useState(true);
  const coins = apiClient.get("/coins/list").then((res) => res.data);
  return (
    <>
      <section className="block block--gradient">
        <div className="margin">
          <Nav />
          <div className="container grid grid--1x2 hero">
            <h1 className="hero__header">
              The <span className="span-gradient">authentic</span> way of
              trading crypto currencies
            </h1>
            <img
              className="hero__image"
              src="src\assets\blockchain.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
