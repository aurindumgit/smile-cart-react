import React, { useState, useEffect } from "react";
import productsApi from "../apis/products";
import Carousel from "./Carousel";
import { append, isNotNil } from "ramda";
import "./spinner.css";
import { useParams, useHistory } from "react-router-dom";

const Product = () => {
  const history = useHistory();
  // const [isError, setIsError] = useState(false);
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchProduct = async () => {
    try {
      const response = await productsApi.show(slug);
      setProduct(response);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct, slug]);

  const { name, description, mrp, offerPrice, imageUrls, imageUrl } = product;
  const totalDiscounts = mrp - offerPrice;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);
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
      <div className="flex items-center gap-10">
        <button
          className="neeto-ui-bg-gray-200 neeto-ui-text-black neeto-ui-rounded-full px-4 py-2 hover:neeto-ui-bg-gray-400"
          onClick={history.goBack}
        >
          Go Back
        </button>
        <p className="py-2 text-4xl font-semibold">{name}</p>
      </div>
      <hr className="border-2 border-black" />

      <div className="flex gap-4 mt-6">
        <div className="w-2/5">
          <div className="flex justify-center gap-6">
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
