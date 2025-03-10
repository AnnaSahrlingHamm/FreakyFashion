import React, {useState, useEffect} from "react";
import CheckoutTable from "../../components/CheckoutComponents/CheckoutTable";

const Basket = () => {
    return (
        <div>
            <h1>Varukorg</h1>
            <CheckoutTable />
        </div>
    );
};

export default Basket;

//TODO: 
// 1. Skapa Basket.jsx
// 2. Testa slug- funktionerna
// 3. Skapa checkout-sidan med funktioner.