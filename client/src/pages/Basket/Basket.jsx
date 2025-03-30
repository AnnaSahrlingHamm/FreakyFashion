import React, {useState, useEffect, memo} from "react";
import { CheckoutTableWrapper } from "../../components/CheckoutComponents/CheckoutTableWrapper";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import IconLinks from "../../components/IconLinks/IconLinks";
import Footer from "../../components/Footer/Footer";


const Basket = memo(() => {
    console.log("Basket-sidan RENDERAS");
    return (
        <div className="container">
        <Header />
        <NavBar />
        <div>
          <CheckoutTableWrapper showCheckoutButton={true} />
        </div>
        <IconLinks />
        <Footer /> 
        </div>
    );
});

export default Basket;