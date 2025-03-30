import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./ProductDisplay.module.css";
import PropTypes from 'prop-types';
import { productImages } from '../../assets/index.js';

const ProductDisplay = ({ products = [], isCarouselItem = false }) => {
 
  if (!products || !Array.isArray(products)) {
    console.error("Invalid products prop:", products);
    return <div className={styles.empty}>Ogiltig produktdata</div>;
  }

  if (products.length === 0) {
    return <div className={styles.empty}>Inga produkter att visa</div>;
  }

  return (
    <section className={styles.imageContainer}>
      {products.map((product) => {
        
        if (!product || typeof product !== 'object') {
          console.warn("Invalid product item:", product);
          return null;
        }

        
        const imageBase = product.image?.replace('.webp', '') || '';
        const imagePath = productImages[imageBase] || '/placeholder.webp';

       
        const productId = product.id || Math.random().toString(36).substr(2, 9);
        const productSlug = product.slug || 'saknas';
        const productName = product.item || 'Namn saknas';
        const productPrice = product.price !== undefined ? product.price : 'Pris saknas';

        return (
          <ul key={productId} className={`${styles.productList} ${isCarouselItem ? styles.carouselItem : ''}`}>
            <li>
              <figure className={styles.productCard}>
                <Link to={`/products/${productSlug}`}>
                  <img 
                    src={imagePath}
                    alt={productName}
                    className={styles.productImage}
                    onError={(e) => {
                      e.target.src = '/placeholder.webp';
                      console.error('Bilden kunde inte laddas:', product.image);
                    }}
                  />
                </Link>
                
                <>
                  {!isCarouselItem && (
                    <button className={styles.heartIcon}>
                      <FaHeart />
                    </button>
                  )}
                  {product.isNew && (
                    <div className={styles.badge}>Nyhet!</div>
                  )}
                </>

                
                <figcaption className={styles.productTitle}>
                  {productName} - {productPrice} SEK
                  {product.brand && <span className={styles.brand}> | {product.brand}</span>}
                </figcaption>
              </figure>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

ProductDisplay.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      slug: PropTypes.string,
      image: PropTypes.string,
      item: PropTypes.string,
      price: PropTypes.number,
      brand: PropTypes.string,
      isNew: PropTypes.bool,
    })
  ),
  isCarouselItem: PropTypes.bool
};

ProductDisplay.defaultProps = {
  products: [],
  isCarouselItem: false
};

export default ProductDisplay;