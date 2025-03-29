import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from '../../assets/images/nonProductImgs/FREAKYFASHIONlogo.png';
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Förhindra standardformulärbeteende
    
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="Välkommen till Freaky Fashion!" />
      </div>
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit} action="#" method="GET">
          <input
            type="search"
            id={styles.freakysearch}
            name="q"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Sök vår sajt!"
          />
          <button type="submit" id={styles.sökknapp}>
            Sök
          </button>
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