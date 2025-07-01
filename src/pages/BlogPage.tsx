import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock, Search, TrendingUp, ChevronRight, Eye, MessageCircle, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'industry-insights', name: 'Industry Insights', count: 8 },
    { id: 'product-updates', name: 'Product Updates', count: 6 },
    { id: 'case-studies', name: 'Case Studies', count: 5 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'best-practices', name: 'Best Practices', count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of Rugged Computing: AI Integration in Extreme Environments",
    excerpt: "Discover how artificial intelligence is revolutionizing rugged computing devices and enabling smarter decision-making in harsh industrial environments.",
    content: "As industries continue to evolve and embrace digital transformation, the integration of artificial intelligence into rugged computing devices represents a significant leap forward...",
    author: "Dr. Sarah Chen",
    authorRole: "Chief Technology Officer",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "technology",
    tags: ["AI", "Machine Learning", "Edge Computing", "Industry 4.0"],
    image: "https://images.pexels.com/photos/159279/macro-focus-cogwheel-gear-159279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    views: 2840,
    comments: 23,
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "How Mining Companies Are Reducing Downtime with Rugged Technology",
      excerpt: "Learn how modern mining operations are leveraging rugged devices to minimize equipment failures and maximize operational efficiency.",
      author: "Michael Rodriguez",
      authorRole: "Industry Specialist",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "industry-insights",
      tags: ["Mining", "Reliability", "ROI"],
      image: "https://images.pexels.com/photos/6595788/pexels-photo-6595788.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      views: 1920,
      comments: 15,
      featured: false
    },
    {
      id: 3,
      title: "MIL-STD-810H: Understanding Military Standards for Rugged Devices",
      excerpt: "A comprehensive guide to military testing standards and what they mean for rugged device performance and reliability.",
      author: "Jennifer Walsh",
      authorRole: "Quality Assurance Director",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "best-practices",
      tags: ["Standards", "Testing", "Military", "Certification"],
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      views: 3150,
      comments: 31,
      featured: false
    },
    {
      id: 4,
      title: "New Product Launch: N14M AI-Ready Rugged Laptop",
      excerpt: "Introducing our latest innovation featuring Intel Meteor Lake processors with built-in AI acceleration for edge computing applications.",
      author: "David Zhang",
      authorRole: "Product Manager",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "product-updates",
      tags: ["Product Launch", "AI", "Laptop", "Innovation"],
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      views: 4280,
      comments: 42,
      featured: false
    },
    {
      id: 5,
      title: "Construction Site Safety: How Rugged Tablets Improve Compliance",
      excerpt: "Explore how digital safety checklists and real-time reporting on rugged tablets are transforming construction site safety management.",
      author: "Lisa Park",
      authorRole: "Safety Systems Specialist",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "industry-insights",
      tags: ["Construction", "Safety", "Compliance", "Digital Transformation"],
      image: "https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      views: 2650,
      comments: 18,
      featured: false
    },
    {
      id: 6,
      title: "Power Grid Modernization: Rugged Computing in Smart Infrastructure",
      excerpt: "How utility companies are using rugged devices to modernize power grids and improve reliability through smart monitoring systems.",
      author: "Robert Martinez",
      authorRole: "Utilities Consultant",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "case-studies",
      tags: ["Utilities", "Smart Grid", "Infrastructure", "IoT"],
      image: "https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      views: 1840,
      comments: 12,
      featured: false
    },
    {
      id: 7,
      title: "5 Best Practices for Deploying Rugged Devices in Manufacturing",
      excerpt: "Essential guidelines for successfully implementing rugged computing solutions in manufacturing environments to maximize ROI.",
      author: "Amanda Chen",
      authorRole: "Manufacturing Solutions Expert",
      date: "2024-01-01",
      readTime: "5 min read",
      category: "best-practices",
      tags: ["Manufacturing", "Implementation", "ROI", "Best Practices"],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      views: 2130,
      comments: 25,
      featured: false
    }
  ];

  const trendingTopics = [
    { topic: "AI in Industrial IoT", posts: 12 },
    { topic: "5G Rugged Devices", posts: 8 },
    { topic: "Sustainability in Tech", posts: 6 },
    { topic: "Edge Computing", posts: 9 },
    { topic: "Cybersecurity", posts: 7 }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/85 to-slate-800/70"></div>
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
            <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-3 text-blue-300 text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4 mr-2" />
              Industry Insights & Updates
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              The Rugged Technology Blog
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Stay ahead with the latest insights, innovations, and best practices in rugged computing technology and industrial applications.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, and insights..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#F4B426] focus:border-[#F4B426] transition-colors text-white placeholder-slate-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#F4B426] text-white text-sm font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center mb-3 text-sm">
                        <Tag className="w-4 h-4 mr-2" />
                        {featuredPost.tags.join(', ')}
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-200 mb-4 text-lg">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm">
                          <User className="w-4 h-4 mr-2" />
                          <span>{featuredPost.author}</span>
                          <span className="mx-2">•</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {featuredPost.views}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {featuredPost.comments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-[#F4B426] text-white shadow-lg'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 text-xs opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-slate-900/80 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white text-sm">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F4B426] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <button className="text-[#F4B426] hover:text-[#e6a625] font-medium text-sm flex items-center group/button">
                          Read More
                          <ChevronRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform" />
                        </button>
                        <button className="text-slate-400 hover:text-[#F4B426] transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-[#F4B426] hover:bg-[#e6a625] text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-[#F4B426] to-[#e6a625] rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get the latest insights and industry updates delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg placeholder-white/70 text-white focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-[#F4B426] font-semibold py-3 rounded-lg hover:bg-white/90 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Trending Topics */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Trending Topics</h3>
                  <div className="space-y-4">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-[#F4B426] mr-3" />
                          <span className="text-slate-700 group-hover:text-[#F4B426] transition-colors font-medium">
                            {topic.topic}
                          </span>
                        </div>
                        <span className="text-slate-500 text-sm">
                          {topic.posts} posts
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="group cursor-pointer">
                        <h4 className="font-medium text-slate-900 group-hover:text-[#F4B426] transition-colors text-sm leading-tight mb-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-slate-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.filter(cat => cat.id !== 'all').map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between text-left p-3 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-[#F4B426]/10 text-[#F4B426]'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm opacity-75">({category.count})</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;