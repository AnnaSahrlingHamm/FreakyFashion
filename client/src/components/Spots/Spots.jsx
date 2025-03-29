import React from "react";
import cat from "../../assets/images/nonProductImgs/cat300w.jpg";
import shoe from "../../assets/images/nonProductImgs/shoe300w.jpg";
import eye from "../../assets/images/nonProductImgs/eye300w.jpg"
import styles from "./Spots.module.css"; // Importera CSS-modulen

const Spots = () => {
  return (
    <section className={styles.spots}> {/* Använd styles.spots */}
      <button onClick={(event) => event.preventDefault()}>
        <article id={styles.spot1}> {/* Använd styles.spot1 */}
          <img
            src={eye}
            alt="staring eye with the text 'Buy'"
          />
          <div className={styles.buy}>Buy!</div> {/* Använd styles.buy */}
        </article>
      </button>
      <button onClick={(event) => event.preventDefault()}>
        <article id={styles.spot2}> {/* Använd styles.spot2 */}
          <img
            src={shoe}
            alt="grinning lady's shoe sole in giant closeup with the text 'Our'"
          />
          <div className={styles.our}>Our!</div> {/* Använd styles.our */}
        </article>
      </button>
      <button onClick={(event) => event.preventDefault()}>
        <article id={styles.spot3}> {/* Använd styles.spot3 */}
          <img
            src={cat}
            alt="Cat with mouth open wide with the text 'Clothes!'"
          />
          <div className={styles.clothes}>Clothes!</div> {/* Använd styles.clothes */}
        </article>
      </button>
    </section>
  );
};

export default Spots;