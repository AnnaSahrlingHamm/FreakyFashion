import { productImages } from "../../assets/index.js";
import styles from "./Hero.module.css"; // Importera CSS-modulen

const Hero = () => {
  return (
    <section className={styles.hero}> 
      <img
        src={productImages.hero500w} // Standardbild
        srcSet={`
          ${productImages.hero500w} 500w,
          ${productImages.hero_large} 600w
        `}
        sizes="(max-width: 640px) 500px, 
               (max-width: 1023px) 600px, 
               600px"
        alt="fashionable woman"
      />
      <br />
      <p className={styles.heroText}> 
        Lorem ipsum dolor sit amet<br />
        consectetur adipisicing elit.
      </p>
    </section>
  );
};

export default Hero;