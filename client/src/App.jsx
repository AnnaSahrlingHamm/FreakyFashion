import React from 'react';
// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, CartContext } from "./CartContext"; 
import Index from './pages/Index/Index';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AddProduct from './pages/Admin/AddProduct';
import AllProducts from './pages/Admin/AllProducts';
import Checkout from './pages/Checkout/Checkout';
import SearchResults from './pages/SearchResults/SearchResults';
import Basket from './pages/Basket/Basket';



function App() {
  return (
    <Router>
      <main>
      <CartProvider>
        <Routes>
        
          <Route path="/" element={<Index />} />

          <Route path="/admin/products" element={<AllProducts />} />
 
          <Route path="/admin/add-product" element={<AddProduct />} /> 

          <Route path="/search" element={<SearchResults />} />
          
          <Route path="/products/:slug" element={<ProductDetails />} />

          
          <Route path="/basket" element={<Basket />} /> 

          
          <Route path="/checkout" element={<Checkout />} />

          
          <Route path="*" element={<h2>Sidan hittades inte</h2>} />
        </Routes>
      </CartProvider>
      </main>
    </Router>
  );
}

export default App;