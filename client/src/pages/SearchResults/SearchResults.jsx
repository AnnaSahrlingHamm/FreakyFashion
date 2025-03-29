import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductDisplay/ProductDisplay"; 
import IconLinks from "../../components/IconLinks/IconLinks";
import Footer from "../../components/Footer/Footer";

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
    <div className="container">
        <Header />
        <NavBar />
      <div className="search-results">
        <h2>Sökresultat för: "{searchTerm}"</h2>
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductDisplay key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>Inga produkter hittades.</p>
        )}
      </div>
        <IconLinks />
        <Footer />
    </div>
  );
};

export default SearchResults;