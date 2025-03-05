import React from "react";
import styles from "./Footer.module.css"; // Importera CSS-modulen

const Footer = () => {
  return (
    <footer className={styles.footerlarge}>
      <table className={styles.footertable}>
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
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Trenchcoats</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
};

export default Footer;