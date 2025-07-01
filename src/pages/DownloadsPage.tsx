import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, File, Image, Video, Search, Filter, CheckCircle, Calendar, File as FileSize, Eye, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DownloadsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFileType, setSelectedFileType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Downloads', count: 156 },
    { id: 'user-manuals', name: 'User Manuals', count: 42 },
    { id: 'quick-start', name: 'Quick Start Guides', count: 25 },
    { id: 'technical-specs', name: 'Technical Specifications', count: 38 },
    { id: 'software-drivers', name: 'Software & Drivers', count: 31 },
    { id: 'certifications', name: 'Certifications', count: 12 },
    { id: 'marketing', name: 'Marketing Materials', count: 8 }
  ];

  const fileTypes = [
    { id: 'all', name: 'All Types', icon: FileText },
    { id: 'pdf', name: 'PDF Documents', icon: FileText },
    { id: 'software', name: 'Software/Drivers', icon: File },
    { id: 'images', name: 'Images', icon: Image },
    { id: 'videos', name: 'Videos', icon: Video }
  ];

  const downloads = [
    {
      id: 1,
      title: "N14A Rugged Laptop - Complete User Manual",
      description: "Comprehensive guide covering setup, operation, maintenance, and troubleshooting for the N14A rugged laptop.",
      category: "user-manuals",
      fileType: "pdf",
      fileSize: "12.4 MB",
      version: "v2.3",
      releaseDate: "2024-01-15",
      downloadCount: 8420,
      rating: 4.8,
      featured: true,
      tags: ["N14A", "Laptop", "Manual", "Setup"],
      preview: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Windows 11 Drivers Package - All Rugged Devices",
      description: "Latest Windows 11 compatible drivers for all One Rugged devices. Includes automatic installation utility.",
      category: "software-drivers",
      fileType: "software",
      fileSize: "245.8 MB",
      version: "v11.2.1",
      releaseDate: "2024-01-12",
      downloadCount: 15630,
      rating: 4.9,
      featured: true,
      tags: ["Windows 11", "Drivers", "All Devices", "Installation"],
      preview: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "MIL-STD-810H Certification Report",
      description: "Official military standard testing certification report demonstrating compliance with environmental testing requirements.",
      category: "certifications",
      fileType: "pdf",
      fileSize: "8.7 MB",
      version: "Final",
      releaseDate: "2024-01-10",
      downloadCount: 2840,
      rating: 4.7,
      featured: false,
      tags: ["MIL-STD-810H", "Certification", "Testing", "Compliance"],
      preview: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "M10T Android Tablet - Quick Start Guide",
      description: "Get up and running quickly with your M10T Android tablet. Step-by-step setup and basic operation instructions.",
      category: "quick-start",
      fileType: "pdf",
      fileSize: "3.2 MB",
      version: "v1.8",
      releaseDate: "2024-01-08",
      downloadCount: 5670,
      rating: 4.6,
      featured: false,
      tags: ["M10T", "Android", "Quick Start", "Setup"],
      preview: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Rugged Device Selection Guide",
      description: "Comprehensive guide to help you choose the right rugged device for your specific industry and environmental requirements.",
      category: "marketing",
      fileType: "pdf",
      fileSize: "6.8 MB",
      version: "2024 Edition",
      releaseDate: "2024-01-05",
      downloadCount: 12450,
      rating: 4.8,
      featured: true,
      tags: ["Selection Guide", "Comparison", "Industries", "Requirements"],
      preview: "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 6,
      title: "H68T Handheld PDA - Technical Specifications",
      description: "Detailed technical specifications including performance metrics, environmental ratings, and compliance certifications.",
      category: "technical-specs",
      fileType: "pdf",
      fileSize: "4.1 MB",
      version: "v3.0",
      releaseDate: "2024-01-03",
      downloadCount: 3280,
      rating: 4.5,
      featured: false,
      tags: ["H68T", "Handheld", "Specifications", "Performance"],
      preview: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 7,
      title: "V12R Vehicle Computer - Installation Video",
      description: "Professional installation guide video showing proper mounting, wiring, and configuration of the V12R vehicle computer.",
      category: "quick-start",
      fileType: "videos",
      fileSize: "89.2 MB",
      version: "HD",
      releaseDate: "2024-01-01",
      downloadCount: 1920,
      rating: 4.7,
      featured: false,
      tags: ["V12R", "Vehicle", "Installation", "Video Guide"],
      preview: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 8,
      title: "IP67 Rating Test Results",
      description: "Official test results and certification documentation for IP67 ingress protection rating across all product lines.",
      category: "certifications",
      fileType: "pdf",
      fileSize: "5.9 MB",
      version: "Certified",
      releaseDate: "2023-12-28",
      downloadCount: 4150,
      rating: 4.6,
      featured: false,
      tags: ["IP67", "Water Resistance", "Testing", "Certification"],
      preview: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  const filteredDownloads = downloads.filter(download => {
    const matchesCategory = selectedCategory === 'all' || download.category === selectedCategory;
    const matchesFileType = selectedFileType === 'all' || download.fileType === selectedFileType;
    const matchesSearch = download.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         download.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         download.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesFileType && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      case 'popular':
        return b.downloadCount - a.downloadCount;
      case 'rating':
        return b.rating - a.rating;
      case 'size':
        const aSize = parseFloat(a.fileSize.replace(/[^0-9.]/g, ''));
        const bSize = parseFloat(b.fileSize.replace(/[^0-9.]/g, ''));
        return bSize - aSize;
      default:
        return 0;
    }
  });

  const featuredDownloads = downloads.filter(download => download.featured);

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf':
        return FileText;
      case 'software':
        return File;
      case 'images':
        return Image;
      case 'videos':
        return Video;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-800/85 to-slate-900/70"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')" }}
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
              <Download className="w-4 h-4 mr-2" />
              Resources & Downloads
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Documentation & Resources
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Access comprehensive documentation, software updates, certifications, and support materials for all One Rugged products.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">150+</div>
                <div className="text-slate-300 text-sm">Documents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">24/7</div>
                <div className="text-slate-300 text-sm">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">50K+</div>
                <div className="text-slate-300 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F4B426] mb-2">Free</div>
                <div className="text-slate-300 text-sm">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Featured Downloads
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most popular and recently updated resources for getting the most out of your rugged devices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDownloads.map((download) => {
              const FileIcon = getFileIcon(download.fileType);
              return (
                <div key={download.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={download.preview}
                      alt={download.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F4B426] text-white text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <FileIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 text-white text-sm">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {download.downloadCount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F4B426] transition-colors leading-tight">
                      {download.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                      {download.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center">
                        <FileSize className="w-4 h-4 mr-1" />
                        {download.fileSize}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(download.releaseDate).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-[#F4B426] fill-current mr-1" />
                        <span className="text-sm font-medium">{download.rating}</span>
                      </div>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                        v{download.version}
                      </span>
                    </div>
                    
                    <button className="w-full bg-[#F4B426] hover:bg-[#e6a625] text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Downloads Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Search Downloads</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search documents..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between text-left p-3 rounded-lg transition-colors text-sm ${
                          selectedCategory === category.id
                            ? 'bg-[#F4B426]/10 text-[#F4B426] border border-[#F4B426]/20'
                            : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-xs opacity-75">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* File Types */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">File Types</h3>
                  <div className="space-y-2">
                    {fileTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedFileType(type.id)}
                          className={`w-full flex items-center text-left p-3 rounded-lg transition-colors text-sm ${
                            selectedFileType === type.id
                              ? 'bg-[#F4B426]/10 text-[#F4B426] border border-[#F4B426]/20'
                              : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                          }`}
                        >
                          <IconComponent className="w-4 h-4 mr-3" />
                          <span className="font-medium">{type.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Popular Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Drivers', 'Manual', 'Setup', 'Android', 'Windows', 'Certification'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="bg-slate-100 hover:bg-[#F4B426] hover:text-white text-slate-600 text-xs px-3 py-1 rounded-full transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Sort and Filter Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">All Downloads</h2>
                  <p className="text-slate-600">
                    Showing {filteredDownloads.length} of {downloads.length} downloads
                  </p>
                </div>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <div className="flex items-center">
                    <Filter className="w-4 h-4 text-slate-400 mr-2" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426]"
                    >
                      <option value="newest">Newest First</option>
                      <option value="popular">Most Downloaded</option>
                      <option value="rating">Highest Rated</option>
                      <option value="size">Largest Size</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Downloads Grid */}
              <div className="space-y-6">
                {filteredDownloads.map((download) => {
                  const FileIcon = getFileIcon(download.fileType);
                  return (
                    <div key={download.id} className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-[#F4B426]/10 transition-colors">
                            <FileIcon className="w-8 h-8 text-slate-600 group-hover:text-[#F4B426] transition-colors" />
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F4B426] transition-colors mb-2">
                            {download.title}
                          </h3>
                          <p className="text-slate-600 mb-3 leading-relaxed">
                            {download.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                            <div className="flex items-center">
                              <FileSize className="w-4 h-4 mr-1" />
                              {download.fileSize}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(download.releaseDate).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Download className="w-4 h-4 mr-1" />
                              {download.downloadCount.toLocaleString()} downloads
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 mr-1 text-[#F4B426] fill-current" />
                              {download.rating}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {download.tags.map((tag, index) => (
                              <span key={index} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0 flex flex-col items-end space-y-2">
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                            v{download.version}
                          </span>
                          <button className="bg-[#F4B426] hover:bg-[#e6a625] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center text-sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </button>
                          <button className="text-slate-400 hover:text-[#F4B426] transition-colors text-sm flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredDownloads.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No downloads found</h3>
                  <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                </div>
              )}

              {/* Load More */}
              {filteredDownloads.length > 0 && (
                <div className="text-center mt-12">
                  <button className="bg-slate-100 hover:bg-[#F4B426] hover:text-white text-slate-700 px-8 py-3 rounded-xl font-semibold transition-colors">
                    Load More Downloads
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Need Help Finding Something?
                </h2>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Can't find the document or resource you're looking for? Our support team is here to help you locate the right materials.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F4B426] mr-3" />
                    <span>Custom documentation requests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F4B426] mr-3" />
                    <span>Legacy product support materials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#F4B426] mr-3" />
                    <span>Technical configuration guides</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Link
                  to="/support"
                  className="inline-flex items-center bg-[#F4B426] hover:bg-[#e6a625] text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                >
                  Contact Support
                  <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadsPage;