import React from "react"
import { Route, Routes, BrowserRouter as Router, useRoutes } from "react-router-dom";

import './Styles/index.css';
import './Styles/style.css';

import Navigation from './Pages/Navigation.js';
import Body from "./Pages/HomePage";
import ProductBody from "./Pages/ProductBody.js";
import CartPage from "./Pages/Cart";

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/products" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="/gallery/:id" element={<HomePage />} />

      </Routes>
    </Router>
  )

}

function HomePage() {
  return (
    <div className="App">
      <Navigation />
      <Body />
    </div>
  );
}

function ProductPage() {
  return (
    <div className="App">
      <Navigation />
      <ProductBody />
    </div>
  )
}

export default App;
export {ProductPage};
