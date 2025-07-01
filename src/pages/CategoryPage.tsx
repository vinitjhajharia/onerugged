import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Filter, Grid, List, Star, Check, ArrowRight } from 'lucide-react';
import { getProductsByCategory, categories } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  
  // Extract category from pathname
  const currentCategory = category || location.pathname.slice(1);
  
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categoryData = categories.find(cat => cat.id === currentCategory);
  const products = getProductsByCategory(currentCategory || '');

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return b.featured ? 1 : -1;
    }
  });

  const filteredProducts = sortedProducts.filter(product => {
    if (priceRange === 'all') return true;
    const price = parseInt(product.price.replace(/[^0-9]/g, ''));
    switch (priceRange) {
      case 'under-1000':
        return price < 1000;
      case '1000-2000':
        return price >= 1000 && price <= 2000;
      case '2000-3000':
        return price >= 2000 && price <= 3000;
      case 'over-3000':
        return price > 3000;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Filters & Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-[#F4B426] hover:text-[#e6a625] mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              {categoryData.name}
            </h1>
            <p className="text-lg text-slate-600">
              {categoryData.description}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center text-slate-600 hover:text-[#F4B426] transition-colors"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </button>
                
                <div className="hidden lg:flex items-center gap-4">
                  <label className="text-sm font-medium text-slate-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                  <label className="text-sm font-medium text-slate-700">Price:</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426]"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000-3000">$2,000 - $3,000</option>
                    <option value="over-3000">Over $3,000</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-600">
                  {filteredProducts.length} products found
                </span>
                
                <div className="flex items-center border border-slate-300 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-[#F4B426] text-white' : 'text-slate-600 hover:text-[#F4B426]'} transition-colors`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-[#F4B426] text-white' : 'text-slate-600 hover:text-[#F4B426]'} transition-colors`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-6 pt-6 border-t border-slate-200 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Price Range:</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426]"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="2000-3000">$2,000 - $3,000</option>
                    <option value="over-3000">Over $3,000</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid/List */}
          <div className={viewMode === 'grid' 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }>
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProductCard = ({ product, viewMode }: { product: any; viewMode: 'grid' | 'list' }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto">
            <img
              src={product.mainImage}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                {product.badge && (
                  <span className="inline-block bg-[#F4B426] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {product.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
              </div>
            </div>
            
            <p className="text-slate-600 mb-4 leading-relaxed">{product.shortDescription}</p>
            
            <div className="space-y-2 mb-4">
              {product.features.slice(0, 3).map((feature: string, index: number) => (
                <div key={index} className="flex items-center text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#F4B426] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {product.industries.slice(0, 3).map((industry: string, index: number) => (
                <span key={index} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                  {industry}
                </span>
              ))}
            </div>

            <Link
              to={`/${product.slug}`}
              className="inline-flex items-center text-[#F4B426] hover:text-[#e6a625] font-semibold transition-colors"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.mainImage}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#F4B426] text-white text-xs font-bold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
        </div>
        
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">{product.shortDescription}</p>

        <div className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature: string, index: number) => (
            <div key={index} className="flex items-center text-sm text-slate-700">
              <Check className="w-4 h-4 text-[#F4B426] mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.industries.slice(0, 3).map((industry: string, index: number) => (
            <span key={index} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
              {industry}
            </span>
          ))}
        </div>

        <Link
          to={`/${product.slug}`}
          className="block w-full bg-[#F4B426] hover:bg-[#e6a625] text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;