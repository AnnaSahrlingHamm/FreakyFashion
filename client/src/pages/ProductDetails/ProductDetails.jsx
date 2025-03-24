import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductDetails = () => {
    const { slug } = useParams(); // Ändrat från id till slug
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hämta den enskilda produkten
        fetch(`/api/products/${slug}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Produkten hittades inte');
                }
                return response.json();
            })
            .then(data => setProduct(data))
            .catch(error => {
                console.error("Fel vid hämtning av produkt:", error);
                setError(error.message);
            });

        // Hämta liknande produkter
        fetch(`/api/products/${slug}/similar`)
            .then(response => response.json())
            .then(data => setSimilarProducts(data))
            .catch(error => console.error("Fel vid hämtning av liknande produkter:", error));
    }, [slug]);

    if (error) return <p>{error}</p>;
    if (!product) return <p>Laddar produkt...</p>;

    return (
        <div>
            <h2>Produktdetaljer</h2>
            <ProductCard product={product} />

            <h2 id="liknandeProdukter">Liknande produkter</h2>
            <section className="similarProducts">
                {similarProducts.map(similarProduct => (
                    <ProductCard key={similarProduct.id} product={similarProduct} />
                ))}
            </section>
        </div>
    );
};

export default ProductDetails;