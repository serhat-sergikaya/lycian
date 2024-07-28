import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter container ">
      <img
        className="newsletter__img"
        src="\static\Images\letter.png"
        alt="Image of a letter"
      />
      <div className="newsletter__content">
        <h2 className="newsletter__heading">
          Sign Up to our weekly Newsletter!
        </h2>
        <p className="newsletter__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil iste
          earum debitis voluptate minus. Quidem, fugit? Architecto, autem
          itaque.
        </p>
        <div className="input--group">
          <input
            className="input newsletter__input"
            type="email"
            placeholder="Enter your e-mail address..."
          />
          <button className="btn--gradient"> Sign-up</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
