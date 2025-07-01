import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MessageCircle, FileText, Download, Search, Clock, Shield, Users, CheckCircle, AlertTriangle, PenTool as Tool, Headphones, Globe, Star, Send, User, Building } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'documentation' | 'warranty' | 'training'>('contact');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    priority: 'medium',
    subject: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTicketForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support ticket submitted:', ticketForm);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowTicketForm(false);
      setTicketForm({
        name: '',
        email: '',
        company: '',
        product: '',
        priority: 'medium',
        subject: '',
        description: ''
      });
    }, 3000);
  };

  const supportChannels = [
    {
      title: "24/7 Emergency Support",
      description: "Critical system failures and emergency assistance",
      icon: AlertTriangle,
      contact: "+61-1800-EMERGENCY",
      hours: "24/7/365",
      color: "red"
    },
    {
      title: "Technical Support",
      description: "Product configuration, troubleshooting, and technical guidance",
      icon: Tool,
      contact: "+61-1800-RUGGED",
      hours: "Mon-Fri 8AM-6PM AEST",
      color: "blue"
    },
    {
      title: "Sales Support",
      description: "Product selection, quotes, and purchasing assistance",
      icon: Users,
      contact: "sales@onerugged.au",
      hours: "Mon-Fri 8AM-6PM AEST",
      color: "green"
    },
    {
      title: "Live Chat",
      description: "Instant support for quick questions and guidance",
      icon: MessageCircle,
      contact: "Chat with us",
      hours: "Mon-Fri 8AM-6PM AEST",
      color: "yellow"
    }
  ];

  const documentationCategories = [
    {
      title: "Quick Start Guides",
      description: "Get up and running quickly with step-by-step setup instructions",
      icon: "🚀",
      count: 25,
      documents: [
        "N14A Rugged Laptop Quick Setup",
        "M10T Tablet Initial Configuration", 
        "H68T Handheld First Boot Guide",
        "V12R Vehicle Computer Installation"
      ]
    },
    {
      title: "User Manuals",
      description: "Comprehensive operation guides for all product features",
      icon: "📖",
      count: 42,
      documents: [
        "Complete User Manual - N14A",
        "Advanced Features Guide - M20A",
        "Software Configuration Manual",
        "Troubleshooting Reference Guide"
      ]
    },
    {
      title: "Technical Specifications",
      description: "Detailed technical data, certifications, and compliance info",
      icon: "📋",
      count: 38,
      documents: [
        "MIL-STD-810H Test Results",
        "IP Rating Certifications",
        "EMI/RFI Compliance Reports",
        "Environmental Testing Data"
      ]
    },
    {
      title: "Software & Drivers",
      description: "Latest drivers, firmware updates, and software tools",
      icon: "💾",
      count: 156,
      documents: [
        "Windows 11 Drivers Package",
        "Android System Updates",
        "Utility Software Suite",
        "Development SDKs"
      ]
    }
  ];

  const warrantyTiers = [
    {
      name: "Standard Warranty",
      duration: "3 Years",
      coverage: ["Hardware defects", "Manufacturing issues", "Basic repair service"],
      responseTime: "72 hours",
      included: true
    },
    {
      name: "Extended Warranty",
      duration: "5 Years",
      coverage: ["All standard coverage", "Accidental damage", "Advanced replacement", "Priority support"],
      responseTime: "24 hours",
      included: false
    },
    {
      name: "Premium Care",
      duration: "5 Years",
      coverage: ["All extended coverage", "On-site repair", "Preventive maintenance", "Dedicated support"],
      responseTime: "4 hours",
      included: false
    }
  ];

  const trainingPrograms = [
    {
      title: "Basic Operations Training",
      description: "Essential skills for daily device operation and basic troubleshooting",
      duration: "4 hours",
      format: "Online/On-site",
      price: "Free",
      topics: ["Device setup", "Basic operations", "Maintenance", "Safety guidelines"]
    },
    {
      title: "Advanced Configuration",
      description: "Deep dive into advanced features, customization, and integration",
      duration: "8 hours",
      format: "Online/On-site",
      price: "$299/person",
      topics: ["Advanced settings", "Custom configurations", "Integration setup", "Performance optimization"]
    },
    {
      title: "Administrator Certification",
      description: "Comprehensive program for IT administrators and system managers",
      duration: "16 hours",
      format: "On-site/Virtual",
      price: "$899/person",
      topics: ["System administration", "Security configuration", "Fleet management", "Troubleshooting"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-slate-900/70"></div>
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
            <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-3 text-blue-300 text-sm font-medium mb-8">
              <Headphones className="w-4 h-4 mr-2" />
              World-Class Support
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Support That Never Sleeps
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Get expert help when you need it most. Our global support team provides 24/7 assistance, comprehensive documentation, and training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => setShowTicketForm(true)}
                className="bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Create Support Ticket
                <Send className="w-5 h-5 ml-2" />
              </button>
              <a 
                href="tel:+61-1800-RUGGED"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 text-center flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +61-1800-RUGGED
              </a>
            </div>

            {/* Service Level Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">99.9%</div>
                <div className="text-slate-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">&lt;2h</div>
                <div className="text-slate-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Global Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">50+</div>
                <div className="text-slate-300 text-sm">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Multiple Ways to Get Help
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the support channel that works best for your situation and urgency level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              const colorClasses = {
                red: 'from-red-500 to-red-600 border-red-200',
                blue: 'from-blue-500 to-blue-600 border-blue-200',
                green: 'from-green-500 to-green-600 border-green-200',
                yellow: 'from-[#F4B426] to-[#e6a625] border-yellow-200'
              };
              
              return (
                <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                  <div className={`p-6 bg-gradient-to-br ${colorClasses[channel.color as keyof typeof colorClasses]} text-white`}>
                    <IconComponent className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {channel.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-[#F4B426] mr-2" />
                        <span className="font-medium text-slate-900">{channel.contact}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-[#F4B426] mr-2" />
                        <span className="text-slate-600">{channel.hours}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-slate-100 hover:bg-[#F4B426] hover:text-white text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors">
                      Contact Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 rounded-2xl p-2 flex flex-wrap">
              {([
                { id: 'contact', label: 'Contact & Emergency', icon: Phone },
                { id: 'documentation', label: 'Documentation', icon: FileText },
                { id: 'warranty', label: 'Warranty & Service', icon: Shield },
                { id: 'training', label: 'Training & Certification', icon: Users }
              ] as const).map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center text-sm md:text-base whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#F4B426] to-[#e6a625] text-white shadow-lg transform scale-105'
                        : 'text-slate-600 hover:text-[#F4B426] hover:bg-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'contact' && (
              <div className="space-y-12">
                {/* Emergency Response */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-2xl font-bold text-red-900">Emergency Response Protocol</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-red-900 mb-4">When to Use Emergency Support:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-red-800">
                          <CheckCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />
                          Critical system failures affecting operations
                        </li>
                        <li className="flex items-start text-red-800">
                          <CheckCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />
                          Safety-critical device malfunctions
                        </li>
                        <li className="flex items-start text-red-800">
                          <CheckCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />
                          Complete device failures in mission-critical scenarios
                        </li>
                        <li className="flex items-start text-red-800">
                          <CheckCircle className="w-4 h-4 mr-2 mt-1 text-red-600" />
                          Security incidents or data breaches
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900 mb-4">Emergency Contact Information:</h4>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="font-semibold text-red-900 mb-1">Global Emergency Hotline</div>
                          <div className="text-red-800 text-lg font-mono">+61-1800-EMERGENCY</div>
                          <div className="text-red-600 text-sm">Available 24/7/365</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-red-200">
                          <div className="font-semibold text-red-900 mb-1">Emergency Email</div>
                          <div className="text-red-800">emergency@onerugged.au</div>
                          <div className="text-red-600 text-sm">Response within 15 minutes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Support Centers */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Global Support Centers</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { region: "Asia Pacific", city: "Sydney", time: "AEST", phone: "+61-1800-RUGGED", hours: "24/7" },
                      { region: "Europe & Africa", city: "London", time: "GMT", phone: "+44-800-RUGGED", hours: "24/7" },
                      { region: "Americas", city: "Denver", time: "MST", phone: "+1-800-RUGGED", hours: "24/7" }
                    ].map((center, index) => (
                      <div key={index} className="bg-slate-50 rounded-xl p-6 text-center">
                        <Globe className="w-8 h-8 text-[#F4B426] mx-auto mb-4" />
                        <h4 className="font-semibold text-slate-900 mb-2">{center.region}</h4>
                        <p className="text-slate-600 mb-4">{center.city} ({center.time})</p>
                        <div className="space-y-2">
                          <div className="font-mono text-[#F4B426] font-semibold">{center.phone}</div>
                          <div className="text-slate-600 text-sm">{center.hours}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documentation' && (
              <div className="space-y-8">
                {/* Search */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search documentation, guides, and downloads..."
                      className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors text-lg"
                    />
                  </div>
                </div>

                {/* Documentation Categories */}
                <div className="grid md:grid-cols-2 gap-8">
                  {documentationCategories.map((category, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100">
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">{category.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                          <p className="text-slate-600 text-sm">{category.count} documents available</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {category.documents.map((doc, dIndex) => (
                          <div key={dIndex} className="flex items-center text-sm text-slate-700 hover:text-[#F4B426] cursor-pointer transition-colors">
                            <Download className="w-4 h-4 mr-2 text-[#F4B426]" />
                            {doc}
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/downloads"
                        className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center"
                      >
                        View All Documents
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="space-y-12">
                {/* Warranty Tiers */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Warranty & Service Options</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {warrantyTiers.map((tier, index) => (
                      <div key={index} className={`rounded-xl border-2 overflow-hidden ${tier.included ? 'border-[#F4B426] bg-[#F4B426]/5' : 'border-slate-200 bg-white'}`}>
                        <div className={`p-6 text-center ${tier.included ? 'bg-[#F4B426] text-white' : 'bg-slate-50'}`}>
                          <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
                          <div className="text-2xl font-bold">{tier.duration}</div>
                          {tier.included && <div className="text-sm opacity-90 mt-2">Included with purchase</div>}
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <div className="font-semibold text-slate-900 mb-2">Response Time</div>
                            <div className="text-[#F4B426] font-bold">{tier.responseTime}</div>
                          </div>
                          <div className="mb-6">
                            <div className="font-semibold text-slate-900 mb-3">Coverage Includes:</div>
                            <ul className="space-y-2">
                              {tier.coverage.map((item, cIndex) => (
                                <li key={cIndex} className="flex items-start text-sm text-slate-700">
                                  <CheckCircle className="w-4 h-4 text-[#F4B426] mr-2 mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                            tier.included 
                              ? 'bg-[#F4B426] hover:bg-[#e6a625] text-white' 
                              : 'bg-slate-100 hover:bg-[#F4B426] hover:text-white text-slate-700'
                          }`}>
                            {tier.included ? 'Included' : 'Upgrade Now'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Process */}
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Service Process</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { step: "1", title: "Report Issue", description: "Submit support ticket or call our hotline" },
                      { step: "2", title: "Diagnosis", description: "Remote troubleshooting and root cause analysis" },
                      { step: "3", title: "Resolution", description: "Repair, replacement, or on-site service" },
                      { step: "4", title: "Follow-up", description: "Verification and preventive recommendations" }
                    ].map((process, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-[#F4B426] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                          {process.step}
                        </div>
                        <h4 className="font-semibold text-slate-900 mb-2">{process.title}</h4>
                        <p className="text-slate-600 text-sm">{process.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'training' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Training & Certification Programs</h3>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Maximize your investment with comprehensive training programs designed for different skill levels and roles
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {trainingPrograms.map((program, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-slate-900">{program.title}</h4>
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            program.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-[#F4B426]/10 text-[#F4B426]'
                          }`}>
                            {program.price}
                          </div>
                        </div>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {program.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-slate-700">
                            <Clock className="w-4 h-4 text-[#F4B426] mr-2" />
                            Duration: {program.duration}
                          </div>
                          <div className="flex items-center text-sm text-slate-700">
                            <Users className="w-4 h-4 text-[#F4B426] mr-2" />
                            Format: {program.format}
                          </div>
                        </div>
                        <div className="mb-6">
                          <h5 className="font-semibold text-slate-900 mb-2">Topics Covered:</h5>
                          <ul className="space-y-1">
                            {program.topics.map((topic, tIndex) => (
                              <li key={tIndex} className="flex items-start text-sm text-slate-700">
                                <CheckCircle className="w-3 h-3 text-[#F4B426] mr-2 mt-1 flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="w-full bg-[#F4B426] hover:bg-[#e6a625] text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certification Benefits */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                  <div className="text-center mb-8">
                    <Star className="w-12 h-12 text-[#F4B426] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Certification Benefits</h3>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                      Gain recognition for your expertise and access exclusive resources and support
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Official Certification</h4>
                      <p className="text-slate-300 text-sm">Receive industry-recognized certification and digital badges</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Exclusive Community</h4>
                      <p className="text-slate-300 text-sm">Join our certified user community for networking and support</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-[#F4B426] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">Priority Support</h4>
                      <p className="text-slate-300 text-sm">Get faster response times and priority access to new features</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support Ticket Modal */}
      {showTicketForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">Create Support Ticket</h3>
                <button
                  onClick={() => setShowTicketForm(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-slate-600 mt-2">Get expert technical support for your rugged devices</p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                      value={ticketForm.name}
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
                      value={ticketForm.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={ticketForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                      Product Model
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={ticketForm.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    >
                      <option value="">Select product model</option>
                      <option value="n14a">N14A Rugged Laptop</option>
                      <option value="n14m">N14M AI Laptop</option>
                      <option value="m10t">M10T Android Tablet</option>
                      <option value="m20a">M20A Professional Tablet</option>
                      <option value="h68t">H68T Rugged Handheld</option>
                      <option value="v12r">V12R Vehicle Computer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-slate-700 mb-2">
                      Priority Level
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={ticketForm.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="medium">Medium - Non-critical issue</option>
                      <option value="high">High - Impacting operations</option>
                      <option value="critical">Critical - System down</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={ticketForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    placeholder="Brief description of the issue"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                    Detailed Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={ticketForm.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors resize-none"
                    placeholder="Please provide detailed information about the issue, including error messages, steps to reproduce, and environmental conditions..."
                  />
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Response Time Expectations:</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-slate-700">
                      <span className="font-medium text-red-600">Critical:</span> Within 1 hour
                    </div>
                    <div className="text-slate-700">
                      <span className="font-medium text-orange-600">High:</span> Within 4 hours
                    </div>
                    <div className="text-slate-700">
                      <span className="font-medium text-blue-600">Medium:</span> Within 24 hours
                    </div>
                    <div className="text-slate-700">
                      <span className="font-medium text-green-600">Low:</span> Within 72 hours
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F4B426] to-[#e6a625] hover:from-[#e6a625] hover:to-[#d4941f] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Support Ticket
                </button>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Support Ticket Created!</h3>
                <p className="text-slate-600 mb-4">
                  Your ticket has been submitted successfully. You'll receive an email confirmation with your ticket number shortly.
                </p>
                <div className="bg-[#F4B426]/10 border border-[#F4B426]/20 rounded-lg p-4">
                  <p className="text-sm text-[#F4B426] font-medium">
                    Ticket ID: SUP-{Date.now().toString().slice(-8)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SupportPage;