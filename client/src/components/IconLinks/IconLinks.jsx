import React from "react";
import { 
  FaGlobeAmericas, 
  FaPlane, 
  FaShieldAlt, 
  FaSmile 
} from "react-icons/fa";
import styles from "./IconLinks.module.css"; // CSS-modul för styling

const IconLinks = () => {
  return (
    <section className={styles.iconLinks}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <FaGlobeAmericas className={styles.icon} />
          <span>Gratis frakt och returer</span>
        </li>
        <li className={styles.listItem}>
          <FaPlane className={styles.icon} />
          <span>Expressfrakt</span>
        </li>
        <li className={styles.listItem}>
          <FaShieldAlt className={styles.icon} />
          <span>Säkra betalningar</span>
        </li>
        <li className={styles.listItem}>
          <FaSmile className={styles.icon} />
          <span>Nyheter varje dag</span>
        </li>
      </ul>
    </section>
  );
};

export default IconLinks;