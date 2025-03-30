import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import styles from './CheckoutTable2.module.css';
import { FaTrash } from 'react-icons/fa';

const CheckoutTable = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  // Funktion för att hantera visning av namn
  const renderName = (name) => {
    if (!name) return 'Namn saknas';
    if (typeof name === 'object') {
      // Om name är ett objekt, visa t.ex. det första icke-tomma värdet
      return name.item || name.name || 'Namn saknas';
    }
    return name;
  };

  console.log("Item name i renderName:", name);


  const validCartItems = Array.isArray(cartItems) 
    ? cartItems.filter(item => 
        item && 
        typeof item === 'object' && 
        item.id
      )
    : [];

console.log("cartItems i CheckoutTable:", cartItems);
console.log("validCartItems i CheckoutTable:", validCartItems);
console.log(styles.cartTable); // Kolla vad klassen kompileras till

  return (
    <div className={styles.cartContainer}>
      <h1>Varukorgen</h1>
      {validCartItems.length > 0 ? (
        <table className={styles.table}>
          <thead className={styles.row}>
    <       tr className={styles.row}>
              <th className={styles.cell}>Produkt</th>
              <th className={styles.cell}>Antal</th>
              <th className={styles.cell}>Pris</th>
              <th className={styles.cell}>Totalt</th>
            </tr>
          </thead>
          <tbody>
            {validCartItems.map(item => (
              <tr key={item.id}>
                <td>{renderName(item.name)}</td>
                <td>
                  <select
                    value={item.quantity || 1}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  >
                    {[...Array(10).keys()].map(num => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{item.price || 0} kr</td>
                <td>{(item.price || 0) * (item.quantity || 1)} kr</td>
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