import React, { useContext, memo } from "react";
import { CartContext } from "../../CartContext";
import CheckoutTable from "./CheckoutTable";

export const CheckoutTableWrapper = memo(({ showCheckoutButton }) => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);
  
  console.log("CheckoutTableWrapper renderas"); // För felsökning

  return (
    <CheckoutTable
      cartItems={cartItems}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
      showCheckoutButton={showCheckoutButton}
    />
  );
}, arePropsEqual);


function arePropsEqual(prevProps, nextProps) {
  return prevProps.showCheckoutButton === nextProps.showCheckoutButton;
}