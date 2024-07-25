import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Nav = () => {
  const [flag, setFlag] = useState(true);
  return (
    <nav className="nav-container">
      <div
        className={
          "nav collapsible container" + (flag ? " collapsible--expanded" : "")
        }
      >
        <a href="#" className="nav__logo">
          <img
            className="logo__img"
            src="src\assets\lycian-temple.png"
            alt=""
          />
          <h1 className="logo__text">LYCIAN</h1>
        </a>
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
            <a href="#">Market</a>
          </li>
          <li className="nav__item">
            <a href="#">Team</a>
          </li>
          <li className="nav__item">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
