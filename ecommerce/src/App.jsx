import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Card from './components/Card';
import Footer from './components/Footer';
import { products } from './db/data';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans">
      <Header />
      
      <main>
        <div className="bg-[#F9FAFB]">
          <div className="max-w-6xl mx-auto">
            <Hero />
          </div>
        </div>

        {/* First section of products */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 6).map(product => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline separator */}
        <div className="bg-[#F9FAFB]">
          <Timeline />
        </div>

        {/* Remaining products */}
        <section className="bg-[#F9FAFB] pb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(6).map(product => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
