const BlogBlock = () => {
  return (
    <section className="block block--purple">
      <h2 className="block--blog__header">Blog and News</h2>
      <div className="container grid grid--1x3">
        <article className="card">
          <img className="card__image" src="src\assets\blog1.png" alt="" />
          <div className="card__content">
            <p className="card__date">20 July 2024</p>
            <h3 className="card__header">Launch your own crypto currency</h3>
            <p className="text_blog">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio minus exercitationem quia dolores quas deserunt
              quaerat error vero placeat alias magnam asperiores ex ipsa, in
              optio voluptatibus minima maxime!
            </p>
            <button className="btn btn--outline--blue btn--outline--left">
              Read more
            </button>
          </div>
        </article>
        <article className="card">
          <img className="card__image" src="src\assets\blog2.png" alt="" />
          <div className="card__content">
            <p className="card__date">18 July 2024</p>
            <h3 className="card__header">
              Did the global IT outage affect crypto?
            </h3>
            <p className="text_blog">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio minus exercitationem quia dolores quas deserunt
              quaerat error vero placeat alias magnam asperiores ex ipsa, in
              optio voluptatibus minima maxime!
            </p>
            <button className="btn btn--outline--blue btn--outline--left">
              Read more
            </button>
          </div>
        </article>
        <article className="card">
          <img className="card__image" src="src\assets\blog3.png" alt="" />
          <div className="card__content">
            <p className="card__date">15 July 2024</p>
            <h3 className="card__header">
              Ethereum, Solana touch key levels as Bitcoin spikes
            </h3>
            <p className="text_blog">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio minus exercitationem quia dolores quas deserunt
              quaerat error vero placeat alias magnam asperiores ex ipsa, in
              optio voluptatibus minima maxime!
            </p>
            <button className="btn btn--outline--blue btn--outline--left">
              Read more
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogBlock;
