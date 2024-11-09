import React from 'react';
import Carousel from './Carousel'; // Import the Carousel component

const Product = () => {
  const imageUrls = [
    "https://ik.imagekit.io/d9mvewbju/SmileCart/thumbnail_61_7PaLfb.jpg",
  "https://ik.imagekit.io/d9mvewbju/SmileCart/1_yuRfcETI5.jpg",
  "https://ik.imagekit.io/d9mvewbju/SmileCart/2_HoKD2OblW.png",
  "https://ik.imagekit.io/d9mvewbju/SmileCart/3_-6sHqwicC.png",
  ];

  return (
    <div className="px-6 pb-6">
      <div>
        <p className="py-2 text-4xl font-semibold">Infinix INBOOK</p>
        <hr className="border-2 border-black" />
      </div>
      <div className="flex gap-4 mt-6">
        <div className="w-2/5">
          {/* Carousel component with passed imageUrls */}
          <Carousel imageUrls={imageUrls} title="Infinix INBOOK" />
        </div>
        <div className="w-3/5 space-y-4">
          <p>
            Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year Warranty.
          </p>
          <p>MRP: $395.97</p>
          <p className="font-semibold">Offer price: $374.43</p>
          <p className="font-semibold text-green-600">6% off</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
