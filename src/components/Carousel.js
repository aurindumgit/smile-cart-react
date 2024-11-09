import { useState, useEffect } from "react";

const Carousel = ({ imageUrls, title }) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    }, 1500); // Change image every 1.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [imageUrls.length]);

  
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Carousel Image */}
      <div className="flex items-center justify-center mb-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          &lt;
        </button>

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
          &gt;
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex space-x-2">
        {imageUrls.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-black" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
