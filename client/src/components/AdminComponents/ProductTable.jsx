import React from "react";
import styles from "./ProductTable.module.css"; // Importera CSS-modulen

const ProductTable = ({ products }) => {
  return (
    <table className={styles.admintable}>
      <thead>
        <tr>
          <th>Namn</th>
          <th>SKU</th>
          <th>Pris</th>
        </tr>
      </thead>
        <tbody>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product, index) => (
                <tr key={index}>
                    <td>{product.item}</td>
                    <td>{product.Sku}</td>
                    <td>{product.price}</td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="3">Inga produkter tillgängliga</td>
                </tr>
            )}
        </tbody>

    </table>
  );
};

export default ProductTable;
