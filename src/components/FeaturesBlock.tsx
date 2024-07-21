import { FaArrowRight } from "react-icons/fa";
const FeaturesBlock = () => {
  return (
    <section className="block block--gradient-reverse">
      <div className="container grid grid--1x2">
        <img className="features__image" src="src\assets\invest.png" alt="" />
        <div className="features__content">
          <h2 className="features__header">
            We invent new ways for you to invest
          </h2>
          <div className="features__desc">
            <h3 className="features__sub">
              Choose from 10+ methods to secure your savings
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum, ex voluptate culpa ut corrupti cum placeat dolores
              ducimus cumque quasi?
            </p>
          </div>
          <ul className="list list--tick">
            <li className="list__item">Staking</li>
            <li className="list__item">Arbitrage</li>
            <li className="list__item">Diversification</li>
            <li className="list__item">Automated crypto trading</li>
            <li className="list__item">Cryptocurrency ETF</li>
          </ul>
        </div>
      </div>
      <div className="container--third  grid grid--1x3 investments-grid">
        <a href="#">
          <article className="investment">
            <img
              className="investment__icon"
              src="src\assets\staking.png"
              alt=""
            />
            <h3 className="investment__heading">staking</h3>
            <FaArrowRight size={40} className="icon--arrow" />
          </article>
        </a>
        <a href="#">
          <article className="investment">
            <img
              className="investment__icon"
              src="src\assets\automation.png"
              alt=""
            />
            <h3 className="investment__heading">automate</h3>
            <FaArrowRight size={40} className="icon--arrow" />
          </article>
        </a>
        <a href="#">
          <article className="investment">
            <img
              className="investment__icon"
              src="src\assets\wallet.png"
              alt=""
            />
            <h3 className="investment__heading">WALLET</h3>
            <FaArrowRight size={40} className="icon--arrow" />
          </article>
        </a>
      </div>
    </section>
  );
};

export default FeaturesBlock;
