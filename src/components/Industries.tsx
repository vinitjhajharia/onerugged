import React from 'react';
import { Link } from 'react-router-dom';
import { Pickaxe, HardHat, Truck, Shield, Factory, Zap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Pickaxe,
      title: 'Mining & Resources',
      slug: 'mining',
      description: 'Certified for extreme heat, dust, and vibration in mining operations worldwide.',
      image: 'https://images.pexels.com/photos/6595788/pexels-photo-6595788.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: HardHat,
      title: 'Construction',
      slug: 'construction',
      description: 'Built to withstand drops, weather, and job site conditions while maintaining connectivity.',
      image: 'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Truck,
      title: 'Field Services',
      slug: 'field-services',
      description: 'Reliable mobile computing for technicians working in remote locations worldwide.',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Shield,
      title: 'Defence & Security',
      slug: 'defence',
      description: 'Mission-critical rugged devices meeting military standards and security requirements.',
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      slug: 'manufacturing',
      description: 'Industrial-grade devices for factory floors, warehouses, and manufacturing environments.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      icon: Zap,
      title: 'Utilities & Energy',
      slug: 'utilities',
      description: 'Reliable computing for power generation, distribution, and renewable energy projects.',
      image: 'https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="industries" className="py-8 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Providing rugged technology solutions across the world's most demanding industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#F4B426] transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                  <Link 
                    to={`/industries/${industry.slug}`}
                    className="mt-4 text-[#F4B426] hover:text-[#e6a625] font-medium inline-flex items-center transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;