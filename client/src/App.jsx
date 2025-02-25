import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AddProduct from './pages/AddProduct/AddProduct';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Min E-handel</h1>
        </Link>
        <nav>
          <Link to="/products">Produkter</Link>
          <Link to="/cart">Varukorg</Link>
        </nav>
      </header>
      <main>
        <Routes>
          {/* Start-sidan */}
          <Route index element={<Index />} />

          {/* Alla produkter */}
          <Route path="/products" element={<Products />} />

          {/* Enskild produkt */}
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* Lägg till produkt (admin eller användare med rättigheter) */}
          <Route path="/add-product" element={<AddProduct />} />

          {/* Varukorg */}
          <Route path="/cart" element={<Cart />} />

          {/* Kassa */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Fallback om ingen route matchar */}
          <Route path="*" element={<h2>Sidan hittades inte</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;


  /* return (
    <>
      <div>
          <ProductCard/>
      </div>
    </>
  ) */

/*   return (
    <>
      <div>
          <Spots/>
      </div>
    </>
  ) */

/*   return (
    <>
      <div>
          <Footer/>
      </div>
    </>
  ) */

 /*  return (
    <>
      <div>
          <Header/>
      </div>
    </>
  ) */

  /* return (
    <>
      <div>
          <Hero/>
      </div>
    </>
  ) */
