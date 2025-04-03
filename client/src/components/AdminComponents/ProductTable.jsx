import React from "react";
import styles from "./ProductTable.module.css";
import { FaTrash, FaSyncAlt, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ products, onDeleteProduct, isLoading }) => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload(); 
  };

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.topButtons}>
        <button onClick={handleRefresh} className={styles.refreshBtn}>
          <FaSyncAlt /> Uppdatera
        </button>
        <button onClick={() => navigate("/admin/products/add-product")} className={styles.newBtn}>
          <FaPlus /> Ny produkt
        </button>
      </div>

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
    </div>
  );
};

export default ProductTable;
