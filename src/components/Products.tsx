import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products, categories, getFeaturedProducts } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const categoryFilter = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'laptops', name: 'Laptops', count: products.filter(p => p.category === 'laptops').length },
    { id: 'tablets', name: 'Tablets', count: products.filter(p => p.category === 'tablets').length },
    { id: 'phones', name: 'Handhelds', count: products.filter(p => p.category === 'phones').length },
    { id: 'vehicle', name: 'Vehicle PCs', count: products.filter(p => p.category === 'vehicle').length }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const featuredProducts = getFeaturedProducts();
  const featuredProduct = featuredProducts[0]; // Get first featured product

  // Helper functions for carousel
  const getProductsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3; // desktop
    if (width >= 768) return 2; // tablet
    return 1; // mobile
  };

  const [productsPerSlide, setProductsPerSlide] = useState(getProductsPerSlide());

  useEffect(() => {
    const handleResize = () => setProductsPerSlide(getProductsPerSlide());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [productsPerSlide, activeCategory]);

  const getProductSlides = (products: any[]) => {
    const slides = [];
    
    for (let i = 0; i < products.length; i += productsPerSlide) {
      slides.push(products.slice(i, i + productsPerSlide));
    }
    
    return slides;
  };

  const nextSlide = () => {
    const maxSlides = getProductSlides(filteredProducts).length;
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="products" className="pb-6 md:pb-20 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center bg-[#fab928]/10 border border-[#fab928]/20 rounded-full px-6 py-2 text-[#fab928] text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Professional Grade Equipment
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Our Product Range
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Built to withstand the most demanding environments while delivering uncompromising performance.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-1 md:p-2 flex overflow-x-auto max-w-full">
            {categoryFilter.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentSlide(0);
                }}
                className={`px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#F4B426] to-[#e6a625] text-white shadow-lg transform md:scale-105'
                    : 'text-slate-600 hover:text-[#F4B426] hover:bg-slate-50'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid/Carousel */}
        <div className="relative px-6 md:px-12 lg:px-16">
          {/* Carousel with multiple products per slide */}
          <div className="w-full relative">
            {/* Navigation Arrows - Outside Products Area */}
            {getProductSlides(filteredProducts).length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="absolute -left-6 md:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= getProductSlides(filteredProducts).length - 1}
                  className="absolute -right-6 md:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                </button>
              </>
            )}
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {getProductSlides(filteredProducts).map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {slide.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-4 md:mt-6">
              <div className="flex space-x-2">
                {getProductSlides(filteredProducts).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-[#fab928] w-6' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-16">
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#fab928] rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#235faa] rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                Need Help Choosing the Right Device?
              </h3>
              <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 text-slate-300 max-w-2xl mx-auto">
                Our rugged device specialists will help you find the perfect solution for your specific requirements and environment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
                  Get Expert Consultation
                </button>
                <button className="border-2 border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800 text-sm md:text-base">
                  Download Product Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#fab928]/30 hover:-translate-y-2">
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img
          src={product.mainImage}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Badge */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <span className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full shadow-lg">
            {product.badge}
          </span>
        </div>
        
        {/* Icon */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 px-2 py-1 rounded-lg text-xs font-medium text-slate-700 capitalize">
          {product.category}
        </div>
        
        {/* Rating */}
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#F4B426] transition-colors mb-4">
          {product.title}
        </h3>
        
        <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="space-y-2 mb-4 md:mb-6">
          {product.features.slice(0, 3).map((feature: string, index: number) => (
            <div key={index} className="flex items-center text-xs md:text-sm text-slate-700">
              <Check className="w-4 h-4 text-[#F4B426] mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
          {product.industries.map((industry: string, index: number) => (
            <span key={index} className="bg-slate-100 text-slate-600 text-xs px-2 md:px-3 py-1 rounded-full">
              {industry}
            </span>
          ))}
        </div>

        <div className="flex gap-2 md:gap-3">
          <button className="bg-[#F4B426] hover:bg-[#e6a625] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 flex-1 text-xs md:text-sm transform hover:scale-105">
            Get Quote
          </button>
          <Link
            to={`/${product.slug}`}
            className="border-2 border-slate-300 hover:border-[#F4B426] text-slate-700 hover:text-[#F4B426] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-xs md:text-sm text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;