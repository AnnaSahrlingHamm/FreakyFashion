import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductDetails = () => {
    const { id } = useParams(); // Hämta produktens ID från URL:en
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        // Hämta den enskilda produkten
        fetch(`/api/products/${slug}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Fel vid hämtning av produkt:", error));

        // Hämta liknande produkter (t.ex. produkter från samma kategori)
        fetch(`/api/products/${slug}/similar`)
            .then(response => response.json())
            .then(data => setSimilarProducts(data))
            .catch(error => console.error("Fel vid hämtning av liknande produkter:", error));
    }, [slug]);

    if (!product) return <p>Laddar produkt...</p>;

    return (
        <div>
            <h2>Produktdetaljer</h2>

            {/* Huvudproduktens detaljer */}
            <ProductCard product={product} />

            {/* Sektion för liknande produkter */}
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
