import React, { useState } from "react";

const Footer = () => {
  const [sec1, setSec1] = useState(true);
  const [sec2, setSec2] = useState(false);
  const [sec3, setSec3] = useState(false);
  return (
    <footer className="block footer-block footer ">
      <div className="container grid footer-sections">
        <section
          onClick={() => setSec1(!sec1)}
          className={
            "collapsible footer__section" +
            (sec1 ? " collapsible--expanded" : "")
          }
        >
          <header className="collapsible__header footer__section-header">
            <h2 className="collapsible__heading">Explore</h2>
            <img
              className="icon collapsible__chevron"
              src="src\assets\chevron.png"
              alt=""
            />
          </header>
          <div className="collapsible__content">
            <ul className="list footer__list">
              <li>
                <a className="footer__list-link" href="#">
                  My Account
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section
          onClick={() => setSec2(!sec2)}
          className={
            "collapsible footer__section" +
            (sec2 ? " collapsible--expanded" : "")
          }
        >
          <header className="collapsible__header footer__section-header">
            <h2 className="collapsible__heading">Company</h2>
            <img
              className="icon collapsible__chevron"
              src="src\assets\chevron.png"
              alt=""
            />
          </header>
          <div className="collapsible__content">
            <ul className="list footer__list">
              <li>
                <a className="footer__list-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section
          onClick={() => setSec3(!sec3)}
          className={
            "collapsible footer__section" +
            (sec3 ? " collapsible--expanded" : "")
          }
        >
          <header className="collapsible__header footer__section-header">
            <h2 className="collapsible__heading">Marketplace</h2>
            <img
              className="icon collapsible__chevron"
              src="src\assets\chevron.png"
              alt=""
            />
          </header>
          <div className="collapsible__content">
            <ul className="list footer__list">
              <li>
                <a className="footer__list-link" href="#">
                  Automation
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Store
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Staking
                </a>
              </li>
              <li>
                <a className="footer__list-link" href="#">
                  Trade
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="footer__logo">
        <img className="logo__img" src="src\assets\lycian-temple.png" alt="" />
        <h1 className="logo__text">LYCIAN</h1>
        <p className="footer__copyright">Copyright © 2024 - Serhat Sergikaya</p>
      </div>
    </footer>
  );
};

export default Footer;
