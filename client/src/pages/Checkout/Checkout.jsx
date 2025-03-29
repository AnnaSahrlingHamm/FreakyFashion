import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutTable from "../../components/CheckoutComponents/CheckoutTable";
import CustomerForm from "../../components/CheckoutComponents/CustomerForm";
import IconLinks from "../../components/IconLinks/IconLinks";
import Footer from "../../components/Footer/Footer";

const Checkout = () => {
  return (
    <div className="container">
      <Header />
      <NavBar />
        <div className="checkout-page">
          <h1>Checkout</h1>
          <div className="checkout-content">
            <CheckoutTable />
            <CustomerForm />
          </div>
        </div>
        <IconLinks />
        <Footer />  
    </div>
  );
};

export default Checkout;