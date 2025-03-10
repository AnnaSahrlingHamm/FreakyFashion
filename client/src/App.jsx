import React from 'react';
import './App.css';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import { CartProvider } from "./CartContext"; // Importera CartProvider
import Index from './pages/Index/Index';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AddProduct from './pages/Admin/AddProduct';
import AllProducts from './pages/Admin/AllProducts';
import Checkout from './pages/Checkout/Checkout';
import SearchResults from './pages/SearchResults/SearchResults';
import Basket from './pages/Basket/Basket';



function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/">
          <h1>Välkommen till Freaky Fashion!</h1>
        </Link>
        <nav>
          <Link to="/products">Produkter</Link>
          <Link to="/basket" id="basket">Varukorg</Link>
        </nav>
      </header>
      <main>
      <CartProvider>
        <Routes>
          {/* Start-sidan */}
          <Route path="/" element={<Index />} />

          {/* Alla produkter */}
          <Route path="/admin/products" element={<AllProducts />} />

          {/* Lägg till produkt (admin eller användare med rättigheter) */}
          <Route path="/admin/add-product" element={<AddProduct />} /> 

          <Route path="/search" element={<SearchResults />} />
          
          <Route path="/products/:slug" element={<ProductDetails />} />

          {/* Varukorg */}
          <Route path="/basket" element={<Basket />} /> 

          {/* Kassa */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Fallback om ingen route matchar */}
          <Route path="*" element={<h2>Sidan hittades inte</h2>} />
        </Routes>
      </CartProvider>
      </main>
    </HashRouter>
  );
}

export default App;