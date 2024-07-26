const HeroBlock = () => {
  return (
    <section className="block block--gradient">
      <div className="container grid grid--1x2 hero">
        <div data-aos="fade-right" className="hero__heading">
          <h1 className="hero__header">
            The <span className="span-gradient">authentic</span> way of trading
            crypto currencies
          </h1>
          <div className="hero__link">
            <a href="" className="link--arrow">
              get started
            </a>
          </div>
        </div>
        <img
          data-aos="fade-left"
          className="hero__image"
          src="/static/Images/blockchain.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroBlock;
