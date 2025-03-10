import React from 'react';
import styles from "./ProductCard.module.css"; // Importera CSS-modulen
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
  
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
                <p><small>{product.brand}</small></p>
                <p>{product.description}</p>
                <p><strong>{product.price} kr</strong></p>

                {/* Knapp för att lägga till i varukorgen */}
                <button onClick={() => console.log(`Lagt till ${product.item} i varukorgen!`)}>
                    Lägg i varukorgen
                </button>
            </section>
        </div>
    );
}

export default ProductCard;
