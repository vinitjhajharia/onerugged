import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/onerugged-logo.png" 
                alt="One Rugged" 
                className="h-10 w-32 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-slate-700 hover:text-[#235faa] font-medium transition-colors">
                Industries
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/industries/mining" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Mining & Resources</Link>
                  <Link to="/industries/construction" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Construction</Link>
                  <Link to="/industries/field-services" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Field Services</Link>
                  <Link to="/industries/defence" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Defence & Security</Link>
                  <Link to="/industries/manufacturing" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Manufacturing</Link>
                  <Link to="/industries/utilities" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Utilities & Energy</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-slate-700 hover:text-[#F4B426] font-medium transition-colors">
                Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/laptops" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Rugged Laptops</Link>
                  <Link to="/tablets" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Rugged Tablets</Link>
                  <Link to="/phones" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Rugged Phones</Link>
                  <Link to="/vehicle" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Vehicle Computers</Link>
                  <a href="#accessories" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Accessories</a>
                </div>
              </div>
            </div>
            
            <Link to="/solutions" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors">Solutions</Link>
            <Link to="/support" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors">Support</Link>
            <Link to="/about" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors">About</Link>
            
            <div className="relative group">
              <button className="flex items-center text-slate-700 hover:text-[#F4B426] font-medium transition-colors">
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/blog" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Blog & Insights</Link>
                  <Link to="/downloads" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Downloads</Link>
                  <Link to="/case-studies" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Case Studies</Link>
                  <a href="#certifications" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Certifications</a>
                  <a href="#documentation" className="block text-slate-600 hover:text-[#F4B426] py-2 px-3 rounded hover:bg-slate-50">Documentation</a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-slate-200">
              <a href="tel:+61-1800-RUGGED" className="flex items-center text-slate-600 hover:text-[#F4B426] transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">+61-1800-RUGGED</span>
              </a>
              <button className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                Request Quote
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        
        {/* Mobile Side Drawer Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setIsMenuOpen(false)} />
        )}
        
        {/* Mobile Side Drawer */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <img 
              src="/onerugged-logo.png" 
              alt="One Rugged" 
              className="h-8 w-24 object-contain"
            />
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>
          
          <div className="flex flex-col p-6 space-y-6 overflow-y-auto h-full">
            <div className="space-y-4">
              <button 
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="flex items-center justify-between text-slate-700 hover:text-[#F4B426] font-medium transition-colors w-full text-left"
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isIndustriesOpen && (
                <div className="pl-4 space-y-3 bg-slate-50 rounded-lg p-4 ml-4">
                  <Link to="/industries/mining" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Mining & Resources</Link>
                  <Link to="/industries/construction" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Construction</Link>
                  <Link to="/industries/field-services" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Field Services</Link>
                  <Link to="/industries/defence" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Defence & Security</Link>
                  <Link to="/industries/manufacturing" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Manufacturing</Link>
                  <Link to="/industries/utilities" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Utilities & Energy</Link>
                </div>
              )}
              
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between text-slate-700 hover:text-[#F4B426] font-medium transition-colors w-full text-left"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="pl-4 space-y-3 bg-slate-50 rounded-lg p-4 ml-4">
                  <Link to="/laptops" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Rugged Laptops</Link>
                  <Link to="/tablets" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Rugged Tablets</Link>
                  <Link to="/phones" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Rugged Phones</Link>
                  <Link to="/vehicle" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Vehicle Computers</Link>
                  <a href="#accessories" className="block text-slate-600 hover:text-[#F4B426] py-2 transition-colors">Accessories</a>
                </div>
              )}
              
              <Link to="/solutions" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors py-3 block">Solutions</Link>
              <Link to="/support" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors py-3 block">Support</Link>
              <Link to="/about" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors py-3 block">About</Link>
              <Link to="/blog" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors py-3 block">Blog</Link>
              <Link to="/downloads" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors py-3 block">Downloads</Link>
              <Link to="/case-studies" className="text-slate-700 hover:text-[#F4B426] font-medium transition-colors py-3 block">Case Studies</Link>
            </div>
            
            <div className="border-t border-slate-200 pt-6 mt-auto">
              <div className="flex items-center text-slate-600 mb-4">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+61-1800-RUGGED" className="hover:text-[#F4B426] transition-colors">+61-1800-RUGGED</a>
              </div>
              <button className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;