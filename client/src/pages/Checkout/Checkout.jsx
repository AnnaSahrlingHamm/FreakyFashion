import React from "react";
import { CheckoutTableWrapper } from "../../components/CheckoutComponents/CheckoutTableWrapper";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import CustomerForm from "../../components/CheckoutComponents/CustomerForm";
import IconLinks from "../../components/IconLinks/IconLinks";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import styles from "../Basket/Basket.module.css";

const Checkout = () => {
  return (
    <div className="container">
      <Header />
      <NavBar />
        <div className="checkout-page">
          <h1>Checkout</h1>
          <div className="checkout-content">
            <CheckoutTableWrapper showCheckoutButton={true} />
            <Link to="/checkout" className={styles.checkoutBtn}>
              Till kassan!
            </Link>
            <CustomerForm />
          </div>
        </div>
        <IconLinks />
        <Footer />  
    </div>
  );
};

export default Checkout;