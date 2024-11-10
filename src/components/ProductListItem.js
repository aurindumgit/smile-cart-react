import React from "react";
import { Link } from "react-router-dom";

const ProductListItem = ({ imageUrl, name, offerPrice, slug }) => (
  <Link
    className="border rounded-xl flex w-48 flex-col items-center justify-between p-4"
    to={`products/${slug}`}
  >
    <img alt={name} className="h-40 w-40" src={imageUrl} />
    <p className="text-center font-semibold">{name}</p>
    <p>${offerPrice}</p>
  </Link>
);

export default ProductListItem;
