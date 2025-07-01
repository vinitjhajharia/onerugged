import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Speak with our rugged device specialists about your requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 text-center hover:transform hover:scale-105">
            <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#F4B426] transition-colors text-white">Call Us</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">Speak directly with our experts</p>
            <a href="tel:+61-1800-RUGGED" className="text-[#F4B426] hover:text-[#e6a625] font-semibold text-lg">
              +61-1800-RUGGED
            </a>
            <div className="flex items-center justify-center mt-2 text-sm text-slate-400">
              <Clock className="w-4 h-4 mr-1" />
              Mon-Fri 8AM-6PM AEST
            </div>
          </div>

          <div className="group bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 text-center hover:transform hover:scale-105">
            <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#F4B426] transition-colors text-white">Email Us</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">Get detailed quotes and specs</p>
            <a href="mailto:sales@onerugged.au" className="text-[#F4B426] hover:text-[#e6a625] font-semibold">
              sales@onerugged.au
            </a>
            <p className="text-slate-400 text-sm mt-2">Response within 2 hours</p>
          </div>

          <div className="group bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 text-center hover:transform hover:scale-105">
            <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#F4B426] transition-colors text-white">Live Chat</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">Instant technical support</p>
            <button className="text-[#F4B426] hover:text-[#e6a625] font-semibold">
              Start Chat Now
            </button>
            <p className="text-slate-400 text-sm mt-2">Available business hours</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
            Get Your Custom Quote Today
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Tell us about your requirements and we'll provide a detailed quote with global pricing and support options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#F4B426] hover:bg-white/90 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Request Custom Quote
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors hover:bg-white/10 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;