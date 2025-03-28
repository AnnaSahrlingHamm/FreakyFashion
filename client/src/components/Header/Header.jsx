import React from "react";
import styles from "./Header.module.css"; // Importera CSS-modulen
import images from "../../assets/index.js";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";



const Header = () => {
  return (
    <header className={styles.header}> 
      <div className={styles.logocontainer}> 
        <img src={images.FREAKYFASHIONlogo} alt="Välkommen till Freaky Fashion!" />
      </div>
      <div className={styles.formcontainer}> 
        <form>
          <input
            type="search"
            id={styles.freakysearch} 
            name="freakysearch"
            placeholder="Sök vår sajt!"
          />
          <input id={styles.sökknapp} type="submit" value="Sök" /> 
        </form>
        <div id={styles.headericons}> 
        <a href="#" onClick={(e) => e.preventDefault()} className={styles.icon}>
          <FaHeart />
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className={styles.icon}>
          <BsFillBasket2Fill />
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;