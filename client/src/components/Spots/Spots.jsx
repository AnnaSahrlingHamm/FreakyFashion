import React from "react";
import images from "../../assets/index.js";

const Spots = () => {
  return (
    <section className="spots">
      <button onClick={(event) => event.preventDefault()}>
        <article id="spot1">
          <img
            src= {images.eye300w}
            alt="staring eye with the text 'Buy'"
          />
          <div className="buy">Buy!</div>
        </article>
      </button>
      <button onClick={(event) => event.preventDefault()}>
        <article id="spot2">
          <img
            src={images.shoe300w}
            alt="grinning lady's shoe sole in giant closeup with the text 'Our'"
          />
          <div className="our">Our!</div>
        </article>
      </button>
      <button onClick={(event) => event.preventDefault()}>
        <article id="spot3">
          <img
            src={images.cat300w}
            alt="Cat with mouth open wide with the text 'Clothes!'"
          />
          <div className="clothes">Clothes!</div>
        </article>
      </button>
    </section>
  );
};

export default Spots;
