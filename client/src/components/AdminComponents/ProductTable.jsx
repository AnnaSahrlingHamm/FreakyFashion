import React from "react";
import styles from "./ProductTable.module.css";
import { FaTrash } from 'react-icons/fa';

const ProductTable = ({ products, onDeleteProduct, isLoading }) => {
  return (
    <table className={styles.admintable}>
      <thead>
        <tr>
          <th>Namn</th>
          <th>SKU</th>
          <th>Pris</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.item}</td>
              <td>{product.sku || product.Sku}</td>
              <td>{product.price} kr</td>
              <td>
                <button
                  onClick={() => onDeleteProduct(product.id)}
                  className={styles.deleteButton}
                  disabled={isLoading}
                  aria-label="Ta bort produkt"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">Inga produkter tillgängliga</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;