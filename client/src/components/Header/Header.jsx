import React from "react";
import styles from "./Header.module.css"; // Importera CSS-modulen
import images from "../../assets/index.js";

const Header = () => {
  return (
    <header className={styles.header}> {/* Använd styles.header */}
      <div className={styles.logocontainer}> {/* Använd styles.logocontainer */}
        <img src={images.FREAKYFASHIONlogo} alt="Välkommen till Freaky Fashion!" />
      </div>
      <div className={styles.formcontainer}> {/* Använd styles.formcontainer */}
        <form>
          <input
            type="search"
            id={styles.freakysearch} /* Använd styles.freakysearch */
            name="freakysearch"
            placeholder="Sök vår sajt!"
          />
          <input id={styles.sökknapp} type="submit" value="Sök" /> {/* Använd styles.sökknapp */}
        </form>
        <div id={styles.headericons}> {/* Använd styles.headericons */}
          <a href="#" onClick={(e) => e.preventDefault()}>
            <i className="bi bi-heart-fill"></i>
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <i className="bi bi-basket2-fill"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;