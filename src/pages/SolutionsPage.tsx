import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Star, Shield, Users, Laptop, Tablet, Smartphone, Truck, Factory, Zap, Building, Phone, Mail, Send, MessageSquare, User } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState<'by-industry' | 'by-product' | 'by-environment'>('by-industry');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    solution: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solution inquiry submitted:', contactForm);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowContactForm(false);
      setContactForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        solution: '',
        message: ''
      });
    }, 3000);
  };

  const industryCategories = [
    {
      title: "Mining & Resources",
      description: "Extreme temperature, dust, and vibration resistance for mining operations",
      icon: "⛏️",
      solutions: ["Heat-resistant laptops", "Dust-proof tablets", "Vehicle-mounted systems"],
      image: "https://images.pexels.com/photos/6595788/pexels-photo-6595788.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Construction",
      description: "Drop-resistant, weatherproof devices for construction environments",
      icon: "🏗️",
      solutions: ["Waterproof tablets", "Impact-resistant laptops", "Field data collection"],
      image: "https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Defence & Security",
      description: "Military-grade security and reliability for critical operations",
      icon: "🛡️",
      solutions: ["Encrypted devices", "Night vision compatible", "Tactical communications"],
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Manufacturing",
      description: "Industrial automation and quality control solutions",
      icon: "🏭",
      solutions: ["Factory floor tablets", "Quality control systems", "Inventory management"],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const productCategories = [
    {
      title: "Rugged Laptops",
      description: "Full-featured computing power in extreme conditions",
      icon: Laptop,
      features: ["Intel i5/i7 processors", "MIL-STD-810H certified", "Hot-swappable batteries", "Sunlight readable displays"],
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Rugged Tablets",
      description: "Portable productivity for mobile workforces",
      icon: Tablet,
      features: ["Android/Windows options", "Barcode scanning", "Long battery life", "Glove-friendly touch"],
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Rugged Handhelds",
      description: "Professional data collection and communication",
      icon: Smartphone,
      features: ["Advanced scanning", "Push-to-talk", "Long-range communication", "Compact design"],
      image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Vehicle Computers",
      description: "Mobile workstations for fleets and field vehicles",
      icon: Truck,
      features: ["Wide voltage input", "GPS integration", "Fleet management", "Multi-camera support"],
      image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const environmentSolutions = [
    {
      title: "Extreme Temperature",
      description: "Operating from -40°C to +70°C",
      icon: "🌡️",
      specs: ["Fanless cooling", "Temperature monitoring", "Thermal management"],
      image: "https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Dust & Water Protection",
      description: "IP65/IP67/IP68 certified devices",
      icon: "💧",
      specs: ["Sealed connectors", "Protective coatings", "Drainage systems"],
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Shock & Vibration",
      description: "Military-standard impact resistance",
      icon: "⚡",
      specs: ["Drop tested to 6 feet", "Vibration damping", "Reinforced chassis"],
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Explosive Atmospheres",
      description: "ATEX/IECEx certified for hazardous areas",
      icon: "🔥",
      specs: ["Intrinsically safe", "Explosion proof", "Zone 1/2 rated"],
      image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/85 to-slate-900/70"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')" }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-[#F4B426] hover:text-[#e6a625] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-[#fab928]/20 border border-[#fab928]/30 rounded-full px-6 py-3 text-[#fab928] text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Complete Solutions Portfolio
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Rugged Technology Solutions for Every Challenge
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive computing solutions designed for the world's most demanding environments, from extreme temperatures to hazardous locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Consult Our Experts
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link 
                to="/downloads"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 text-center"
              >
                Download Solutions Guide
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">500+</div>
                <div className="text-slate-300 text-sm">Global Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">15+</div>
                <div className="text-slate-300 text-sm">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">50+</div>
                <div className="text-slate-300 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">99.8%</div>
                <div className="text-slate-300 text-sm">Reliability Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories Tabs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Find Your Perfect Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive range of rugged computing solutions organized by industry, product type, or environmental requirements
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-2 flex">
              {([
                { id: 'by-industry', label: 'By Industry', icon: Building },
                { id: 'by-product', label: 'By Product Type', icon: Laptop },
                { id: 'by-environment', label: 'By Environment', icon: Shield }
              ] as const).map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#F4B426] to-[#e6a625] text-white shadow-lg transform scale-105'
                        : 'text-slate-600 hover:text-[#F4B426] hover:bg-slate-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'by-industry' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industryCategories.map((category, index) => (
                  <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-2xl mb-2">{category.icon}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F4B426] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {category.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {category.solutions.map((solution, sIndex) => (
                          <div key={sIndex} className="flex items-center text-sm text-slate-700">
                            <Check className="w-3 h-3 text-[#F4B426] mr-2 flex-shrink-0" />
                            {solution}
                          </div>
                        ))}
                      </div>
                      <Link
                        to={`/industries/${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-')}`}
                        className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center"
                      >
                        Explore Solutions
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'by-product' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {productCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <IconComponent className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F4B426] transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                          {category.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {category.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center text-sm text-slate-700">
                              <Check className="w-3 h-3 text-[#F4B426] mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Link
                          to={`/${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-')}`}
                          className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center"
                        >
                          View Products
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'by-environment' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {environmentSolutions.map((solution, index) => (
                  <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-2xl">{solution.icon}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F4B426] transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {solution.specs.map((spec, sIndex) => (
                          <div key={sIndex} className="flex items-center text-sm text-slate-700">
                            <Check className="w-3 h-3 text-[#F4B426] mr-2 flex-shrink-0" />
                            {spec}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowContactForm(true)}
                        className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center"
                      >
                        Get Consultation
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Custom Solutions & Integration Services
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Need something specific? Our engineering team designs custom rugged computing solutions tailored to your unique requirements and environment.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#F4B426] p-2 rounded-lg mr-4 mt-1">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Dedicated Engineering Team</h3>
                    <p className="text-slate-600">Expert engineers work with you to understand requirements and design optimal solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F4B426] p-2 rounded-lg mr-4 mt-1">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">System Integration</h3>
                    <p className="text-slate-600">Seamless integration with your existing infrastructure, software, and workflow.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#F4B426] p-2 rounded-lg mr-4 mt-1">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Rapid Prototyping</h3>
                    <p className="text-slate-600">Quick development and testing of custom solutions to meet tight deadlines.</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-[#F4B426] hover:bg-[#e6a625] text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center"
              >
                Discuss Custom Solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Custom solutions"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Recent Custom Project</h4>
                  <p className="text-slate-700 text-sm">Designed explosion-proof tablet system for offshore oil platform with 99.9% uptime requirement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">Solutions Consultation</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-slate-600 mt-2">Get expert guidance on the best rugged computing solution for your needs</p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                      value={contactForm.name}
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
                      value={contactForm.company}
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
                      value={contactForm.email}
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
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="solution" className="block text-sm font-medium text-slate-700 mb-2">
                    Solution Interest
                  </label>
                  <select
                    id="solution"
                    name="solution"
                    value={contactForm.solution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                  >
                    <option value="">Select a solution category</option>
                    <option value="industry">Industry-Specific Solution</option>
                    <option value="product">Product Recommendation</option>
                    <option value="environment">Environmental Requirements</option>
                    <option value="custom">Custom Solution</option>
                    <option value="integration">System Integration</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors resize-none"
                    placeholder="Tell us about your environment, requirements, expected quantities, timeline, and any specific challenges..."
                  />
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">What You'll Receive:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Personalized solution recommendation
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Technical specifications and pricing
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Implementation timeline
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Free consultation call
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Request Solutions Consultation
                </button>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Consultation Request Sent!</h3>
                <p className="text-slate-600">
                  Our solutions expert will contact you within 24 hours to discuss your requirements.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SolutionsPage;