import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Built for the Extreme',
      subtitle: 'Professional rugged laptops and tablets certified for heat, dust, and the harshest industrial environments.',
      cta: 'Request a Quote',
      productImage: '/image (1).jpg'
    },
    {
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Rugged Tablets',
      subtitle: 'Field-ready tablets that survive drops, weather, and extreme conditions while keeping your teams connected.',
      cta: 'View Tablet Solutions',
      productImage: '/images2.png'
    },
    {
      image: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Rugged Phones',
      subtitle: 'Professional smartphones that keep working when consumer devices fail in extreme conditions.',
      cta: 'Explore Phones',
      productImage: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden h-[32rem] sm:h-[36rem] md:h-[40rem] lg:h-[48rem]">
      {/* Slider Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/85 to-slate-900/70"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button
          onClick={prevSlide}
          className="ml-4 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button
          onClick={nextSlide}
          className="mr-4 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#fab928]/20 border border-[#fab928]/30 rounded-full px-3 sm:px-4 py-2 text-[#fab928] text-xs sm:text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Certified for Extreme Conditions
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {slides[currentSlide].title.split(' ').map((word, index) => (
                  <span key={index} className={index === slides[currentSlide].title.split(' ').length - 1 ? 'block text-[#fab928]' : ''}>
                    {word}{index < slides[currentSlide].title.split(' ').length - 1 ? ' ' : ''}
                  </span>
                ))}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
              <div className="flex items-center text-slate-300 whitespace-nowrap">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-[#fab928]" />
                MIL-STD-810H Certified
              </div>
              <div className="flex items-center text-slate-300 whitespace-nowrap">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-[#fab928]" />
                IP67 Protection
              </div>
              <div className="flex items-center text-slate-300 whitespace-nowrap">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-[#fab928]" />
                3-Year Warranty
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm lg:text-base">
                {slides[currentSlide].cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 text-xs sm:text-sm lg:text-base">
                View Products
              </button>
            </div>
          </div>

          {/* Hero Product Image */}
          <div className="relative lg:order-last">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <img
                src={slides[currentSlide].productImage}
                alt={`${slides[currentSlide].title} - Rugged device`}
                className="w-full h-auto drop-shadow-2xl rounded-lg"
              />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500/10 to-slate-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-8 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 bg-blue-500/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-8 lg:-left-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-24 lg:h-24 bg-slate-600/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#F4B426]' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export { Hero };