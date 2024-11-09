import React, { useState, useEffect } from 'react';
import Carousel from './Carousel'; // Import the Carousel component
import axios from "axios";
import { append, isNotNil } from 'ramda'; // Import append and isNotNil from ramda
import './spinner.css';

const Product = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "https://smile-cart-backend-staging.neetodeployapp.com/products/infinix-inbook-2"
      );
      setProduct(response.data);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setIsLoading(false); // Set isLoading to false after the fetch is complete
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Destructuring product data and renaming keys to camelCase
  const { name, description, mrp, offer_price: offerPrice, image_urls: imageUrls, image_url: imageUrl } = product;
  const totalDiscounts = mrp - offerPrice;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);

  // If the image_urls exists, append it with the default image_url
  const combinedImageUrls = isNotNil(imageUrls) ? append(imageUrl, imageUrls) : [imageUrl];

  // Loader state rendering (custom loader)
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="px-6 pb-6">
      {/* Product title and separator */}
      <div>
        <p className="py-2 text-4xl font-semibold">{name}</p>
        <hr className="border-2 border-black" />
      </div>

      {/* Product details and carousel */}
      <div className="flex gap-4 mt-6">
        <div className="w-2/5">
          <div className="flex justify-center gap-16">
            {/* Conditionally render the Carousel if imageUrls exist */}
            {isNotNil(imageUrls) ? (
              <Carousel imageUrls={combinedImageUrls} title={name} />
            ) : (
              <img alt={name} className="w-48" src={imageUrl} />
            )}
          </div>
        </div>

        <div className="w-3/5 space-y-4">
          <p>{description}</p>
          <p>MRP: {mrp}</p>
          <p className="font-semibold">Offer price: {offerPrice}</p>
          <p className="font-semibold text-green-600">{discountPercentage}% off</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
