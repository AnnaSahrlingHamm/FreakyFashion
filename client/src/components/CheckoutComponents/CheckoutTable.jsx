import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import styles from './CheckoutTable2.module.css';
import { FaTrash } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const CheckoutTable = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  const renderName = (name) => {
    if (!name) return 'Namn saknas';
    if (typeof name === 'object') {
      return name.item || name.name || 'Namn saknas';
    }
    return name;
  };

  const location = useLocation();
  const isBasketPage = location.pathname === "/basket";

  const validCartItems = Array.isArray(cartItems)
    ? cartItems.filter(item =>
        item &&
        typeof item === 'object' &&
        item.id
      )
    : [];

  return (
    <div className={styles.cartContainer}>
      <h1>{isBasketPage ? "Varukorgen" : "Checkout"}</h1>
      {validCartItems.length > 0 ? (
        <table className={styles.table}>
          <thead className={styles.row}>
            <tr className={styles.row}>
              <th className={styles.cell}>Produkt</th>
              <th className={styles.cell}>Antal</th>
              <th className={styles.cell}>Pris</th>
              <th className={styles.cell}>Totalt</th>
              <th className={styles.cell}>Ändra antal</th>
              <th className={styles.cell}>Ta bort</th>
            </tr>
          </thead>
          <tbody>
            {validCartItems.map(item => (
              <tr key={item.id}>
                <td>{renderName(item.name)}</td>
                <td>{item.quantity || 1}</td>
                <td>{item.price || 0} kr</td>
                <td>{(item.price || 0) * (item.quantity || 1)} kr</td>
                <td>
                  <select
                    value={item.quantity || 1}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className={styles.quantitySelect}
                  >
                    {[...Array(10).keys()].map(num => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => removeItem(item.id)}
                    className={styles.deleteBtn}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.emptyCart}>Varukorgen är tom</p>
      )}
    </div>
  );
};

export default CheckoutTable;
