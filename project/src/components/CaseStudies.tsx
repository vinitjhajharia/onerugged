import React from 'react';
import { Quote, Star, TrendingUp, Users, Award, Building2, Globe, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const testimonials = [
    {
      quote: "Our mining operations require devices that can handle extreme heat and dust. These rugged laptops have been running flawlessly for over two years.",
      author: "Sarah Chen",
      position: "IT Manager",
      company: "Global Mining Corp.",
      rating: 5,
      metric: "99.8% uptime in extreme conditions",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "GM"
    },
    {
      quote: "The rugged tablets have revolutionised our field inspections. They survive drops, weather, and keep our teams connected across remote construction sites.",
      author: "Michael Rodriguez",
      position: "Operations Director",
      company: "BuildCorp International",
      rating: 5,
      metric: "30% increase in field productivity",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "BC"
    },
    {
      quote: "Reliable communication is critical for our defence operations. These devices deliver when it matters most, with support that understands our requirements.",
      author: "Colonel Jennifer Walsh",
      position: "Systems Procurement",
      company: "Defence Solutions Inc.",
      rating: 5,
      metric: "100% mission-critical reliability",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      companyLogo: "DS"
    }
  ];

  const clientLogos = [
    { 
      name: "Caterpillar", 
      logo: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Heavy Machinery"
    },
    { 
      name: "Boeing", 
      logo: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Aerospace"
    },
    { 
      name: "Chevron", 
      logo: "https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Energy"
    },
    { 
      name: "Bechtel", 
      logo: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Construction"
    },
    { 
      name: "Lockheed Martin", 
      logo: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Defence"
    },
    { 
      name: "Halliburton", 
      logo: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Oil & Gas"
    },
    { 
      name: "Shell", 
      logo: "https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Energy"
    },
    { 
      name: "Vale", 
      logo: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      industry: "Mining"
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#fab928]/10 border border-[#fab928]/20 rounded-full px-6 py-2 text-[#fab928] text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how our rugged devices are making a difference across the world's toughest industries
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12 md:mb-20">
          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#fab928]/5 to-[#235faa]/5 rounded-full -translate-y-12 translate-x-12"></div>
                        
                        {/* Quote Icon */}
                        <div className="relative z-10">
                          <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] p-3 rounded-xl w-fit mb-4">
                            <Quote className="w-5 h-5 text-white" />
                          </div>

                          {/* Rating */}
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, starIndex) => (
                              <Star key={starIndex} className="w-4 h-4 text-[#F4B426] fill-current" />
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-slate-700 mb-6 leading-relaxed italic">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Author Info */}
                          <div className="flex items-center mb-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-slate-200"
                            />
                            <div>
                              <div className="font-semibold text-slate-900">{testimonial.author}</div>
                              <div className="text-slate-600 text-sm">{testimonial.position}</div>
                              <div className="text-[#F4B426] text-sm font-medium">{testimonial.company}</div>
                            </div>
                          </div>

                          {/* Metric */}
                          <div className="bg-gradient-to-r from-orange-50 to-slate-50 p-3 rounded-lg border border-orange-200">
                            <div className="text-orange-700 font-semibold text-xs mb-1">Key Result:</div>
                            <div className="text-slate-700 font-medium text-sm">{testimonial.metric}</div>
                          </div>

                          {/* Company Logo */}
                          <div className="absolute top-4 right-4 bg-slate-100 w-10 h-10 rounded-lg flex items-center justify-center">
                            <span className="text-slate-600 font-bold text-xs">{testimonial.companyLogo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-2 hover:bg-slate-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#fab928] w-6' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-slate-100 hover:border-[#fab928]/20"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fab928]/5 to-[#235faa]/5 rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Quote Icon */}
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-[#F4B426] fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 mb-8 leading-relaxed text-lg italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-slate-200"
                    />
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">{testimonial.author}</div>
                      <div className="text-slate-600 text-sm">{testimonial.position}</div>
                      <div className="text-[#F4B426] text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="bg-gradient-to-r from-orange-50 to-slate-50 p-4 rounded-xl border border-orange-200">
                    <div className="text-orange-700 font-semibold text-sm mb-1">Key Result:</div>
                    <div className="text-slate-700 font-medium">{testimonial.metric}</div>
                  </div>

                  {/* Company Logo */}
                  <div className="absolute top-6 right-6 bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <span className="text-slate-600 font-bold text-sm">{testimonial.companyLogo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Client Logos Section */}
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>
          <div className="absolute top-8 left-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-slate-500/10 rounded-full blur-xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-xl border border-white/50">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-[#F4B426] to-[#e6a625] text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Globe className="w-4 h-4 mr-2" />
                Trusted by Leading Global Organisations
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Industry Leaders Choose One Rugged
              </h3>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                Join hundreds of Fortune 500 companies worldwide who rely on our rugged solutions for their most critical operations
              </p>
            </div>
            
            {/* Client Logos Marquee */}
            <div className="overflow-hidden mb-8 md:mb-12">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    key={index}
                    className="mx-4 md:mx-6 flex-shrink-0"
                  >
                    <div className="w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Get a personalised quote and see how our rugged devices can transform your operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#F4B426] hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Your Custom Quote
                </button>
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;