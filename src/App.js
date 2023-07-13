import React from "react"
import { Route, Routes, BrowserRouter as Router, useRoutes } from "react-router-dom";

import './Styles/index.css';
import './Styles/style.css';

import Navigation from './Pages/Navigation.js';
import Body from "./Pages/HomePage";
import ProductBody from "./Pages/ProductBody.js";
import CartPage from "./Pages/Cart";
import GalleryPage from "./Pages/Gallery";
import RecentlySold from "./Pages/RecentlySold";
import Category from "./Pages/Category";

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/products" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        
        <Route path="/gallery/" element={<GalleryPage />} />
        <Route path="/gallery/:id" element={<GalleryPage />} />

        <Route path="/recently-sold" element={<RecentlySold />} />

        <Route path="/category/" element={<Category />} />
        <Route path="/category/:category" element={<Category />} />

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
