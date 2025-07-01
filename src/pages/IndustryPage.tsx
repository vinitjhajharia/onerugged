import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Star, Shield, Users, Phone, Mail, Send, User, Building, MessageSquare, TrendingUp, Award, Target } from 'lucide-react';
import { getIndustryData } from '../data/industries';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface IndustryPageProps {
  industry: string;
}

const IndustryPage: React.FC<IndustryPageProps> = ({ industry }) => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: '',
    interests: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const industryData = getIndustryData(industry);

  if (!industryData) {
    return <div>Industry not found</div>;
  }

  // Get relevant products for this industry
  const relevantProducts = products.filter(product => 
    industryData.products.includes(product.id)
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInquiryForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setInquiryForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Industry inquiry submitted:', inquiryForm);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowInquiry(false);
      setInquiryForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        message: '',
        interests: []
      });
    }, 3000);
  };

  const iconComponents: { [key: string]: React.ElementType } = {
    thermometer: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    shield: Shield,
    zap: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    wifi: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    'cloud-rain': () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    wind: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    signal: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    'wifi-off': () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    battery: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    'file-text': () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    settings: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    'shield-check': Shield,
    lock: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    mountain: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    radio: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    droplets: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    clock: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    'git-merge': () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    target: Target,
    satellite: () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>,
    'shield-alert': Shield,
    'cloud-lightning': () => <div className="w-6 h-6 bg-[#F4B426] rounded-full"></div>
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${industryData.heroImage}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/85 to-slate-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center text-[#F4B426] hover:text-[#e6a625] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center bg-[#fab928]/20 border border-[#fab928]/30 rounded-full px-6 py-2 text-[#fab928] text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Industry Solutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {industryData.heroTitle}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              {industryData.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowInquiry(true)}
                className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Industry Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                Download Solutions Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Understanding {industryData.name} Challenges
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {industryData.description}
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryData.challenges.map((challenge, index) => {
              const IconComponent = iconComponents[challenge.icon] || Shield;
              return (
                <div key={index} className="group bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
                  <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-[#F4B426] transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our {industryData.name} Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Purpose-built technology solutions designed specifically for the unique demands of your industry
            </p>
          </div>

          <div className="space-y-16">
            {industryData.solutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-xl font-bold">{solution.title}</h4>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="bg-[#F4B426] p-1 rounded-full mr-3">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setShowInquiry(true)}
                    className="bg-[#F4B426] hover:bg-[#e6a625] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#F4B426]/20 border border-[#F4B426]/30 rounded-full px-4 py-2 text-[#F4B426] text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Success Story
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {industryData.caseStudy.title}
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-[#F4B426] mb-2">The Challenge</h3>
                <p className="text-slate-300 mb-4">{industryData.caseStudy.challenge}</p>
                
                <h3 className="font-semibold text-[#F4B426] mb-2">Our Solution</h3>
                <p className="text-slate-300">{industryData.caseStudy.solution}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {industryData.caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-[#F4B426] mx-auto mb-2" />
                    <p className="text-sm text-slate-300">{result}</p>
                  </div>
                ))}
              </div>
              
              <blockquote className="bg-white/10 rounded-xl p-6 border-l-4 border-[#F4B426]">
                <p className="text-lg italic mb-4">"{industryData.caseStudy.testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#F4B426] rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{industryData.caseStudy.testimonial.author}</div>
                    <div className="text-slate-400 text-sm">{industryData.caseStudy.testimonial.position}</div>
                    <div className="text-[#F4B426] text-sm font-medium">{industryData.caseStudy.company}</div>
                  </div>
                </div>
              </blockquote>
            </div>
            
            <div className="relative">
              <img
                src={industryData.caseStudy.image}
                alt="Case study"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Recommended Products for {industryData.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our most popular rugged devices specifically configured and tested for your industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relevantProducts.map((product) => (
              <div key={product.id} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.mainImage}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F4B426] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#F4B426] fill-current" />
                      ))}
                      <span className="ml-2 text-sm">({product.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F4B426] transition-colors mb-3">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {product.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#F4B426] mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      to={`/${product.slug}`}
                      className="flex-1 bg-[#F4B426] hover:bg-[#e6a625] text-white py-3 px-4 rounded-lg font-semibold transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => setShowInquiry(true)}
                      className="flex-1 border-2 border-slate-300 hover:border-[#F4B426] text-slate-700 hover:text-[#F4B426] py-3 px-4 rounded-lg font-semibold transition-colors text-center"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your {industryData.name} Operations?
              </h2>
              <p className="text-xl opacity-90">
                Get a customized solution recommendation and pricing for your specific requirements
              </p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleInquirySubmit} className="space-y-6">
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
                      value={inquiryForm.name}
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
                      value={inquiryForm.company}
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
                      value={inquiryForm.email}
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
                      value={inquiryForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {industryData.solutions.map((solution, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={inquiryForm.interests.includes(solution.title)}
                          onChange={() => handleInterestChange(solution.title)}
                          className="mr-2 h-4 w-4 text-[#F4B426] focus:ring-[#F4B426] border-slate-300 rounded"
                        />
                        <span className="text-sm text-slate-700">{solution.title}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Project Details / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={inquiryForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors resize-none"
                    placeholder={`Tell us about your ${industryData.name.toLowerCase()} environment, specific challenges, expected quantities, timeline, and any special requirements...`}
                  />
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">What You'll Receive:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Customized solution recommendation
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Detailed technical specifications
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Volume pricing and financing options
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#F4B426] mr-2" />
                      Free consultation with industry specialist
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Industry Inquiry
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-4">
                    Need immediate assistance? Contact our {industryData.name.toLowerCase()} specialists directly:
                  </p>
                  <div className="flex justify-center gap-6">
                    <a href="tel:+61-1800-RUGGED" className="text-[#F4B426] hover:text-[#e6a625] font-medium flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      +61-1800-RUGGED
                    </a>
                    <a href="mailto:sales@onerugged.au" className="text-[#F4B426] hover:text-[#e6a625] font-medium flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      sales@onerugged.au
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">Quick Industry Inquiry</h3>
                <button
                  onClick={() => setShowInquiry(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-slate-600 mt-2">Get specialized consultation for <span className="font-semibold text-[#F4B426]">{industryData.name}</span> applications</p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleInquirySubmit} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={inquiryForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    placeholder="Full Name *"
                  />
                  <input
                    type="email"
                    name="email"
                    value={inquiryForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    placeholder="Email Address *"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  value={inquiryForm.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                  placeholder="Company Name *"
                />
                <textarea
                  name="message"
                  value={inquiryForm.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors resize-none"
                  placeholder={`Describe your ${industryData.name.toLowerCase()} requirements...`}
                />
                <button
                  type="submit"
                  className="w-full bg-[#F4B426] hover:bg-[#e6a625] text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Quick Inquiry
                </button>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-slate-600">
                  Our {industryData.name.toLowerCase()} specialist will contact you within 24 hours.
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

export default IndustryPage;