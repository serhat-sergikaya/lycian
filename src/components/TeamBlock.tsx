import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamBlock = () => {
  return (
    <section className="block block--gradient-reverse-again">
      <div data-aos="fade-down" className="block__topic">
        <h2 className="block__header">Meet Our Team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cum,
          saepe consequatur, voluptatum quae cupiditate soluta, alias nemo
          consequuntur ab magnam molestias sed assumenda doloribus natus
          praesentium explicabo reiciendis tempore.
        </p>
      </div>
      <div className="grid grid--1x2 container block--team__grid">
        <article data-aos="fade-right" className="media">
          <div className="media__image-container">
            <img
              src="static\Images\member1.jpg"
              alt=""
              className="media__img"
            />
            <div className="media__icons-container ">
              <a href="#" className="link--social">
                <FaFacebookF className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaLinkedin className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaTwitter className="icon--accent media__icon" />
              </a>
            </div>
          </div>
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

        <article data-aos="fade-left" className="media">
          <div className="media__image-container">
            <img
              src="static\Images\member3.jpg"
              alt=""
              className="media__img"
            />
            <div className="media__icons-container ">
              <a href="#" className="link--social">
                <FaFacebookF className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaLinkedin className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaTwitter className="icon--accent media__icon" />
              </a>
            </div>
          </div>
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

        <article data-aos="fade-right" className="media">
          <div className="media__image-container">
            <img
              src="static\Images\member2.jpg"
              alt=""
              className="media__img"
            />
            <div className="media__icons-container ">
              <a href="#" className="link--social">
                <FaFacebookF className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaLinkedin className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaTwitter className="icon--accent media__icon" />
              </a>
            </div>
          </div>
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

        <article data-aos="fade-left" className="media">
          <div className="media__image-container">
            <picture>
              <source
                type="image/webp"
                srcSet="static\Images\member4.webp 1x, static\Images\member4@x.webp 2x "
              />
              <source
                type="image/png"
                srcSet="static\Images\member4.jpg 1x, static\Images\member4@2x.jpg 2x "
              />
              <img
                src="static\Images\member4.jpg"
                alt=""
                className="media__img"
              />
            </picture>
            <div className="media__icons-container ">
              <a href="#" className="link--social">
                <FaFacebookF className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaLinkedin className="icon--accent media__icon" />
              </a>
              <a href="#" className="link--social">
                <FaTwitter className="icon--accent media__icon" />
              </a>
            </div>
          </div>
          <div className="media__content">
            <h3 className="media__header"> Michael Scott </h3>
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
