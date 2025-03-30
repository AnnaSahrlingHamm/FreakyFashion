import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; // Importera CSS-modulen

const NavBar = () => {
  return (
    <>
      {/* Navbar för mobil */}
      <nav className={styles.toppnav}>
        <ul>
          <li><Link className={styles.customLink} to="/admin-index"><h2>Nyheter</h2></Link></li>
          <li><Link className={styles.customLink}to="/admin-index"><h2>Topplistan</h2></Link></li>
          <li><Link className={styles.customLink}to="/admin-index"><h2>Rea</h2></Link></li>
          <li><Link className={styles.customLink} to="/new"><h2>Kampanjer</h2></Link></li>
        </ul>
      </nav>

      {/* Navbar för större skärmar */}
      <nav className={styles.toppnavLarge}>
        <ul>
        <li><Link className={styles.customLink} to="/admin-index"><h2>Nyheter</h2></Link></li>
        <li><Link className={styles.customLink} to="/admin-index"><h2>Kategorier</h2></Link></li>
        <li><Link className={styles.customLink} to="/new"><h2>Topplistan</h2></Link></li>
        <li><Link className={styles.customLink} to="/admin-index"><h2>Rea</h2></Link></li>
        <li><Link className={styles.customLink} to="/admin-index"><h2>Kampanjer</h2></Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;