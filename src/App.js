import React from "react";
import Product from "./components/Product"; // Import the Product component

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold mb-4">Smile Cart</h1>
      <Product /> {/* Render the Product component */}
    </div>
  );
};

export default App;
