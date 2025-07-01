import React from 'react';
import { Shield, Thermometer, Droplets, Zap, Phone, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'MIL-STD-810H Certified',
      description: 'Military-grade testing for shock, vibration, and extreme conditions.'
    },
    {
      icon: Droplets,
      title: 'IP67 Water Resistance',
      description: 'Complete protection against dust and water immersion up to 1 metre.'
    },
    {
      icon: Thermometer,
      title: 'Extreme Temperature Range',
      description: 'Operating range from -20°C to +60°C for global climate extremes.'
    },
    {
      icon: Zap,
      title: 'Extended Battery Life',
      description: 'Hot-swappable batteries and power management for all-day operation.'
    },
    {
      icon: Phone,
      title: 'Global Support',
      description: 'Local technical support and warranty service worldwide.'
    },
    {
      icon: Award,
      title: '3-Year Warranty',
      description: 'Comprehensive warranty coverage with rapid replacement service.'
    }
  ];

  return (
    <section id="about" className="py-8 md:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose One Rugged?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built tough, tested thoroughly, and backed by global support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 text-center hover:transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#F4B426] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;