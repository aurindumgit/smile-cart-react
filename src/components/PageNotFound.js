import React from "react";

const PageNotFound = () => (
  <div className="absolute left-1/3 top-1/3">
    <p>The page you're looking for can't be found</p>
    <a
      href="/products"
      className="bg-neutral-800 hover:bg-neutral-950 text-white py-2 px-4 rounded"
    >
      Back to home
    </a>
  </div>
);

export default PageNotFound;
