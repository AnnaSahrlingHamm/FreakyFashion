import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { productImages } from "../../assets/index";
import { CartContext } from "../../CartContext"; // Importera CartContext

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Hämta funktionen för att lägga till i varukorgen

  if (!product || !product.image) {
    return <div className={styles.productCard}>Felaktig produktdata</div>;
  }

  const imageBase = product.image.replace(".webp", "");

  const getSafeImagePath = (imgPath) => {
    if (!imgPath || typeof imgPath !== "string") return "/placeholder.webp";
    return imgPath;
  };

  const getImageVariants = (base) => {
    if (!productImages[base]) {
      return {
        small: "/placeholder.webp",
        medium: "/placeholder.webp",
        large: "/placeholder.webp",
      };
    }

    return {
      small: productImages[`${base}_300w`] || productImages[base],
      medium: productImages[`${base}_400w`] || productImages[base],
      large: productImages[`${base}_500w`] || productImages[base],
    };
  };

  const images = getImageVariants(imageBase);

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
          e.target.src = "/placeholder.webp";
          e.target.srcset = "/placeholder.webp";
        }}
      />
      <div className={styles.productInfo}>
        <h3>{product.item}</h3>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.price}>{product.price} kr</p>
        <button 
          className={styles.addToCartButton} 
          onClick={() => {
            if (!product || !product.id) {
              console.error("Ogiltig produkt:", product);
              return;
            }
            
            const cartItem = {
              id: product.id,
              item: product.item,  // Behåll samma fältnamn som din CheckoutTable förväntar sig
              name: product.item,  // Dubbla upp för säkerhets skull
              price: typeof product.price === 'number' ? product.price : Number(product.price),
              image: product.image,
              slug: product.slug   // Lägg till andra nödvändiga fält
            };
            
            console.log("Lägger till i varukorgen:", cartItem);
            addToCart(cartItem);
            }}
          >
            Lägg i varukorg
          </button>
      </div>
    </div>
  );
};11

export default ProductCard;
