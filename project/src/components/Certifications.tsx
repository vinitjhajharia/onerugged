import React from 'react';
import { Shield, CheckCircle, Award, Globe } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'MIL-STD-810H',
      description: 'Military Standard for Environmental Testing'
    },
    {
      icon: CheckCircle,
      title: 'IP67/68',
      description: 'Ingress Protection against dust and water'
    },
    {
      icon: Award,
      title: 'CE Marking',
      description: 'European Conformity standards'
    },
    {
      icon: Globe,
      title: 'FCC/IC',
      description: 'Radio frequency emissions compliance'
    },
    {
      icon: Shield,
      title: 'ATEX/IECEx',
      description: 'Explosive atmosphere certification'
    },
    {
      icon: Award,
      title: 'ISO 9001',
      description: 'Quality management system certification'
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Certifications & Standards
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our devices meet and exceed international standards for rugged computing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 bg-white border-2 border-slate-200 rounded-lg shadow-md hover:shadow-lg hover:border-[#F4B426] transition-all duration-300"
              >
                <div className="bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-[#F4B426] group-hover:to-[#e6a625] w-16 h-16 rounded-md border border-slate-300 group-hover:border-[#F4B426] flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-sm">
                  <IconComponent className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-[#F4B426] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;