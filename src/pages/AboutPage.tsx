import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Globe, Award, TrendingUp, Shield, Heart, Lightbulb, Target, CheckCircle, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years of Experience", icon: Award },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "500+", label: "Global Deployments", icon: TrendingUp },
    { number: "99.8%", label: "Customer Satisfaction", icon: Shield }
  ];

  const values = [
    {
      title: "Uncompromising Quality",
      description: "We never compromise on quality. Every device undergoes rigorous testing to ensure it meets military-grade standards and exceeds customer expectations.",
      icon: Shield,
      color: "blue"
    },
    {
      title: "Customer-Centric Innovation",
      description: "Our customers drive our innovation. We listen, understand their challenges, and develop solutions that make their operations more efficient and reliable.",
      icon: Heart,
      color: "red"
    },
    {
      title: "Continuous Improvement",
      description: "We constantly push the boundaries of what's possible in rugged computing, investing in R&D to stay ahead of emerging challenges and technologies.",
      icon: Lightbulb,
      color: "yellow"
    },
    {
      title: "Global Reliability",
      description: "Our worldwide support network ensures that no matter where you are, you have access to expert assistance and rapid service when you need it most.",
      icon: Globe,
      color: "green"
    }
  ];

  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a vision to create the world's most reliable rugged computing devices for extreme environments."
    },
    {
      year: "2012",
      title: "Global Expansion",
      description: "Established international partnerships and expanded operations to serve customers across 50+ countries worldwide."
    },
    {
      year: "2016",
      title: "Military Certification",
      description: "Achieved MIL-STD-810H certification, becoming a trusted supplier for defence and security applications globally."
    },
    {
      year: "2019",
      title: "AI Integration",
      description: "Launched first AI-ready rugged devices with enhanced processing power for edge computing applications."
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly manufacturing processes and carbon-neutral shipping for all products."
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description: "Continues to lead the industry with cutting-edge rugged technology and comprehensive global support services."
    }
  ];

  const team = [
    {
      name: "David Chen",
      position: "Chief Executive Officer",
      bio: "20+ years in rugged computing industry, former VP of Engineering at major tech companies.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Sarah Rodriguez",
      position: "Chief Technology Officer",
      bio: "Expert in military-grade electronics with 15+ years in product development and engineering.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Michael Zhang",
      position: "VP of Global Operations",
      bio: "International business leader with expertise in global supply chain and manufacturing.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Jennifer Walsh",
      position: "VP of Customer Success",
      bio: "Customer advocacy expert focused on ensuring exceptional support and service delivery.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001 Environmental Management",
    "ISO 45001 Occupational Health & Safety",
    "MIL-STD-810H Military Standard",
    "ATEX/IECEx Explosive Atmosphere",
    "FCC/CE/CCC Regulatory Compliance"
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
            style={{ backgroundImage: "url('https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')" }}
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
              <Users className="w-4 h-4 mr-2" />
              About One Rugged
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Pioneering Rugged Technology for Extreme Environments
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Since 2008, we've been at the forefront of rugged computing innovation, creating devices that perform when it matters most, in the world's most challenging conditions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 text-[#F4B426] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#F4B426] mb-2">{stat.number}</div>
                    <div className="text-slate-300 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                Our Mission & Vision
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-[#F4B426] mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To empower professionals working in extreme environments with reliable, innovative rugged computing solutions that enhance productivity, safety, and operational efficiency.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-[#F4B426] mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    To be the global leader in rugged computing technology, setting the standard for reliability, innovation, and customer service in the most demanding industries worldwide.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Heart className="w-6 h-6 text-[#F4B426] mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900">Purpose</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    We believe that technology should work everywhere, for everyone. Our purpose is to eliminate the barriers that prevent people from accessing computing power in challenging environments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Advanced manufacturing"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Advanced Manufacturing</h4>
                  <p className="text-slate-700 text-sm">State-of-the-art facilities with precision engineering and rigorous quality control processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                red: 'from-red-500 to-red-600',
                yellow: 'from-[#F4B426] to-[#e6a625]',
                green: 'from-green-500 to-green-600'
              };
              
              return (
                <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`p-6 bg-gradient-to-br ${colorClasses[value.color as keyof typeof colorClasses]} text-white`}>
                    <IconComponent className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From startup to global leader - key milestones in our company's growth and innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#F4B426] hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
                      <div className="text-[#F4B426] font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex w-4 h-4 bg-[#F4B426] rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading One Rugged's mission to transform rugged computing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    className="text-[#F4B426] hover:text-[#e6a625] transition-colors flex items-center text-sm font-medium"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                Quality & Certifications
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our commitment to quality is demonstrated through rigorous certifications and compliance with international standards.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-slate-50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-[#F4B426] mr-3 flex-shrink-0" />
                    <span className="font-medium text-slate-900">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-[#F4B426]/10 to-[#e6a625]/10 rounded-xl border border-[#F4B426]/20">
                <h3 className="font-semibold text-slate-900 mb-2">Continuous Improvement</h3>
                <p className="text-slate-700 text-sm">
                  We regularly audit our processes and upgrade our certifications to maintain the highest standards of quality and compliance.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Quality testing"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Rigorous Testing</h4>
                  <p className="text-slate-700 text-sm">Every device undergoes extensive testing in our state-of-the-art facilities to ensure reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to learn more about how One Rugged can support your operations? Contact us today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-slate-300 mb-3">Speak with our experts</p>
              <a href="tel:+61-1800-RUGGED" className="text-[#F4B426] hover:text-[#e6a625] font-semibold text-lg">
                +61-1800-RUGGED
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-slate-300 mb-3">Get detailed information</p>
              <a href="mailto:info@onerugged.au" className="text-[#F4B426] hover:text-[#e6a625] font-semibold">
                info@onerugged.au
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-slate-300 mb-3">Global headquarters</p>
              <address className="text-slate-300 not-italic">
                Sydney, Australia<br />
                Serving 50+ countries worldwide
              </address>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-slate-700">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#F4B426] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-slate-400">
              Follow us for the latest updates and industry insights
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;