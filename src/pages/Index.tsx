import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Certificates from '../components/Certificates';

const Index: React.FC = () => {
  return (
    <>
      <Hero />
      {/* If you want Certificates on home page */}
      {/* <Certificates /> */}
      <Clients />
    </>
  );
};

export default Index;
