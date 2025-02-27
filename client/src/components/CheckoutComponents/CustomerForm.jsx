import React from "react";
import styles from "./CustomerForm.module.css"; // Importera CSS-modulen

const CustomerForm = () => {
  return (
    <form className={styles.customerForm}> {/* Använd styles.customerForm */}
      <h2>Kunduppgifter</h2>

      <div className={styles.formRow}> {/* Använd styles.formRow */}
        <div className={styles.formGroup}> {/* Använd styles.formGroup */}
          <label htmlFor="firstname">Förnamn</label>
          <input type="text" id="firstname" name="firstname" />
        </div>
        <div className={styles.formGroup}> {/* Använd styles.formGroup */}
          <label htmlFor="lastname">Efternamn</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
      </div>

      <div className={styles.formGroup}> {/* Använd styles.formGroup */}
        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="email" />
      </div>

      <fieldset className={styles.addressFieldset}> {/* Använd styles.addressFieldset */}
        <legend>Adress</legend>

        <div className={styles.formGroup}> {/* Använd styles.formGroup */}
          <label htmlFor="street">Gata</label>
          <input type="text" id="street" name="street" />
        </div>

        <div className={styles.formRow}> {/* Använd styles.formRow */}
          <div className={styles.formGroup}> {/* Använd styles.formGroup */}
            <label htmlFor="zipcode">Postnummer</label>
            <input type="text" id="zipcode" name="zipcode" />
          </div>
          <div className={styles.formGroup}> {/* Använd styles.formGroup */}
            <label htmlFor="city">Stad</label>
            <input type="text" id="city" name="city" />
          </div>
        </div>
      </fieldset>

      <div className={styles.checkboxGroup}> {/* Använd styles.checkboxGroup */}
        <input type="checkbox" id="newsletter" name="newsletter" />
        <label htmlFor="newsletter">Jag vill ta emot nyhetsbrev</label>
      </div>

      <button type="submit" className={styles.buyButton}>Köp</button> {/* Använd styles.buyButton */}
    </form>
  );
};

export default CustomerForm;