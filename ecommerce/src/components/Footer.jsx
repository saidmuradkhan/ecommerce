import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-12">Trusted by the industry leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 text-gray-400 font-bold text-2xl">
            <div className="flex items-center gap-2"><span className="text-4xl text-gray-500">a</span> Amazon</div>
            <div className="flex items-center gap-2"><span className="text-4xl text-gray-500">🍏</span> Apple</div>
            <div className="flex items-center gap-2"><span className="text-4xl text-gray-500">🐳</span> Docker</div>
            <div className="flex items-center gap-2"><span className="text-4xl text-gray-500">📡</span> Spotify</div>
            <div>FedEx</div>
            <div className="border-2 border-gray-400 rounded-full px-4 py-1">intel</div>
            <div className="flex items-center">🔴🟡</div>
            <div className="text-4xl font-extrabold font-serif">N</div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-6">Getting started</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-blue-600">Installation</a></li>
              <li><a href="#" className="hover:text-blue-600">Release Notes</a></li>
              <li><a href="#" className="hover:text-blue-600">Upgrade Guide</a></li>
              <li><a href="#" className="hover:text-blue-600">Using with Preprocessors</a></li>
              <li><a href="#" className="hover:text-blue-600">Optimizing for Production</a></li>
              <li><a href="#" className="hover:text-blue-600">Browser Support</a></li>
              <li><a href="#" className="hover:text-blue-600">IntelliSense</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-6">Core Concepts</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-blue-600">Utility-First</a></li>
              <li><a href="#" className="hover:text-blue-600">Responsive Design</a></li>
              <li><a href="#" className="hover:text-blue-600">Hover, Focus, & Other States</a></li>
              <li><a href="#" className="hover:text-blue-600">Dark Mode</a></li>
              <li><a href="#" className="hover:text-blue-600">Adding Base Styles</a></li>
              <li><a href="#" className="hover:text-blue-600">Extracting Components</a></li>
              <li><a href="#" className="hover:text-blue-600">Adding New Utilities</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-6">Customization</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-blue-600">Configuration</a></li>
              <li><a href="#" className="hover:text-blue-600">Theme Configuration</a></li>
              <li><a href="#" className="hover:text-blue-600">Breakpoints</a></li>
              <li><a href="#" className="hover:text-blue-600">Customizing Colors</a></li>
              <li><a href="#" className="hover:text-blue-600">Customizing Spacing</a></li>
              <li><a href="#" className="hover:text-blue-600">Configuring Variants</a></li>
              <li><a href="#" className="hover:text-blue-600">Plugins</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-6">Community</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-blue-600">GitHub</a></li>
              <li><a href="#" className="hover:text-blue-600">Discord</a></li>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-sm text-gray-500 pt-16 font-medium text-center md:text-left">
          © Copyright 1986. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
