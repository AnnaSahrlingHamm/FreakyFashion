import React, { useContext } from "react";
import styles from "./CheckoutTable.module.css";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../CartContext"; // Importera CartContext

const CheckoutTable = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext); // Hämta från CartContext

  // Kontrollera att cartItems är en array
  if (!Array.isArray(cartItems)) {
    console.error("cartItems är inte en array:", cartItems);
    return null; // eller visa ett felmeddelande
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Varukorgen</h2>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Antal</th>
            <th>Pris</th>
            <th>Totalt</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{item.price} kr</td>
                <td>{item.price * item.quantity} kr</td>
                <td>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Varukorgen är tom</td>
            </tr>
          )}
        </tbody>
      </table>
      <button className={styles.checkoutBtn}>Till kassan</button>
    </div>
  );
};

export default CheckoutTable;