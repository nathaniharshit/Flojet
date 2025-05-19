
import React from 'react';
import { Circle, Hexagon, Square, Triangle } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Carbon Gaskets</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            Our carbon gaskets are engineered to deliver superior performance 
            across a wide range of industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <Triangle size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Temperature Resistance</h3>
            <p className="text-gray-300">
              Our carbon gaskets maintain integrity across extreme temperature 
              ranges, from cryogenic conditions to high-heat environments.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <Square size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Chemical Resistance</h3>
            <p className="text-gray-300">
              Engineered to withstand exposure to harsh chemicals, acids, and 
              corrosive substances without degradation.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <Circle size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Pressure Handling</h3>
            <p className="text-gray-300">
              Superior compression recovery and tensile strength enable our gaskets 
              to perform reliably under high-pressure conditions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <Hexagon size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Longevity</h3>
            <p className="text-gray-300">
              Exceptional durability and resistance to aging, resulting in extended 
              service life and reduced maintenance requirements.
            </p>
          </div>
        </div>

        <div className="mt-16 fade-in">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                <p className="text-gray-300 mb-6">
                  Our carbon gaskets are engineered to meet and exceed industry standards, 
                  providing reliable sealing solutions for critical applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                    <span className="text-gray-200">Temperature Range: -240°C to 450°C</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                    <span className="text-gray-200">Pressure Rating: Up to 3000 PSI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                    <span className="text-gray-200">Chemical Compatibility: Acids, Alkalines, Hydrocarbons</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                    <span className="text-gray-200">Compressibility: 7-12% (ASTM F36)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                    <span className="text-gray-200">Recovery: &gt;50% (ASTM F36)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                    <span className="text-gray-200">Certifications: ISO 9001, API 6FB, ASME</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-4">Industry Applications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 p-4 rounded">Oil & Gas</div>
                    <div className="bg-white/20 p-4 rounded">Chemical Processing</div>
                    <div className="bg-white/20 p-4 rounded">Power Generation</div>
                    <div className="bg-white/20 p-4 rounded">Automotive</div>
                    <div className="bg-white/20 p-4 rounded">Aerospace</div>
                    <div className="bg-white/20 p-4 rounded">Marine Engineering</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
