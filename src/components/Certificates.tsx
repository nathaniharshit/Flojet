import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Certificates: React.FC = () => {
  return (
<section id="certificates" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-red-50 py-20">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      ></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Quality Certifications
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
          <div className="flex items-center justify-center gap-2 mb-4">
          </div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our commitment to quality and excellence is backed by prestigious industry certifications,
            ensuring our products meet the highest standards.
          </motion.p>
        </div>

        {/* ISO Certificate */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-gray-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-primary rounded-lg blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden border-2 border-gray-100">
                      <a href="https://drive.google.com/file/d/1kgbdrtF5N94LhaNm5mi6R4hhbGS0xphq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="https://i.pinimg.com/736x/2c/15/fb/2c15fb02f1d63157950ea64209555942.jpg" 
                          alt="ISO Certificate" 
                          className="w-full h-auto object-contain cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">ISO 9001:2015</h3>
                  <p className="text-gray-600 mb-4">
                    We are proud to hold the ISO 9001:2015 certification, demonstrating our 
                    commitment to consistent quality management systems and customer satisfaction.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Quality Management System</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Internationally Recognized Standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Continuous Improvement Process</span>
                    </li>
                  </ul>
                  <a href="https://drive.google.com/uc?export=download&id=1kgbdrtF5N94LhaNm5mi6R4hhbGS0xphq" download>
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* MSME Certificate */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-gray-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-primary rounded-lg blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden border-2 border-gray-100">
                      <a href="https://drive.google.com/file/d/15cRyYk--gC_aXcNvoaFdZaGc9BE8kkWC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="https://i.pinimg.com/736x/49/ce/99/49ce99a6c7bb0675a9f5acf9c8bc3d13.jpg" 
                          alt="MSME Certificate" 
                          className="w-full h-auto object-contain cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">MSME Registration</h3>
                  <p className="text-gray-600 mb-4">
                    Our MSME (Micro, Small and Medium Enterprises) certification recognizes our contribution
                    to the manufacturing sector and grants us various operational and financial benefits.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Registered under Government of India</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Eligible for MSME Schemes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Operational Credibility & Recognition</span>
                    </li>
                  </ul>
                  <a href="https://drive.google.com/uc?export=download&id=15cRyYk--gC_aXcNvoaFdZaGc9BE8kkWC" download>
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Company registration Certificate */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-gray-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-primary rounded-lg blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden border-2 border-gray-100">
                      <a href="https://drive.google.com/file/d/1Fn3rPXIN7LxSl3NaAapbeQzfrkEjOS1Y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="https://i.pinimg.com/736x/d5/c8/5f/d5c85faa61c6882e15a7f6b90e94599a.jpg" 
                          alt="MSME Certificate" 
                          className="w-full h-auto object-contain cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Company Registration Certificate</h3>
                  <p className="text-gray-600 mb-4">
                  Our Company Registration Certificate confirms that Flojet Engineers Pvt. Ltd. is a legally established entity recognized under the Companies Act, 2013. This certification reinforces our credibility, legal compliance, and long-term commitment to professional excellence in the engineering and sealing solutions industry.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Validates legal existence and corporate identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Enhances transparency and trust among clients and partners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Supports seamless business operations and contract eligibility</span>
                    </li>
                  </ul>
                  <a href="https://drive.google.com/uc?export=download&id=1Fn3rPXIN7LxSl3NaAapbeQzfrkEjOS1Y" download>
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Company Pan Card */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-gray-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-primary rounded-lg blur opacity-25"></div>
                    <div className="relative bg-white rounded-lg overflow-hidden border-2 border-gray-100">
                      <a href="https://drive.google.com/file/d/10SaWWM7CsyivU3_uXF1XU7auoekcOiJL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img 
                          src="https://media.assettype.com/outlookmoney/2024-12-07/3cguwiua/111121552.jpg.webp?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100" 
                          alt="PAN" 
                          className="w-full h-auto object-contain cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Company Pan Card</h3>
                  <p className="text-gray-600 mb-4">
                    Our PAN (Permanent Account Number) Card is an essential tax identification document issued by the Income Tax Department of India. It uniquely identifies Flojet Engineers Pvt. Ltd. for all financial and tax-related activities, ensuring compliance with the law and facilitating transparent business transactions.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Enables accurate filing of income tax returns and tax compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Acts as a unique financial identity for the company</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Essential for banking, tax deduction, and financial transactions</span>
                    </li>
                  </ul>
                  <a href="https://drive.google.com/uc?export=download&id=10SaWWM7CsyivU3_uXF1XU7auoekcOiJL" download>
                    <Button className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Certificate
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
