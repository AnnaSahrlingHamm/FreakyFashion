import React, { useState, useEffect } from 'react';
import ProductTable from '../../components/AdminComponents/ProductTable';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  // Hämta produkter från ett API eller en databas
  useEffect(() => {
    // Exempel på att hämta produkter från ett API
    const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/products');
          if (!response.ok) {
            throw new Error(`HTTP-fel! Status: ${response.status}`);
          }
          const data = await response.json();
      
          // Säkerställ att datan är en array innan den sätts i state
          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            console.error("API returnerade ingen array:", data);
            setProducts([]); // Undvik att state blir undefined
          }
        } catch (error) {
          console.error('Fel vid hämtning av produkter:', error);
          setProducts([]); // Sätt en tom array så att komponenten inte kraschar
        }
      };
      

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Alla produkter</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default AllProducts;