import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="max-w-4xl px-8 py-20">
      <h1 className="text-6xl font-extrabold text-[#111827] leading-tight tracking-tight mb-6">
        Ac <br />
        mattis<span className="text-blue-600">senectus</span>erat <br />
        pharetra
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-lg font-medium">
        Dictum aliquam porta in condimentum ac integerturpis pulvinar, est scelerisque ligula sem
      </p>
      <div className="flex space-x-4">
        <Button variant="primary">Suspendisse</Button>
        <Button variant="secondary">Malesuada</Button>
      </div>
    </section>
  );
};

export default Hero;
