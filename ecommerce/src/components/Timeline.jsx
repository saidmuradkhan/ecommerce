import React from 'react';

const Timeline = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 items-start py-16 px-8 max-w-6xl mx-auto">
      <div className="md:w-1/3">
        <div className="w-16 h-1.5 bg-blue-600 mb-6 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Morbi tempor</h2>
        <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">Vestibulum diam nunc</p>
      </div>
      <div className="md:w-2/3 relative border-l-2 border-blue-100 pl-8 ml-4 md:ml-0 mt-8 md:mt-0">
        <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[11px] top-1 border-4 border-[#F9FAFB]"></div>
        <h3 className="text-2xl font-bold text-gray-800">Donec porta enim vel</h3>
        <p className="text-gray-400 text-sm mb-4 font-medium tracking-wide">DEC 2020</p>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </section>
  );
};

export default Timeline;
