import { useState, useEffect } from 'react';
import Input from './ui/Input';
import hero from '../assets/images/hero.jpg';
import webpage1 from '../assets/images/webpage1.jpg';
import webpage2 from '../assets/images/webpage2.jpg';

const images = [hero, webpage1, webpage2];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Shop Everything
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Discover amazing products at unbeatable prices
        </p>
        <div className="w-full max-w-md">
          <Input 
            variant="search"
            type="text" 
            placeholder="Search products..."
            className="text-lg"
            icon
          />
        </div>
      </div>
    </div>
  );
}