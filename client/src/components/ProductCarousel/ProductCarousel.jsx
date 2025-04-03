import React, { useRef, useEffect } from 'react';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import styles from './ProductCarousel.module.css';

const ProductCarousel = ({ products = [] }) => {
  const carouselRef = useRef(null);

 
  useEffect(() => {
    if (products.length > 0) {
      const uniqueImages = new Set(products.map(p => p.image));
      console.log('Unika bilder i karusellen:', uniqueImages.size);
    }
  }, [products]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  const validProducts = products.filter(product => 
    product && product.image && product.id
  );

  if (validProducts.length === 0) {
    console.warn('Inga giltiga produkter att visa i karusellen');
    return null;
  }

  return (
    <div className={styles.carouselContainer}>
      <button 
        onClick={() => scroll('left')} 
        className={styles.navButton}
        aria-label="Scroll carousel left"
      >
        {'<'}
      </button>
      
      <div className={styles.carousel} ref={carouselRef}>
        {validProducts.map(product => (
          <div key={product.id} className={styles.carouselItem}>
            <ProductDisplay 
              products={[product]} 
              isCarouselItem={true}
            />
          </div>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')} 
        className={styles.navButton}
        aria-label="Scroll carousel right"
      >
        {'>'}
      </button>
    </div>
  );
};

export default ProductCarousel;