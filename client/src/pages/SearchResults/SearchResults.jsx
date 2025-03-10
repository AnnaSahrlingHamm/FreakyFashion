import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard"; // Anta att du har en ProductCard-komponent

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  // Hämta söksträngen från URL:en
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") || "";

  // Hämta produkter från API:et eller din databas
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/products?q=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av produkter");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fel:", error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="search-results">
      <h2>Sökresultat för: "{searchTerm}"</h2>
      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>Inga produkter hittades.</p>
      )}
    </div>
  );
};

export default SearchResults;