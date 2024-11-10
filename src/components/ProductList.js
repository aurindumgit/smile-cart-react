import React, { useState, useEffect } from "react";
import productsApi from "../apis/products";
import "./spinner.css"; // Ensure this file contains the necessary spinner styles
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await productsApi.fetch(); // Ensure this API call is correct
      console.log(response);
      setProducts(response.products); // Adjust this based on the actual API response structure
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="spinner"></div> {/* Ensure your spinner styles are correct */}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="m-2">
        <h1 className="mx-6 mb-2 mt-6 font-semibold text-2xl">
          Smile Cart
        </h1>
        <hr className="bg-black h-1" />
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <ProductListItem key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
  
};

export default ProductList;
