import React from 'react';
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import ProductsShowcase from '../components/ProductsShowcase';
import Features from '../components/Features';
import CaseStudies from '../components/CaseStudies';
import Certifications from '../components/Certifications';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <Hero />
    <ProductsShowcase />
    <Features />
    <CaseStudies />
    <Certifications />
    <Resources />
    <Contact />
    <Footer />
  </div>
);

export default Home;
