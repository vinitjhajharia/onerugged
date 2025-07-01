import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/onerugged-logo.png" 
              alt="One Rugged" 
              className="h-12 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-slate-400 mb-6 leading-relaxed">
              Global leader in professional rugged computing devices for harsh industrial environments.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+61-1800-RUGGED</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>sales@onerugged.au</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Global support worldwide</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/laptops" className="text-slate-400 hover:text-[#F4B426] transition-colors">Rugged Laptops</Link></li>
              <li><Link to="/tablets" className="text-slate-400 hover:text-[#F4B426] transition-colors">Rugged Tablets</Link></li>
              <li><Link to="/phones" className="text-slate-400 hover:text-[#F4B426] transition-colors">Rugged Phones</Link></li>
              <li><Link to="/vehicle" className="text-slate-400 hover:text-[#F4B426] transition-colors">Vehicle Computers</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Accessories</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Extended Warranties</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Industries</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Mining & Resources</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Construction</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Field Services</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Defence & Security</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Utilities & Energy</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Warranty Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Software Downloads</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Training</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
              <div>© 2024 One Rugged. All rights reserved.</div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#F4B426] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#F4B426] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#F4B426] transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;