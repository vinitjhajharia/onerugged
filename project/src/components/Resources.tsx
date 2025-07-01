import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Mail } from 'lucide-react';

const Resources = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="resources" className="py-8 md:py-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Free Rugged Tech Buyer's Guide
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Download our comprehensive guide to selecting the right rugged devices for mining, construction, and field operations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-[#F4B426] mr-3" />
                <span className="text-slate-300">Device comparison charts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-[#F4B426] mr-3" />
                <span className="text-slate-300">TCO calculator worksheets</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-[#F4B426] mr-3" />
                <span className="text-slate-300">Certification requirements guide</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-[#F4B426] mr-3" />
                <span className="text-slate-300">Global compliance checklist</span>
              </div>
            </div>

            <div className="bg-slate-600/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-[#F4B426] mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">32-Page PDF Guide</h3>
                  <p className="text-slate-400">Updated for 2024 standards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-slate-900 shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <Download className="w-12 h-12 text-[#F4B426] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Download Now</h3>
              <p className="text-slate-600">Get instant access to our buyer's guide</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    placeholder="Enter your work email"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Guide
                </button>

                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-slate-600">
                  Your download link has been sent to your email.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;