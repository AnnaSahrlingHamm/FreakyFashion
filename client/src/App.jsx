import React from 'react';
import './App.css';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Index from './pages/Index/Index';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AddProduct from './pages/Admin/AddProduct';
import AllProducts from './pages/Admin/AllProducts';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/">
          <h1>Välkommen till Freaky Fashion!</h1>
        </Link>
        <nav>
          <Link to="/products">Produkter</Link>
          <Link to="/basket" id="cart">Varukorg</Link>
        </nav>
      </header>
      <main>
        <Routes>
          {/* Start-sidan */}
          <Route path="/" element={<Index />} />

          {/* Alla produkter */}
          <Route path="/admin/products" element={<AllProducts />} />

          {/* Enskild produkt */}
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* Lägg till produkt (admin eller användare med rättigheter) */}
          <Route path="/admin/add-product" element={<AddProduct />} /> 

          {/* Varukorg */}
          {/* <Route path="/cart" element={<Cart />} /> */}

          {/* Kassa */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Fallback om ingen route matchar */}
          <Route path="*" element={<h2>Sidan hittades inte</h2>} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;