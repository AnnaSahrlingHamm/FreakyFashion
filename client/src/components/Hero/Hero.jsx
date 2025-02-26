/* const Hero = () => {
  console.log("Hero renderas!");
  return <h2>Hero fungerar!</h2>;
};

export default Hero;
 */

import images from "../../assets/index.js";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={images.hero500w} // Standardbild
        srcSet={`
          ${images.hero500w} 500w,
          ${images.hero_large} 600w
        `}
        sizes="(max-width: 640px) 500px, 
               (max-width: 1023px) 600px, 
               600px"
        alt="fashionable woman"
      />
      <br />
      <p>
        Lorem ipsum dolor sit amet<br />
        consectetur adipisicing elit.
      </p>
    </section>
  );
};

export default Hero;