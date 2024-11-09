import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { append, isNotNil } from 'ramda';
import './spinner.css';
import productsApi from "../apis/products";


const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
      const product = await productsApi.show();
      setProduct(product);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Destructuring product data
  const { name, description, mrp, offerPrice, imageUrls, imageUrl } = product;
  const totalDiscounts = mrp - offerPrice;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);

  // If the image_urls exists, append it with the default image_url
  const combinedImageUrls = isNotNil(imageUrls) ? append(imageUrl, imageUrls) : [imageUrl];

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
            {Array.isArray(imageUrls) && imageUrls.length > 0 ? (
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
