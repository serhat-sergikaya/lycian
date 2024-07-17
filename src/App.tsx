import { useState } from "react";
import "./App.css";
import apiClient from "./services/api-client";
import { IoIosMenu } from "react-icons/io";

function App() {
  const [flag, setFlag] = useState(true);
  const coins = apiClient.get("/coins/list").then((res) => res.data);
  return (
    <>
      <nav
        className={"nav collapsible" + (flag ? " collapsible--expanded" : "")}
      >
        <div className="nav__logo">
          <img
            className="logo__img"
            src="src\assets\lycian-temple.png"
            alt=""
          />
          <h1 className="logo__text">LYCIAN</h1>
        </div>
        <IoIosMenu
          className="nav__burger"
          onClick={() => setFlag(!flag)}
          size={40}
        />
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <a href="#">Home</a>
          </li>
          <li className="nav__item">
            <a href="#">Menu</a>
          </li>
          <li className="nav__item">
            <a href="#">Menu</a>
          </li>
          <li className="nav__item">
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
