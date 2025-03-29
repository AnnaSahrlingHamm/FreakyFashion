import React from 'react';
import styles from './ProductCard.module.css';
import { productImages } from '../../assets/index';

const ProductCard = ({ product }) => {
  if (!product || !product.image) {
    return <div className={styles.productCard}>Felaktig produktdata</div>;
  }

  // Extrahera basnamnet utan filändelse
  const imageBase = product.image.replace('.webp', '');

  const getSafeImagePath = (imgPath) => {
    if (!imgPath || typeof imgPath !== 'string') return '/placeholder.webp';
    return imgPath;
  };

  const getImageVariants = (base) => {
    if (!productImages[base]) {
      return {
        small: '/placeholder.webp',
        medium: '/placeholder.webp',
        large: '/placeholder.webp'
      };
    }

    return {
      small: productImages[`${base}_300w`] || productImages[base],
      medium: productImages[`${base}_400w`] || productImages[base],
      large: productImages[`${base}_500w`] || productImages[base]
    };
  };

  const images = getImageVariants(imageBase);

  // Debug-info
  console.log('Product:', product.item);
  console.log('Resolved images:', images);

  return (
    <div className={styles.productCard}>
      <img 
        src={getSafeImagePath(images.medium)}
        srcSet={`
          ${getSafeImagePath(images.small)} 300w,
          ${getSafeImagePath(images.medium)} 400w,
          ${getSafeImagePath(images.large)} 500w
        `}
        sizes="(max-width: 639px) 300px, (max-width: 1023px) 400px, 500px"
        alt={product.item} 
        className={styles.productImage}
        onError={(e) => {
          e.target.src = '/placeholder.webp';
          e.target.srcset = '/placeholder.webp';
          console.error('Bilden kunde inte laddas:', e.target.src);
        }}
      />
      <div className={styles.productInfo}>
        <h3>{product.item}</h3>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.price}>{product.price} kr</p>
      </div>
    </div>
  );
};

export default ProductCard;