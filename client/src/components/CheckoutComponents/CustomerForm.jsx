import React from "react";
import "./CustomerForm.css"; // Se till att CSS är importerad

const CustomerForm = () => {
  return (
    <form className="customer-form">
      <h2>Kunduppgifter</h2>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstname">Förnamn</label>
          <input type="text" id="firstname" name="firstname" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Efternamn</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="email" />
      </div>

      <fieldset className="address-fieldset">
        <legend>Adress</legend>

        <div className="form-group">
          <label htmlFor="street">Gata</label>
          <input type="text" id="street" name="street" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="zipcode">Postnummer</label>
            <input type="text" id="zipcode" name="zipcode" />
          </div>
          <div className="form-group">
            <label htmlFor="city">Stad</label>
            <input type="text" id="city" name="city" />
          </div>
        </div>
      </fieldset>

      <div className="checkbox-group">
        <input type="checkbox" id="newsletter" name="newsletter" />
        <label htmlFor="newsletter">Jag vill ta emot nyhetsbrev</label>
      </div>

      <button type="submit" className="buy-button">Köp</button>
    </form>
  );
};

export default CustomerForm;
