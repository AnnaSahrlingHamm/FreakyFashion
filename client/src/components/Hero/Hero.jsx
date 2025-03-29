//import hero from "../../assets/images/nonProductImgs/hero.jpg";
import hero500w from "../../assets/images/nonProductImgs/hero500w.jpg";
import hero_large from "../../assets/images/nonProductImgs/hero_large.jpg";
import styles from "./Hero.module.css"; // Importera CSS-modulen

const Hero = () => {
  return (
    <section className={styles.hero}> 
      <img
        src={hero500w} 
        srcSet={`
          ${hero500w} 500w,
          ${hero_large} 600w
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