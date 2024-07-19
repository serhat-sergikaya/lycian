const TeamBlock = () => {
  return (
    <section className="block block--team">
      <h2 className="block__header">Meet Our Team</h2>
      <div className="grid grid--1x2 container block--team__grid">
        <article className="media">
          <img src="src\assets\member1.jpg" alt="" className="media__img" />
          <div className="media__content">
            <h3 className="media__header"> Jane Smith</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              aut.
            </p>
            <div className="media-button-container">
              <button className="btn btn--outline btn--outline--right media__button">
                More Info
              </button>
            </div>
          </div>
        </article>
        <article className="media">
          <img src="src\assets\member3.jpg" alt="" className="media__img" />
          <div className="media__content">
            <h3 className="media__header"> John Doe </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              aut.
            </p>
            <div className="media-button-container">
              <button className="btn btn--outline btn--outline--right media__button">
                More Info
              </button>
            </div>
          </div>
        </article>
        <article className="media">
          <img src="src\assets\member2.jpg" alt="" className="media__img" />
          <div className="media__content">
            <h3 className="media__header"> Mary Sue </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              aut.
            </p>
            <div className="media-button-container">
              <button className="btn btn--outline btn--outline--right media__button">
                More Info
              </button>
            </div>
          </div>
        </article>
        <article className="media">
          <img src="src\assets\member3.jpg" alt="" className="media__img" />
          <div className="media__content">
            <h3 className="media__header"> John Doe </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              aut.
            </p>
            <div className="media-button-container">
              <button className="btn btn--outline btn--outline--right media__button">
                More Info
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TeamBlock;
