import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Hämta addToCart från CartContext

  const handleClick = () => {
    // Navigera till produktens detaljsida med slug som URL-parameter
    navigate(`/products/${product.slug}`);
  };

  return (
    <div className={styles.productContainer}>
      {/* Bild-sektionen */}
      <section className={styles.productcontainer}>
        <article id="bild">
          <img src={product.image} alt={product.item} />
          <i className="bi bi-heart"></i> {/* Bootstrap ikon */}
        </article>
      </section>
      {/* Produkt-info */}
      <section className={styles.productinfo}>
        <h3>{product.item}</h3>
        <p>
          <small>{product.brand}</small>
        </p>
        <p>{product.description}</p>
        <p>
          <strong>{product.price} kr</strong>
        </p>

        {/* Knapp för att lägga till i varukorgen */}
        <button onClick={() => addToCart(product)}>Lägg i varukorgen</button>
      </section>
    </div>
  );
};

export default ProductCard;