import React from "react"
import { Route, Routes, BrowserRouter as Router, useRoutes } from "react-router-dom";

import './Styles/index.css';
import './Styles/style.css';

import Navigation from './Components/Navigation.js';
import Body from "./Components/Body";
import ProductBody from "./Components/ProductBody.js";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  )

  const elements = useRoutes([
    {path: '/', element: <HomePage />},
    {path: '/product/:id', element: <ProductPage />}
  ])

  return elements

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
