import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const ProductDetails = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Hämta huvudprodukt
                const productRes = await fetch(`/api/products/${slug}`);
                if (!productRes.ok) throw new Error('Produkt ej hittad');
                const productData = await productRes.json();
                setProduct(productData);

                // Hämta liknande produkter
                const similarRes = await fetch(`/api/products/${slug}/similar`);
                const similarData = await similarRes.json();
                setSimilarProducts(similarData);
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.message);
            }
        };

        fetchData();
    }, [slug]);

    if (error) return <p>{error}</p>;
    if (!product) return <p>Laddar produkt...</p>;

    return (
        <div className="product-details-container">
            <ProductCard product={product} />

            <h2 id="liknandeProdukter">Liknande produkter</h2>
            {similarProducts.length > 0 ? (
                <ProductCarousel products={similarProducts} />
            ) : (
                <p>Inga liknande produkter hittades</p>
            )}
        </div>
    );
};

export default ProductDetails;