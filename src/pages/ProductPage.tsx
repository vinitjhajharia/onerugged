import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Check, Shield, Truck, Phone, Mail, ChevronLeft, ChevronRight, ShoppingCart, Heart, Share2, Send, User, Building, MessageSquare } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products.ts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'features' | 'specifications' | 'certifications'>('features');
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    quantity: '1'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const product = getProductBySlug(slug || '');

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = getRelatedProducts(product);

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.gallery.length);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.gallery.length) % product.images.gallery.length);
  };

  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: product.shortDescription,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Product link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Product link copied to clipboard!');
      } catch (clipboardError) {
        console.log('Clipboard error:', clipboardError);
      }
    }
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle enquiry submission here
    console.log('Enquiry submitted:', enquiryForm);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowEnquiry(false);
      setEnquiryForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        quantity: '1'
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEnquiryForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-slate-600">
            <Link to="/" className="hover:text-[#F4B426] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${product.category}`} className="hover:text-[#F4B426] transition-colors capitalize">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-80 lg:h-96 bg-slate-100 rounded-xl overflow-hidden">
                <img
                  src={product.images.gallery[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                
                {product.images.gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-700" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-700" />
                    </button>
                  </>
                )}
                
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F4B426] text-white text-sm font-bold px-3 py-2 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              
              {product.images.gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto">
                  {product.images.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 bg-slate-100 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-[#F4B426]' : 'border-transparent hover:border-slate-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {product.inStock && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      In Stock
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  {product.title}
                </h1>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

              </div>

              {/* Key Features */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Options */}
              <div className="border border-slate-200 rounded-xl p-6">
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowEnquiry(true)}
                    className="w-full bg-[#F4B426] hover:bg-[#e6a625] text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Get Custom Quote
                  </button>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowEnquiry(true)}
                      className="flex-1 border-2 border-slate-300 hover:border-[#F4B426] text-slate-700 hover:text-[#F4B426] py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Save & Enquire
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex-1 border-2 border-slate-300 hover:border-[#F4B426] text-slate-700 hover:text-[#F4B426] py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-sm text-slate-600 mb-2">Need help? Contact our specialists:</p>
                    <div className="flex justify-center gap-4">
                      <a href="tel:+61-1800-RUGGED" className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        +61-1800-RUGGED
                      </a>
                      <a href="mailto:sales@onerugged.au" className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-slate-200">
              <nav className="flex gap-8">
                {(['features', 'specifications', 'certifications'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors capitalize ${
                      activeTab === tab
                        ? 'border-[#F4B426] text-[#F4B426]'
                        : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'features' && (
                <div className="space-y-8">
                  {/* Feature Images Section - Using overview images sequentially */}
                  {product.images.overview && product.images.overview.length > 0 ? (
                    <div className="space-y-12">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Advanced Features</h3>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                          Discover the cutting-edge technology and rugged design that makes this product the ultimate choice for demanding environments.
                        </p>
                      </div>
                      
                      {/* Overview Images - Sequential Display */}
                      <div className="space-y-0">
                        {product.images.overview.map((overviewImage, index) => (
                          <div key={index} className="relative group cursor-pointer">
                            <div className="relative overflow-hidden">
                              <img
                                src={overviewImage}
                                alt={`${product.title} - Feature ${index + 1}`}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Additional Features Grid */}
                      <div className="bg-slate-50 rounded-2xl p-8">
                        <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">Additional Features & Capabilities</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                              <div className="bg-[#F4B426] p-2 rounded-lg mr-3 flex-shrink-0">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Industries & Certifications */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                          <h4 className="text-xl font-bold mb-6 flex items-center">
                            <Building className="w-6 h-6 mr-3 text-[#F4B426]" />
                            Perfect for These Industries
                          </h4>
                          <div className="space-y-3">
                            {product.industries.map((industry, index) => (
                              <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-[#F4B426] rounded-full mr-3"></div>
                                <span className="text-slate-200">{industry}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-white border border-slate-200 rounded-2xl p-8">
                          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                            <Shield className="w-6 h-6 mr-3 text-[#F4B426]" />
                            Certifications & Standards
                          </h4>
                          <div className="space-y-3">
                            {product.certifications.slice(0, 6).map((cert, index) => (
                              <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-[#F4B426] rounded-full mr-3"></div>
                                <span className="text-slate-700">{cert}</span>
                              </div>
                            ))}
                          </div>
                          {product.certifications.length > 6 && (
                            <button
                              onClick={() => setActiveTab('certifications')}
                              className="mt-4 text-[#F4B426] hover:text-[#e6a625] text-sm font-medium transition-colors"
                            >
                              View all {product.certifications.length} certifications →
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Fallback for products without featureImages
                    <>
                      {/* Features with Images Grid */}
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Features List */}
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features & Capabilities</h3>
                          <div className="space-y-4">
                            {product.features.map((feature, index) => (
                              <div key={index} className="flex items-start group">
                                <div className="bg-[#F4B426] p-2 rounded-lg mr-4 mt-1 group-hover:bg-[#e6a625] transition-colors">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <span className="text-slate-900 font-medium text-lg leading-relaxed">{feature}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Industries Section */}
                          <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                            <h4 className="font-semibold text-slate-900 mb-4">Perfect for These Industries</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.industries.map((industry, index) => (
                                <span key={index} className="bg-[#F4B426] text-white text-sm px-3 py-2 rounded-full font-medium">
                                  {industry}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Product Images Gallery */}
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-6">Product Gallery</h3>
                          <div className="space-y-4">
                            {/* Main Feature Image */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                              <img
                                src={product.mainImage}
                                alt={`${product.title} - Main View`}
                                className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                                onClick={() => setSelectedImage(0)}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-sm font-medium">Main Product View</span>
                              </div>
                            </div>
                            
                            {/* Additional Images Grid */}
                            {product.images.gallery.length > 1 && (
                              <div className="grid grid-cols-2 gap-4">
                                {product.images.gallery.slice(1).map((image, index) => (
                                  <div key={index} className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
                                    <img
                                      src={image}
                                      alt={`${product.title} - View ${index + 2}`}
                                      className="w-full h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                                      onClick={() => setSelectedImage(index + 1)}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-2 left-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      View {index + 2}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Certifications Preview */}
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                              <h4 className="font-semibold text-slate-900 mb-4">Certifications & Standards</h4>
                              <div className="grid grid-cols-2 gap-3">
                                {product.certifications.slice(0, 4).map((cert, index) => (
                                  <div key={index} className="flex items-center text-sm text-slate-700">
                                    <Shield className="w-4 h-4 text-[#F4B426] mr-2" />
                                    <span>{cert}</span>
                                  </div>
                                ))}
                              </div>
                              {product.certifications.length > 4 && (
                                <button
                                  onClick={() => setActiveTab('certifications')}
                                  className="mt-3 text-[#F4B426] hover:text-[#e6a625] text-sm font-medium transition-colors"
                                >
                                  View all {product.certifications.length} certifications →
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Feature Highlights Section */}
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-6 text-center">Why Choose {product.title}?</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">Military Grade</h4>
                            <p className="text-slate-300 text-sm">Built to military standards for extreme reliability</p>
                          </div>
                          <div className="text-center">
                            <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Check className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">Proven Performance</h4>
                            <p className="text-slate-300 text-sm">Tested in real-world conditions by professionals</p>
                          </div>
                          <div className="text-center">
                            <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="font-semibold mb-2">Global Support</h4>
                            <p className="text-slate-300 text-sm">Worldwide technical support and warranty coverage</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(product.specifications || product.specs).map(([key, value]) => (
                      <div key={key} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <dt className="font-semibold text-slate-900 mb-3 text-lg capitalize">{key.replace(/_/g, ' ')}</dt>
                        <dd className="text-slate-700 leading-relaxed">
                          {Array.isArray(value) ? (
                            <ul className="space-y-2">
                              {value.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="w-2 h-2 bg-[#F4B426] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <span className="font-medium">{value || 'Not specified'}</span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'certifications' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="bg-slate-50 rounded-lg p-6 text-center">
                      <Shield className="w-12 h-12 text-[#F4B426] mx-auto mb-4" />
                      <h4 className="font-semibold text-slate-900 mb-2">{cert}</h4>
                      <p className="text-sm text-slate-600">Industry standard certification</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/${relatedProduct.slug}`}
                    className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={relatedProduct.mainImage}
                        alt={relatedProduct.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      {relatedProduct.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#F4B426] text-white text-xs font-bold px-2 py-1 rounded-full">
                            {relatedProduct.badge}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-[#F4B426] transition-colors">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {relatedProduct.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-[#F4B426]">
                          {relatedProduct.price}
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Star className="w-4 h-4 text-[#F4B426] fill-current mr-1" />
                          <span>{relatedProduct.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">Product Enquiry</h3>
                <button
                  onClick={() => setShowEnquiry(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-slate-600 mt-2">Get a customized quote for <span className="font-semibold text-[#F4B426]">{product.title}</span></p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleEnquirySubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={enquiryForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={enquiryForm.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={enquiryForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={enquiryForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                    Quantity Required
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={enquiryForm.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 10, 25, 50, 100, 'Custom'].map(num => (
                      <option key={num} value={num}>{num}{typeof num === 'number' && num > 1 ? ' Units' : typeof num === 'number' ? ' Unit' : ''}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={enquiryForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors resize-none"
                    placeholder="Tell us about your specific requirements, environment conditions, or any questions you have about this product..."
                  />
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Our product specialist will review your requirements</li>
                    <li>• You'll receive a detailed quote within 24 hours</li>
                    <li>• We'll include technical specifications and support options</li>
                    <li>• Free consultation on the best solution for your needs</li>
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowEnquiry(false)}
                    className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-700 py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#F4B426] hover:bg-[#e6a625] text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Enquiry
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Enquiry Sent Successfully!</h3>
                <p className="text-slate-600 mb-4">
                  Thank you for your interest in the {product.title}. Our product specialist will contact you within 24 hours with a detailed quote.
                </p>
                <div className="bg-[#F4B426]/10 border border-[#F4B426]/20 rounded-lg p-4">
                  <p className="text-sm text-[#F4B426] font-medium">
                    Reference ID: {product.id.toUpperCase()}-{Date.now().toString().slice(-6)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductPage;