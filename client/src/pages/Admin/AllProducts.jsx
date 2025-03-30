import React, { useState, useEffect } from 'react';
import styles from '../../components/AdminComponents/AdminLayout.module.css';
import AdminHeader from '../../components/AdminComponents/AdminHeader';
import AdminLeftBar from '../../components/AdminComponents/AdminLeftBar';
import ProductTable from '../../components/AdminComponents/ProductTable';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Är du säker på att du vill ta bort denna produkt?')) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP-fel! Status: ${response.status}`);
      }

      // Ta bort produkten från state om borttagningen lyckades
      setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
    } catch (error) {
      console.error('Fel vid borttagning av produkt:', error);
      setError('Kunde inte ta bort produkten. Försök igen.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP-fel! Status: ${response.status}`);
        }
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API returnerade ingen array:", data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Fel vid hämtning av produkter:', error);
        setError('Kunde inte hämta produkter. Försök igen.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className={styles.adminLayout}>
      <AdminHeader />
      <div className={styles.adminContainer}>
        <AdminLeftBar />
    <div className = {styles.adminContent}>
      <h1>Alla produkter</h1>
      {isLoading && <p>Laddar...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ProductTable 
        products={products} 
        onDeleteProduct={handleDeleteProduct}
        isLoading={isLoading}
      />
    </div>
    </div>
    </div>
    </div>
  );
};

export default AllProducts;