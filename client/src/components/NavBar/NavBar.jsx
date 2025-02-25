import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; // Importera en CSS-modul för styling

const NavBar = () => {
  return (
    <>
      {/* Navbar för mobil */}
      <nav className={styles.toppnav}>
        <ul>
          <li><Link to="/admin-index">Nyheter</Link></li>
          <li><Link to="/admin-index">Topplistan</Link></li>
          <li><Link to="/admin-index">Rea</Link></li>
          <li><Link to="/new">Kampanjer</Link></li>
        </ul>
      </nav>

      {/* Navbar för större skärmar */}
      <nav className={styles.toppnavLarge}>
        <ul>
          <li><Link to="/admin-index">Nyheter</Link></li>
          <li><Link to="/admin-index">Kategorier</Link></li>
          <li><Link to="/new">Topplistan</Link></li>
          <li><Link to="/admin-index">Rea</Link></li>
          <li><Link to="/admin-index">Kampanjer</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
