import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <footer className={styles.footerlarge}>
      <div className={styles.column}>
        <h4>Shopping</h4>
        <ul>
          <li>Vinterjackor</li>
          <li>Pufferjackor</li>
          <li>Kappor</li>
          <li>Trenchcoats</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4>Mina Sidor</h4>
        <ul>
          <li>Mina ordrar</li>
          <li>Mitt konto</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h4>Kundtjänst</h4>
        <ul>
          <li>Returnpolicy</li>
          <li>Integritetspolicy</li>
        </ul>
      </div>
    </footer>

      {/* Mobile version */}
      <footer className={`${styles.footersmall} ${styles.dMdNone}`}>
        <div className={styles.accordion}>
          {/* Shopping */}
          <div className={styles.accordionItem}>
            <h2 className={styles.accordionHeader}>
              <button
                className={`${styles.accordionButton} ${
                  activeIndex === 0 ? "" : styles.collapsed
                }`}
                type="button"
                onClick={() => toggleAccordion(0)}
                aria-expanded={activeIndex === 0}
              >
                Shopping
                <span className={styles.accordionIcon}>
                  {activeIndex === 0 ? "-" : "+"}
                </span>
              </button>
            </h2>
            <div
              className={`${styles.accordionCollapse} ${
                activeIndex === 0 ? styles.show : ""
              }`}
            >
              <div className={styles.accordionBody}>
                <ul>
                  <li>Vinterjackor</li>
                  <li>Pufferjackor</li>
                  <li>Kappor</li>
                  <li>Trenchcoats</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mina Sidor */}
          <div className={styles.accordionItem}>
            <h2 className={styles.accordionHeader}>
              <button
                className={`${styles.accordionButton} ${
                  activeIndex === 1 ? "" : styles.collapsed
                }`}
                type="button"
                onClick={() => toggleAccordion(1)}
                aria-expanded={activeIndex === 1}
              >
                Mina Sidor
                <span className={styles.accordionIcon}>
                  {activeIndex === 1 ? "-" : "+"}
                </span>
              </button>
            </h2>
            <div
              className={`${styles.accordionCollapse} ${
                activeIndex === 1 ? styles.show : ""
              }`}
            >
              <div className={styles.accordionBody}>
                <ul>
                  <li>Mina ordrar</li>
                  <li>Mitt konto</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kundtjänst */}
          <div className={styles.accordionItem}>
            <h2 className={styles.accordionHeader}>
              <button
                className={`${styles.accordionButton} ${
                  activeIndex === 2 ? "" : styles.collapsed
                }`}
                type="button"
                onClick={() => toggleAccordion(2)}
                aria-expanded={activeIndex === 2}
              >
                Kundtjänst
                <span className={styles.accordionIcon}>
                  {activeIndex === 2 ? "-" : "+"}
                </span>
              </button>
            </h2>
            <div
              className={`${styles.accordionCollapse} ${
                activeIndex === 2 ? styles.show : ""
              }`}
            >
              <div className={styles.accordionBody}>
                <ul>
                  <li>Returnpolicy</li>
                  <li>Integritetspolicy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;