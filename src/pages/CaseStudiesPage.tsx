import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, Globe, Award, Calendar, Clock, ArrowRight, CheckCircle, Star, Download, Share2, Eye, Filter, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedOutcome, setSelectedOutcome] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', count: 24 },
    { id: 'mining', name: 'Mining & Resources', count: 8 },
    { id: 'construction', name: 'Construction', count: 6 },
    { id: 'defence', name: 'Defence & Security', count: 4 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'utilities', name: 'Utilities & Energy', count: 2 },
    { id: 'field-services', name: 'Field Services', count: 1 }
  ];

  const outcomes = [
    { id: 'all', name: 'All Outcomes' },
    { id: 'efficiency', name: 'Increased Efficiency' },
    { id: 'cost-savings', name: 'Cost Savings' },
    { id: 'reliability', name: 'Improved Reliability' },
    { id: 'safety', name: 'Enhanced Safety' }
  ];

  const featuredCaseStudy = {
    id: 1,
    title: "Global Mining Corporation Achieves 99.8% Uptime with Rugged Computing Solutions",
    subtitle: "How One Rugged devices transformed operations at 15 mining sites across 3 continents",
    company: "Global Mining Corp",
    industry: "mining",
    challengeType: "Equipment Reliability",
    timeframe: "18 months",
    roi: "280%",
    summary: "Reduced equipment downtime by 85% and increased operational efficiency by 35% through strategic deployment of rugged laptops and tablets across global mining operations.",
    heroImage: "https://images.pexels.com/photos/6595788/pexels-photo-6595788.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    companyLogo: "GM",
    featured: true,
    publishDate: "2024-01-15",
    readTime: "12 min read",
    views: 4280,
    downloads: 1520
  };

  const caseStudies = [
    {
      id: 2,
      title: "Construction Giant Reduces Project Delays by 40% with Mobile Technology",
      company: "BuildCorp International",
      industry: "construction",
      challengeType: "Project Management",
      timeframe: "12 months",
      roi: "195%",
      summary: "Streamlined project communication and documentation processes using rugged tablets, resulting in significant time savings and improved client satisfaction.",
      image: "https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      companyLogo: "BC",
      publishDate: "2024-01-12",
      readTime: "8 min read",
      views: 3150,
      downloads: 890,
      outcomes: [
        "40% reduction in project delays",
        "60% faster document processing",
        "95% reduction in device failures",
        "Improved safety compliance"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Defence Forces Enhance Mission Success with Secure Rugged Computing",
      company: "Defence Solutions Inc.",
      industry: "defence",
      challengeType: "Mission Critical Operations",
      timeframe: "24 months",
      roi: "350%",
      summary: "Improved operational effectiveness and security posture through deployment of military-grade rugged devices across multiple mission-critical scenarios.",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      companyLogo: "DS",
      publishDate: "2024-01-10",
      readTime: "15 min read",
      views: 2840,
      downloads: 1240,
      outcomes: [
        "100% mission-critical reliability",
        "Zero security breaches",
        "Enhanced situational awareness",
        "Reduced equipment failures"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing Plant Increases Production Efficiency by 30%",
      company: "Industrial Manufacturing Co.",
      industry: "manufacturing",
      challengeType: "Production Optimization",
      timeframe: "9 months",
      roi: "220%",
      summary: "Modernized factory floor operations with rugged tablets and real-time data collection, leading to significant productivity improvements.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      companyLogo: "IM",
      publishDate: "2024-01-08",
      readTime: "10 min read",
      views: 2650,
      downloads: 720,
      outcomes: [
        "30% increase in production efficiency",
        "95% reduction in quality errors",
        "Real-time production visibility",
        "Improved regulatory compliance"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Utility Company Modernizes Grid Operations for Smart Infrastructure",
      company: "PowerGrid Services",
      industry: "utilities",
      challengeType: "Infrastructure Modernization",
      timeframe: "15 months",
      roi: "185%",
      summary: "Transformed power grid monitoring and maintenance operations with rugged computing solutions, improving reliability and reducing outages.",
      image: "https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      companyLogo: "PG",
      publishDate: "2024-01-05",
      readTime: "11 min read",
      views: 1920,
      downloads: 580,
      outcomes: [
        "45% improvement in grid reliability",
        "60% faster fault detection",
        "Reduced maintenance costs",
        "Enhanced cybersecurity"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Field Service Company Boosts Customer Satisfaction by 50%",
      company: "TechField Solutions",
      industry: "field-services",
      challengeType: "Service Delivery",
      timeframe: "6 months",
      roi: "165%",
      summary: "Improved field service operations with mobile rugged devices, resulting in faster response times and higher customer satisfaction scores.",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      companyLogo: "TS",
      publishDate: "2024-01-03",
      readTime: "7 min read",
      views: 1580,
      downloads: 420,
      outcomes: [
        "50% increase in customer satisfaction",
        "35% faster service delivery",
        "Real-time work order updates",
        "Reduced paperwork time"
      ],
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesOutcome = selectedOutcome === 'all' || 
      study.outcomes.some(outcome => 
        outcome.toLowerCase().includes(selectedOutcome.replace('-', ' '))
      );
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesOutcome && matchesSearch;
  });

  const stats = [
    { number: "500+", label: "Successful Deployments", icon: TrendingUp },
    { number: "50+", label: "Global Clients", icon: Users },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "99.8%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-indigo-900/85 to-slate-800/70"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')" }}
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
            <div className="inline-flex items-center bg-indigo-500/20 border border-indigo-400/30 rounded-full px-6 py-3 text-indigo-300 text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2" />
              Real Success Stories
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover how industry leaders worldwide are transforming their operations with One Rugged technology solutions.
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

      {/* Featured Case Study */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Featured Success Story
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep dive into how our rugged solutions are making a real impact on global operations
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={featuredCaseStudy.heroImage}
                  alt={featuredCaseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-[#F4B426] text-white text-sm font-bold px-3 py-2 rounded-full">
                    Featured Case Study
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center text-white text-sm mb-3">
                    <div className="bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-xs">{featuredCaseStudy.companyLogo}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{featuredCaseStudy.company}</div>
                      <div className="text-slate-300 text-xs capitalize">{featuredCaseStudy.industry} Industry</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(featuredCaseStudy.publishDate).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredCaseStudy.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredCaseStudy.views}
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {featuredCaseStudy.downloads}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {featuredCaseStudy.title}
                </h3>
                
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {featuredCaseStudy.summary}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#F4B426] mb-1">{featuredCaseStudy.roi}</div>
                    <div className="text-slate-600 text-sm">ROI</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#F4B426] mb-1">85%</div>
                    <div className="text-slate-600 text-sm">Downtime Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#F4B426] mb-1">15</div>
                    <div className="text-slate-600 text-sm">Global Sites</div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#F4B426] hover:bg-[#e6a625] text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F4B426] text-slate-700 hover:text-[#F4B426] py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Listing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Search Case Studies</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search success stories..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    />
                  </div>
                </div>

                {/* Industry Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">By Industry</h3>
                  <div className="space-y-2">
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={`w-full flex items-center justify-between text-left p-3 rounded-lg transition-colors text-sm ${
                          selectedIndustry === industry.id
                            ? 'bg-[#F4B426]/10 text-[#F4B426] border border-[#F4B426]/20'
                            : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <span className="font-medium">{industry.name}</span>
                        <span className="text-xs opacity-75">({industry.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Outcomes Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">By Outcome</h3>
                  <div className="space-y-2">
                    {outcomes.map((outcome) => (
                      <button
                        key={outcome.id}
                        onClick={() => setSelectedOutcome(outcome.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors text-sm ${
                          selectedOutcome === outcome.id
                            ? 'bg-[#F4B426]/10 text-[#F4B426] border border-[#F4B426]/20'
                            : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <span className="font-medium">{outcome.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Get New Case Studies</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Subscribe to receive the latest success stories and industry insights.
                  </p>
                  <button className="w-full bg-white text-[#F4B426] font-semibold py-2 px-4 rounded-lg hover:bg-white/90 transition-colors text-sm">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Success Stories</h2>
                  <p className="text-slate-600">
                    Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
                  </p>
                </div>
                <div className="flex items-center">
                  <Filter className="w-4 h-4 text-slate-400 mr-2" />
                  <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426]">
                    <option value="newest">Newest First</option>
                    <option value="roi">Highest ROI</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>

              <div className="space-y-8">
                {filteredCaseStudies.map((study) => (
                  <div key={study.id} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="font-bold text-xs text-white">{study.companyLogo}</span>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 text-white text-sm">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {study.views}
                            </div>
                            <div className="flex items-center">
                              <Download className="w-3 h-3 mr-1" />
                              {study.downloads}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-slate-500">
                            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-medium capitalize mr-3">
                              {study.industry}
                            </span>
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(study.publishDate).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{study.readTime}</span>
                          </div>
                          <button className="text-slate-400 hover:text-[#F4B426] transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F4B426] transition-colors mb-3 leading-tight">
                          {study.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {study.summary}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#F4B426]">{study.roi}</div>
                            <div className="text-slate-500 text-xs">ROI</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#F4B426]">{study.timeframe}</div>
                            <div className="text-slate-500 text-xs">Timeline</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#F4B426]">{study.outcomes.length}</div>
                            <div className="text-slate-500 text-xs">Key Results</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <button className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center group/button">
                            Read Case Study
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform" />
                          </button>
                          <button className="border border-slate-300 hover:border-[#F4B426] text-slate-600 hover:text-[#F4B426] px-3 py-1 rounded text-sm transition-colors flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCaseStudies.length === 0 && (
                <div className="text-center py-12">
                  <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No case studies found</h3>
                  <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                </div>
              )}

              {/* Load More */}
              {filteredCaseStudies.length > 0 && (
                <div className="text-center mt-12">
                  <button className="bg-slate-100 hover:bg-[#F4B426] hover:text-white text-slate-700 px-8 py-3 rounded-xl font-semibold transition-colors">
                    Load More Case Studies
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the industry leaders who have transformed their operations with One Rugged technology. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solutions"
                className="bg-[#F4B426] hover:bg-[#e6a625] text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/support"
                className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-colors hover:bg-white/10 inline-flex items-center justify-center"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;