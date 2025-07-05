import React from 'react';
import { LifeBuoy, Settings, Zap, Truck, BadgeDollarSign, Factory } from 'lucide-react'; 
import { TrendingUp, Users, Award, Store, ShieldCheck, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

<div className="flex items-start space-x-4 bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-shadow">
  <Factory className="text-red-500 w-6 h-6 mt-1" />
  <div>
    <p className="font-bold text-gray-800">In-House Manufacturing Expertise</p>
    <p>We manufacture our gaskets in-house using advanced machines and strict quality standards, ensuring precision and reliability in every product.</p>
  </div>
</div>

const AboutPage: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6 sm:px-12 md:px-20">
      
      {/* About Us */}
      <section id="about" className="max-w-4xl mx-auto mb-20 scroll-mt-32 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image on the left */}
          <motion.div
            className="md:w-1/3 w-full flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://github.com/nathaniharshit/Flojet/blob/main/Flojet%20Engineers%20Pvt.%20Ltd.%20-%20A%20Legacy%20of%20Innovation%20and%20Quality%20-%20visual%20selection.png?raw=true"
              alt="Flojet Engineers Pvt Ltd"
              className="rounded-xl shadow-lg max-w-[350px] w-full h-auto"
            />
          </motion.div>
          {/* Text on the right */}
          <div className="md:w-2/3 w-full">
            <motion.h1
              className="text-4xl font-extrabold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              About Us
            </motion.h1>
            <motion.div
              className="w-20 h-1 bg-red-500 rounded mb-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
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
              <br />
              We, at Flojet Engineers Pvt. Ltd., are actively engaged in R&amp;D to expand and upgrade the existing line
              of sealing method in the Indian industries.
              The moving force behind FEPL&#39;S success is its decentralized management philosophy. A profit center
              approach to branch management, allows on the spot decision making, trained and experienced sales field force
              and dedicated and committed employees.
              Presently, “Flojet®” is supplying their products to more than 1000 Satisfied Customers in all Segments
              such as Refinery, Petrochemicals, Chemicals, Dyes-Intermediates, Fertilizer, Pharmaceuticals, Engineering,
              Food, Gas and Oil Extraction, Sugar, Steel, Pulp &amp; Paper, Power Generation, Marine etc.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section id="background" className="max-w-4xl mx-auto mb-20 scroll-mt-32">
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Background
        </motion.h1>
        <motion.div
          className="w-20 h-1 bg-red-500 rounded mb-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
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
      <section id="we-are-there-for-you" className="max-w-4xl mx-auto mb-20 scroll-mt-32">
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We are there for you
        </motion.h1>
        <motion.div
          className="w-20 h-1 bg-red-500 rounded mb-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <p className="text-lg text-gray-700 leading-relaxed">
          Flojet intrinsic strength is that it is the Company which offers after sales courteous visit services
          for products sold by it. Our Engineers, visit, studies and discusses problems faced in different
          application of sealing, which gives us in person feedback to upgrade our systems.
          Apart from this we provide guidance and support for the product application by offering necessary
          free trials to facilitate application.
        </p>
      </section>

      {/* Our Vision */}
      <section id="our-vision" className="max-w-4xl mx-auto mb-20 scroll-mt-32">
    <motion.h2
      className="text-4xl font-extrabold text-gray-900 mb-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      Our Vision
    </motion.h2>
    <motion.div
      className="w-20 h-1 bg-red-500 rounded mb-6"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    />
    <div className="grid md:grid-cols-2 gap-6">
      {/* Goal 1 */}
      <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <TrendingUp className="text-blue-600" size={28} aria-hidden="true" />
        </div>
        <p className="text-lg text-gray-700">Increase market share</p>
      </div>

      {/* Goal 2 */}
      <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Users className="text-blue-600" size={28} aria-hidden="true" />
        </div>
        <p className="text-lg text-gray-700">Actively participate in the growth of our business partners</p>
      </div>

      {/* Goal 3 */}
      <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Award className="text-blue-600" size={28} aria-hidden="true" />
        </div>
        <p className="text-lg text-gray-700">Be the No. 1 manufacturing & marketing company in sealing systems</p>
      </div>

      {/* Goal 4 */}
      <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Store className="text-blue-600" size={28} aria-hidden="true" />
        </div>
        <p className="text-lg text-gray-700">Expand dealer branches and stocking points</p>
      </div>

      {/* Goal 5 */}
      <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <ShieldCheck className="text-blue-600" size={28} aria-hidden="true" />
        </div>
        <p className="text-lg text-gray-700">
          Build <span className="font-bold">Flojet®</span> brand equity and promote brand awareness
        </p>
      </div>

      {/* Goal 6 */}
      <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Lightbulb className="text-blue-600" size={28} aria-hidden="true" />
        </div>
        <p className="text-lg text-gray-700">
          Introduce new products/services by innovative methods and vigorous R&amp;D
        </p>
      </div>
    </div>
</section>

      {/* Why Us */}
      <section id="why-us" className="max-w-4xl mx-auto mb-24 scroll-mt-32">
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Why Us?
      </motion.h1>
      <motion.div
        className="w-20 h-1 bg-red-500 rounded mb-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
    {/* Card 1 */}
    <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <LifeBuoy className="text-blue-600" size={28} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold text-gray-800">Technical Support</p>
        <p>We provide technical selection from our extensive range of packing solutions.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Settings className="text-blue-600" size={28} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold text-gray-800">Special Customizations</p>
        <p>We design packing products and gaskets tailored to your application needs.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Zap className="text-blue-600" size={28} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold text-gray-800">Emergency Support</p>
        <p>We handle urgent orders and deliver personally whenever possible.</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Truck className="text-blue-600" size={28} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold text-gray-800">Smooth Delivery Process</p>
        <p>Our strong courier partnerships ensure on-time delivery with ease.</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <BadgeDollarSign className="text-blue-600" size={28} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold text-gray-800">Best Pricing</p>
        <p>We offer competitive pricing and flexible annual contracts with fixed rates.</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="group flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Factory className="text-blue-600" size={28} aria-hidden="true" />
      </div>
      <div>
        <p className="font-bold text-gray-800">In-House Manufacturing Expertise</p>
        <p>We manufacture our gaskets in-house using advanced machines and strict quality standards, ensuring precision and reliability in every product.</p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default AboutPage;
