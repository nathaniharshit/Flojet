import React from 'react';
import ImageCarousel from './ImageCarousel';
import {CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Image Carousel Section */}
      <section className="py-8 bg-gray-100">
        <div className="container-custom px-4 md:px-8 flex justify-center">
          <ImageCarousel />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container-custom px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Company</h2>
            <p className="text-lg text-black-2000 mb-4">
              <span className="font-bold">"Flojet®"</span> – Trusted Excellence in 
              <span className="font-bold"> Sealing Solutions</span> for Over 
              <span className="font-bold"> 35 Years</span>.
              <span className="font-bold"> "Flojet®"</span> is an 
              <span className="font-bold"> ISO-certified</span> and <span className="font-bold"> MSME certified company</span> with a legacy of over 35 years in delivering 
              comprehensive solutions in the <span className="font-bold">sealing industry</span> and 
              <span className="font-bold"> preventive maintenance</span>.
              As one of the most experienced and prominent 
              <span className="font-bold"> manufacturers</span> and 
              <span className="font-bold"> marketers</span> of reliable sealing products, <span className="font-bold">"Flojet®"</span> has earned a distinguished reputation for 
              <span className="font-bold"> quality</span> and 
              <span className="font-bold"> innovation</span>.
              Our product range includes 
              <span className="font-bold"> non-asbestos braided gland packing ropes</span>, 
              <span className="font-bold"> sealing rings</span>, 
              <span className="font-bold"> precision-cut gaskets</span>, and 
              <span className="font-bold"> expanded PTFE gasketing products</span> — all designed to provide durable and cost-effective solutions to complex sealing challenges across various industrial sectors.
              At <span className="font-bold">"Flojet®"</span>, we are driven by the philosophy: 
              <span className="font-bold"> “Quality leads to trust.”</span>
              This belief forms the foundation of our long-standing relationships with some of the most respected companies in India.
              Our commitment to <span className="font-bold">excellence</span>, combined with decades of 
              <span className="font-bold"> technical expertise</span>, allows us to consistently deliver 
              <span className="font-bold"> value</span>, 
              <span className="font-bold"> reliability</span>, and 
              <span className="font-bold"> customer satisfaction</span>.
              With a focus on 
              <span className="font-bold"> continuous improvement</span>, <span className="font-bold">"Flojet®"</span> remains a 
              <span className="font-bold"> one-stop solution provider</span> for industries seeking 
              <span className="font-bold"> high-performance sealing and maintenance products</span> that stand the test of time.
            </p>
            <p className="text-lg text-black-2000">
              Backed by years of <span className="font-bold">engineering expertise</span>, our products meet the most demanding 
              standards of <span className="font-bold">durability</span>, 
              <span className="font-bold"> precision</span>, and 
              <span className="font-bold"> reliability</span>.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://github.com/nathaniharshit/Flojet/blob/main/images/company_overview.jpg?raw=true"
              alt="Company Overview"
              className="rounded-xl shadow-lg max-w-[400px] w-full h-auto"
            />
          </div>
        </div>
      </section>

     {/* Why Choose Us Section */}
<section className="py-16 bg-white-100 text-gray-800">
  <div className="container-custom px-4 md:px-8 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Choose Us</h2>

    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Points Column */}
      <div className="md:w-1/2 space-y-6">
      <div className="flex items-start gap-4">
      <CheckCircle className="w-6 h-6 text-red-600 shrink-0" />
      <div>
            <h3 className="font-semibold text-xl">Technical Support:</h3>
            <p className="text-gray-600 text-l">
              We provide technical selection support from our wide range of products suitable for the application parameters.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
        <CheckCircle className="w-6 h-6 text-red-600 shrink-0" />
        <div>
            <h3 className="font-semibold text-xl">Special Customizations:</h3>
            <p className="text-gray-600 text-l">
              We specially design the Gland Packing and Gasketing products suitable to your application parameters.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
        <CheckCircle className="w-6 h-6 text-red-600 shrink-0" />
        <div>
            <h3 className="font-semibold text-xl">Regular / Emergency Support:</h3>
            <p className="text-gray-600 text-l">
              We take orders to meet your regular / emergency requirements and ensure timely deliveries through the fastest courier service agencies or personal deliveries wherever possible.            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
        <CheckCircle className="w-6 h-6 text-red-600 shrink-0" />
        <div>
            <h3 className="font-semibold text-xl">Best Price Support:</h3>
            <p className="text-gray-600 text-l">
              We can work out special prices for specific requirements Or Even go for an annual contract and keep you supplying products when required with lock-in price.            
            </p>
          </div>
        </div>      
      </div>

      {/* Image Column */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://github.com/nathaniharshit/Flojet/blob/main/images/why_choose_img.jpg?raw=true"
          alt="Why Choose Us"
          className="max-w-[650px] w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Hero;
