import React from "react";
import styles from "./Footer.module.css"; // Importera CSS-modulen

const Footer = () => {
  return (
    <footer className={styles.footerlarge}> {/* Använd styles.footerlarge */}
      <table className={styles.footertable}> {/* Använd styles.footertable */}
        <thead>
          <tr>
            <th>Shopping</th>
            <th>Mina Sidor</th>
            <th>Kundtjänst</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vinterjackor</td>
            <td>Mina ordrar</td>
            <td>Returnpolicy</td>
          </tr>
          <tr>
            <td>Pufferjackor</td>
            <td>Mitt konto</td>
            <td>Integritetspolicy</td>
          </tr>
          <tr>
            <td>Kappor</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Trenchcoats</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
};

export default Footer;