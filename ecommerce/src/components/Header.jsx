import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-center py-6 px-4 bg-white border-b border-gray-100">
      <div className="flex items-center space-x-6 text-sm font-medium text-gray-500">
        <a href="#" className="hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-1">Link</a>
        <a href="#" className="hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-1">Link</a>
        <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">Link</a>
      </div>
      <div className="mx-8 text-blue-500">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 2 17 12 22 22 17 22 7 12 2" />
          <polyline points="2 7 12 12 22 7" />
          <polyline points="12 22 12 12" />
        </svg>
      </div>
      <div className="flex items-center space-x-6 text-sm font-medium text-gray-500">
        <a href="#" className="hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-1">Link</a>
        <a href="#" className="hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-1">Link</a>
        <a href="#" className="hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 pb-1">Link</a>
      </div>
    </header>
  );
};

export default Header;
