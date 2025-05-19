import React from 'react';
import { CheckSquare, Factory, Hexagon } from 'lucide-react';

const features = [
  {
    icon: <Factory size={32} className="text-primary" />,
    title: "State-of-the-Art Manufacturing",
    desc: "Advanced manufacturing facilities ensure precision and consistent quality in every carbon gasket."
  },
  {
    icon: <Hexagon size={32} className="text-primary" />,
    title: "Engineering Excellence",
    desc: "Each gasket is designed to meet exact specs, delivering optimal performance in industrial conditions."
  },
  {
    icon: <CheckSquare size={32} className="text-primary" />,
    title: "Quality Assurance",
    desc: "Strict quality control ensures reliability and durability that exceeds industry benchmarks."
  }
];

const stats = [
  { label: "Years Experience", value: "30+" },
  { label: "Clients across India", value: "500+" },
  { label: "Customer Satisfaction", value: "99%" }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 py-20">
      <div className="container-custom px-4 sm:px-8">

        {/* About Us */}
        <div id="aboutus" className="text-center mb-20 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Company</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Flojet® Engineers Pvt. Ltd. has been a pioneer in carbon gasket manufacturing for over 30 years. 
            Our commitment to innovation, quality, and customer satisfaction has positioned us as a trusted leader in the industrial sealing industry.
          </p>
        </div>

        {/* Background */}
        <div id="background" className="grid md:grid-cols-3 gap-8 fade-in mb-20">
          {features.map((item, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* We Are There For You */}
        <div id="we-are-there-for-you" className="my-20 max-w-4xl mx-auto text-center fade-in">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">We Are There For You</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Flojet®, we prioritize our customers by offering personalized support, timely delivery, and technical assistance throughout your purchase and beyond.
            Our dedicated team ensures every project receives the attention and expertise it deserves.
          </p>
        </div>

        {/* Our Vision */}
        <div id="our-vision" className="my-20 max-w-4xl mx-auto text-center fade-in">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To be recognized as the leading manufacturer of high-performance sealing solutions by fostering innovation, sustainability, and customer satisfaction.
            We strive to push the boundaries of technology while maintaining eco-friendly manufacturing practices.
          </p>
        </div>

        {/* Why Us */}
        <div id="why-us" className="my-20 max-w-4xl mx-auto text-center fade-in">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
            <li>Over 30 years of industry experience delivering reliable sealing solutions.</li>
            <li>Strict quality control and ISO certification.</li>
            <li>Advanced manufacturing with precision engineering.</li>
            <li>Committed to customer satisfaction with technical support.</li>
            <li>Environmentally responsible and sustainable practices.</li>
          </ul>
        </div>

        {/* Company Overview */}
        <div id="overview" className="bg-white p-10 rounded-2xl shadow-lg fade-in mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Overview</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong className="text-primary">Flojet® Engineers Pvt. Ltd.</strong> is an 
                <span className="text-primary font-medium"> ISO-certified</span> leader in 
                <span className="text-primary font-medium"> high-performance sealing systems</span>. 
                With nearly <span className="text-primary font-semibold">three decades</span> of legacy, 
                our products—ranging from Non-Asbestos Gland Packings to Pure PTFE Gaskets and Cold Welding Compounds—
                are trusted across India.
                <br /><br />
                Our philosophy <strong className="text-primary">“Quality Leads to Trust”</strong> drives our mission to deliver 
                consistent quality, technical support, and innovation.
              </p>
            </div>
            <div className="h-72 bg-[url('https://i.pinimg.com/736x/be/1c/ff/be1cff5cc27026e555bfea382918c33c.jpg')] bg-cover bg-center rounded-xl shadow" />
          </div>
        </div>

        {/* Commitment */}
        <div id="commitment" className="bg-white p-10 rounded-2xl shadow-lg fade-in">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h3>
              <p className="text-gray-600 mb-4">
                We deliver exceptional carbon gaskets that ensure superior sealing in varied industrial applications.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to innovation and quality has made us a trusted partner to 500+ clients nationwide.
              </p>
              <div className="flex flex-wrap gap-6 mt-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{stat.value}</span>
                    </div>
                    <span className="ml-3 text-gray-700">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-72 bg-[url('https://i.pinimg.com/736x/14/49/e8/1449e810733a9bbe2a7790033cacdc9a.jpg')] bg-cover bg-center rounded-xl shadow" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
