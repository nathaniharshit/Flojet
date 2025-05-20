import React from 'react';
import { Users, Briefcase, Heart, Eye, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6 sm:px-12 md:px-20">
      
      {/* About Us */}
      <section id="aboutus" className="max-w-4xl mx-auto mb-20 scroll-mt-24">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <div className="w-20 h-1 bg-primary rounded mb-6"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          The company in the year 1996 went into manufacturing and a new mission was set, a mission fuelled by
          inspiration and established a wide-ranging pilot plant set-up on which every application is tried and studied
          deeply. Each of the analysis is confirmed by technically qualified, experienced and committed professionals from
          the particular key areas.
          “Flojet®” products are being manufactured through the world’s best technology, most modern machines
          developed with the help of research, applied science, specialized technical knowledge and innovative skilled
          experienced technocrats, with firm belief in ‘Investment for the future’ by continuously upgrading facility.
          Our own overseas staff carefully selects every product from the origin i.e. manufacturers where it is 
          produced and is inspected through all the processes to ensure their quality before shipping. Company is always
          engaged in buying good and new technology products and then developing and inspecting at every step which
          make “FLOJET®”- A PRODUCT UNIQUE. Moreover, we believe that THIS SMALL MAINTENANCE PRODUCTS
          needs to be dealt with the special care, if it needs to be HIGHLY RELIABLE AND DURABLE.
   
          We, at Flojet Engineers Pvt. Ltd., are actively engaged in R&amp;D to expand and upgrade the existing line
          of sealing method in the Indian industries.
          The moving force behind FEPL&#39;S success is its decentralized management philosophy. A profit center
          approach to branch management, allows on the spot decision making, trained and experienced sales field force
          and dedicated and committed employees.
          Presently, “Flojet®” is supplying their products to more than 1000 Satisfied Customers in all Segments
          such as Refinery, Petrochemicals, Chemicals, Dyes-Intermediates, Fertilizer, Pharmaceuticals, Engineering,
          Food, Gas and Oil Extraction, Sugar, Steel, Pulp &amp; Paper, Power Generation, Marine etc.
        </p>
      </section>

      {/* Background */}
      <section id="background" className="max-w-4xl mx-auto mb-20 scroll-mt-24">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Background</h1>
        <div className="w-20 h-1 bg-primary rounded mb-6"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Location: R.R. Engineers then was established in the year 1985 with limited activities of marketing maintenance
          products in South Gujarat only for In-situ Epoxy repair solution and asbestos free sealing products in a highly
          Industrialized City known as Vadodara (Baroda) which is 400 kms south of Mumbai (Bombay) in very prosperous
          Gujarat state located in west coast and central India.
          In 1989 R.R Engineers was renamed as Flojet Engineers Pvt. Ltd with a vision of expanding the business
          whole Gujarat state and solving all types of engineering maintenance problem.

          In 1995 Flojet further expanded their business in manufacturing sector with latest technology to
          manufacture Four Track Square Braided Gland Packings at 31, Sardar Industrial Estate, Ajwa Road, Vadodara
          and since past 25 years we have become one the biggest manufacturer for Asbestos free Gland Packing serving
          more than 2000 clients all over India.
          We are proud to have 90% retention of clients since 1985 inception of our business.
        </p>
      </section>

      {/* We Are There For You */}
      <section id="we-are-there-for-you" className="max-w-4xl mx-auto mb-20 scroll-mt-24">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">We are there for you</h1>
        <div className="w-20 h-1 bg-primary rounded mb-6"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Flojet intrinsic strength is that it is the Company which offers after sales courteous visit services
          for products sold by it. Our Engineers, visit, studies and discusses problems faced in different
          application of sealing, which gives us in person feedback to upgrade our systems.
          Apart from this we provide guidance and support for the product application by offering necessary
          free trials to facilitate application.
        </p>
      </section>

      {/* Our Vision */}
      <section id="our-vision" className="max-w-4xl mx-auto mb-20 scroll-mt-24">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Vision</h1>
        <div className="w-20 h-1 bg-primary rounded mb-6"></div>
        <img src="https://i.pinimg.com/736x/59/85/ed/5985ed956b8626bf5a1b3a8bc8b70f9a.jpg" alt="vision" />
      </section>

      {/* Why Us */}
      <section id="why-us" className="max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <CheckCircle className="text-primary" size={32} /> Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
          <li>Over 30 years of trusted industry experience.</li>
          <li>Certified quality and precision manufacturing.</li>
          <li>Customer-first approach with personalized support.</li>
          <li>Cutting-edge technology and sustainable practices.</li>
          <li>Nationwide presence with 500+ satisfied clients.</li>
        </ul>
      </section>
    </main>
  );
};

export default AboutPage;
