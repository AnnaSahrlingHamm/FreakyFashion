import React, { useState, useEffect, useMemo } from "react";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import styles from "./SearchResultsContainer.module.css";

const SearchResultsContainer = ({ searchTerm }) => {
  console.log("[SearchResultsContainer] Initializing with searchTerm:", searchTerm);
    
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("[useEffect] searchTerm changed:", searchTerm);
    
    if (!searchTerm) {
      console.log("[useEffect] Empty searchTerm, clearing products");
      setProducts([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    console.log("[useEffect] New fetch controller created");

    const fetchProducts = async () => {
      console.log("[fetchProducts] Starting fetch for:", searchTerm);
      setLoading(true);
      try {
        const apiUrl = `http://localhost:8000/api/products?q=${encodeURIComponent(searchTerm)}`;
        console.log("[fetchProducts] Fetching from:", apiUrl);
        
        const response = await fetch(apiUrl, { signal });
        console.log("[fetchProducts] Response status:", response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("[fetchProducts] Raw API response:", data);
        
        const results = Array.isArray(data) ? data : data.products || [];
        console.log("[fetchProducts] Processed results:", results);
        
    
        setProducts(results);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error("[fetchProducts] Fetch error:", err);
          setError(err.message);
        } else {
          console.log("[fetchProducts] Request was aborted");
        }
      } finally {
        console.log("[fetchProducts] Fetch completed");
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchProducts, 300);
    console.log("[useEffect] Set debounce timer (300ms)");
    
    return () => {
      console.log("[useEffect] Cleanup - aborting fetch and clearing timer");
      controller.abort();
      clearTimeout(timer);
    };
  }, [searchTerm]);

  console.log("[Render] Current state:", {
    loading,
    error,
    productCount: products.length,
    products
  });

  const productList = useMemo(() => {
    return products.map(product => ({
      ...product,
      isCarouselItem: false
    })).map(product => (
      <ProductDisplay 
        key={product.id} 
        products={[product]}
      />
    ));
  }, [products]);

  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.title}>Sökresultat för "{searchTerm}"</h2>

      {loading && <p className={styles.loading}>Laddar...</p>}
      {error && <p className={styles.error}>Fel: {error}</p>}

      {!loading && !error && products.length === 0 && searchTerm && (
        <p className={styles.noResults}>Inga produkter matchade din sökning.</p>
      )}

      <div className={styles.resultsGrid}>
        {productList}
      </div>
    </div>
  );
};

export default SearchResultsContainer;