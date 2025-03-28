import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./ProductDisplay.module.css";
import PropTypes from 'prop-types';
import productImages from '../../assets/index.js/';


const ProductDisplay = ({ products }) => {
  // Funktion för att konvertera "DD-MM-YYYY" till Date-objekt
  const parseCustomDate = (dateString) => {
    if (!dateString) return null;
    
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
  };

  // Kontrollera om produkten är ny (mindre än 7 dagar gammal)
  const isNewProduct = (publishedDate) => {
    const published = parseCustomDate(publishedDate);
    if (!published) return false;
    
    const now = new Date();
    const diffInDays = Math.floor((now - published) / (1000 * 60 * 60 * 24));
    return diffInDays < 7;
  };

  return (
    <section className={styles.imageContainer}>
      {products.map((product) => (
        <ul key={product.id} className={styles.productList}>
          <li>
            <figure className={styles.productCard}>
              <Link to={`/product-details/${product.slug}`}>
              <img 
                src={productImages[product.image.replace(/\.\w+$/, '')] || '/fallback.jpg'} 
                alt={product.item} 
                className={styles.productImage} 
              />

              </Link>
              <button className={styles.heartIcon}>
                <FaHeart />
              </button>
              {isNewProduct(product.published) && (
                <div className={styles.badge}>Nyhet!</div>
              )}
              <figcaption className={styles.productTitle}>
                {product.item} - {product.price} SEK
              </figcaption>
              <figcaption className={styles.productBrand}>
                {product.brand}
              </figcaption>
            </figure>
          </li>
        </ul>
      ))}
    </section>
  );
};

ProductDisplay.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      isNew: PropTypes.bool,
    })
  ).isRequired,
};

export default ProductDisplay;