import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./ProductDisplay.module.css";
import PropTypes from 'prop-types';
import { productImages } from '../../assets/index.js';

const ProductDisplay = ({ products = [], isCarouselItem = false }) => {
  if (!products || products.length === 0) {
    return <div className={styles.empty}>Inga produkter att visa</div>;
  }

  return (
    <section className={styles.imageContainer}>
      {products.map((product) => {
        if (!product || !product.image) return null;
        
        const imageBase = product.image.replace('.webp', '');
        const imagePath = productImages[imageBase] || '/placeholder.webp';

        return (
          <ul key={product.id} className={`${styles.productList} ${isCarouselItem ? styles.carouselItem : ''}`}>
            <li>
              <figure className={styles.productCard}>
                <Link to={`/products/${product.slug}`}>
                  <img 
                    src={imagePath}
                    alt={product.item || 'Produktbild'}
                    className={styles.productImage}
                    onError={(e) => {
                      e.target.src = '/placeholder.webp';
                      console.error('Bilden kunde inte laddas:', e.target.src);
                    }}
                  />
                </Link>
                
                {!isCarouselItem && (
                  <>
                    <button className={styles.heartIcon}>
                      <FaHeart />
                    </button>
                    {product.isNew && (
                      <div className={styles.badge}>Nyhet!</div>
                    )}
                  </>
                )}
                
                <figcaption className={styles.productTitle}>
                  {product.item} - {product.price} SEK
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
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
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