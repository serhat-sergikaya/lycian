const HeroBlock = () => {
  return (
    <section className="block block--gradient">
      <div className="container grid grid--1x2 hero">
        <h1 className="hero__header">
          The <span className="span-gradient">authentic</span> way of trading
          crypto currencies
        </h1>
        <img className="hero__image" src="src\assets\blockchain.png" alt="" />
      </div>
    </section>
  );
};

export default HeroBlock;
