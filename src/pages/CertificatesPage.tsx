import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Certificates from '../components/Certificates';

const CertificatesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Certificates />
      </main>
      <Footer />
    </div>
  );
};

export default CertificatesPage;
