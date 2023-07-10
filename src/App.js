import React from "react"
import './Styles/index.css';
import './Styles/style.css';

import Navigation from './Components/Navigation.js';
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
    </div>
  );
}

export default App;
