import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Hero } from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import IndustryPage from './pages/IndustryPage';
import SolutionsPage from './pages/SolutionsPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import DownloadsPage from './pages/DownloadsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Industries />
              <Products />
              <Features />
              <CaseStudies />
              <Certifications />
              <Resources />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/laptops" element={<CategoryPage />} />
          <Route path="/tablets" element={<CategoryPage />} />
          <Route path="/phones" element={<CategoryPage />} />
          <Route path="/vehicle" element={<CategoryPage />} />
          <Route path="/industries/mining" element={<IndustryPage industry="mining" />} />
          <Route path="/industries/construction" element={<IndustryPage industry="construction" />} />
          <Route path="/industries/field-services" element={<IndustryPage industry="field-services" />} />
          <Route path="/industries/defence" element={<IndustryPage industry="defence" />} />
          <Route path="/industries/manufacturing" element={<IndustryPage industry="manufacturing" />} />
          <Route path="/industries/utilities" element={<IndustryPage industry="utilities" />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/:slug" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;