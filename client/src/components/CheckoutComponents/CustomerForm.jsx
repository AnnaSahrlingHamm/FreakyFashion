import React, { useState } from 'react';
import styles from './CustomerForm.module.css';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    postal_code: '',
    city: '',
    newsletter: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulär skickat:', formData);
  };

  return (
    <form className={styles.customerForm} onSubmit={handleSubmit}>
      <div className={styles.upperSection}>
        <div className={styles.inputGroup}>
          <label>Förnamn</label>
          <input
            type="text"
            name="first_name"
            placeholder="Ange förnamn"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </div>
      </div>

        <div className={styles.inputGroup}>
          <label>Efternamn</label>
          <input
            type="text"
            name="last_name"
            placeholder="Ange efternamn"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label>E-post</label>
          <input
            type="email"
            name="email"
            placeholder="Ange e-post"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <fieldset className={styles.addressSection}>
        <legend>Adress</legend>
        <div className={styles.inputGroup}>
          <label>Gata</label>
          <input
            type="text"
            name="address"
            placeholder="Ange gata"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Postnummer</label>
          <input
            type="text"
            name="postal_code"
            placeholder="Ange postnummer"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Stad</label>
          <input
            type="text"
            name="city"
            placeholder="Ange stad"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
      </fieldset>

      <div className={styles.newsletterContainer}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleInputChange}
          />
          Jag vill ta emot nyhetsbrev
        </label>
      </div>




      <button type="submit" className={styles.buyButton}>Köp</button>
    </form>
  );
};

export default CustomerForm;
