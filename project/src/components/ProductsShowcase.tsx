import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, Shield, Check, ArrowRight } from 'lucide-react';
import { getFeaturedProducts, categories } from '../data/products';

const ProductsShowcase = () => {
  const featuredProducts = getFeaturedProducts();
  
  console.log("Featured products:", featuredProducts.length);
  console.log("All categories:", categories);

  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Rugged Products
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Engineered for extreme reliability in the harshest environments
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/${category.slug}`}
              className="group bg-slate-50 hover:bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              <div className="aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F4B426] transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-sm text-slate-600 bg-slate-200 px-2 py-1 rounded-full">
                    {category.count} products
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="flex items-center text-[#F4B426] font-semibold">
                  Browse Collection <ChevronRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Featured Products</h3>
            <Link to="/laptops" className="text-[#F4B426] hover:text-[#e6a625] font-medium flex items-center mt-2 md:mt-0">
              View All Products <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.length > 0 ? (
              featuredProducts.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  to={`/${product.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
                >
                  <div className="aspect-video bg-slate-50 overflow-hidden relative">
                    <img
                      src={product.mainImage || product.image_link}
                      alt={product.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-[#F4B426] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-[#F4B426] transition-colors">
                      {product.title}
                    </h4>
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(Math.floor(product.rating || 5))].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-[#F4B426] fill-current" />
                        ))}
                        {product.rating % 1 > 0 && (
                          <Star className="h-4 w-4 text-[#F4B426] fill-[#F4B426]/50" />
                        )}
                      </div>
                      <span className="text-xs text-slate-600 ml-2">({product.reviews || 0} reviews)</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {product.shortDescription || product.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#F4B426] mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#F4B426] font-bold">{product.price || "Contact for Quote"}</span>
                      <span className="inline-flex items-center text-sm font-medium text-[#F4B426]">
                        Details <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 bg-slate-50 p-8 rounded-xl text-center">
                <Shield className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Featured Products Coming Soon</h4>
                <p className="text-slate-600">
                  Our featured product collection is being updated. Please check back soon or browse our product categories.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Custom Rugged Solutions?</h3>
                <p className="text-slate-300 md:text-lg">
                  Our engineering team can develop tailored devices for your specific industry needs
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-block bg-[#F4B426] hover:bg-[#e6a625] text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors duration-300"
                >
                  Request Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;