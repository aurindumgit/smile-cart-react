import { useState } from "react";

const Carousel = ({ imageUrls, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
      >
        &lt; {/* Left Arrow */}
      </button>

      {/* Image */}
      <img
        alt={title}
        className="max-w-56 h-56 max-h-56 w-56 mx-4"
        src={imageUrls[currentIndex]}
      />

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
      >
        &gt; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
