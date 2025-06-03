import { useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Carousel = ({ images, autoSlide = true, autoSlideInterval = 4500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className='relative w-full max-w-7xl mx-auto'>
        <div className='overflow-hidden relative h-64'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
     
        <button className='absolute top-1/2 left-0 transform -translate-y-1/2  text-white p-2' onClick={prevSlide}>
          <IoIosArrowDropleftCircle className='bg-white rounded-full text-amber-300'/>
        </button>
        <button className='absolute top-1/2 right-0 transform -translate-y-1/2  text-white p-2' onClick={nextSlide}>
          <IoIosArrowDroprightCircle className='bg-white rounded-full text-amber-300'/>
        </button>
        <div className='h-[50px] bg-gradient-to-b from-gray-700'></div>
      </div>    
    </>
  );
};

export default Carousel