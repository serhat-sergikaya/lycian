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
        <picture data-aos="fade-right">
          <source
            type="image/webp"
            srcSet="static\Images\blockchain.webp 1x, static\Images\blockchain@2x.webp"
          />
          <source
            type="image/png"
            srcSet="static\Images\blockchain.png 1x, static\Images\blockchain@2x.png"
          />
          <img
            data-aos="fade-left"
            className="hero__image"
            src="/static/Images/blockchain@2x.png"
            alt=""
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroBlock;
