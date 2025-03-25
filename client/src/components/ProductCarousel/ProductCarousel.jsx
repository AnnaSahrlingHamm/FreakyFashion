import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCarousel.module.css';


const ProductCarousel = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (slug) => {
    navigate(`/products/${slug}`);
  };

const [scrollPosition, setScrollPosition] = useState(0);

const scrollLeft = () => {
  carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
  carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
};

  return (
    <div className={styles.carouselContainer}>
      <button onClick={scrollLeft} className={styles.navButtonLeft}>{'<'}</button>
      <button onClick={scrollRight} className={styles.navButtonRight}>{'>'}</button>  
      <div className={styles.carousel}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className={styles.carouselItem}
            onClick={() => handleProductClick(product.slug)}
          >
            <img 
              src={`/images/${product.image}`} 
              alt={product.item} 
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h3>{product.item}</h3>
              <p className={styles.brand}>{product.brand}</p>
              <p className={styles.price}>{product.price} kr</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;