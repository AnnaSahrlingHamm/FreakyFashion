import React from "react";
import CheckoutTable from "../../components/CheckoutComponents/CheckoutTable";
import CustomerForm from "../../components/CheckoutComponents/CustomerForm";

const Checkout = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <CheckoutTable />
        <CustomerForm />
      </div>
    </div>
  );
};

export default Checkout;