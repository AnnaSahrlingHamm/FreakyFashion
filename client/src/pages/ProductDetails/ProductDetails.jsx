import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import IconLinks from "../../components/IconLinks/IconLinks";
import Footer from "../../components/Footer/Footer";

const ProductDetails = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const [productRes, similarRes] = await Promise.all([
              fetch(`http://localhost:8000/api/products/${slug}`),
              fetch(`http://localhost:8000/api/products/${slug}/similar`)
            ]);

            console.log("Produktresponse status:", productRes.status);

            
            if (!productRes.ok) throw new Error('Produkt ej hittad');
            
            setProduct(await productRes.json());
            setSimilarProducts(await similarRes.json());
          } catch (error) {
            setError(error.message);
          }
        };
      
        fetchData();
      }, [slug]);

    if (error) return <p>{error}</p>;
    if (!product) return <p>Laddar produkt...</p>;

    return (
        <div className="container">
            <Header />
            <NavBar />
            <div className="product-details-container">
            <ProductCard product={product} />

            <h2 id="liknandeProdukter">Liknande produkter</h2>
            {similarProducts.length > 0 ? (
                <ProductCarousel products={similarProducts} />
            ) : (
                <p>Inga liknande produkter hittades</p>
            )}
            </div>
            <IconLinks />
            <Footer />
        </div>
    );
};

export default ProductDetails;