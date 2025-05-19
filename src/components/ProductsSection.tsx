import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Standard Carbon Gaskets",
      description: "Versatile carbon gaskets suitable for general industrial applications with excellent temperature resistance.",
      features: ["Temperature range: -240°C to 450°C", "Chemical resistant", "Standard sizes available"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800"
    },
    {
      id: 2,
      name: "High-Pressure Carbon Gaskets",
      description: "Engineered for extreme pressure environments where standard gaskets would fail.",
      features: ["Pressure rating up to 3000 PSI", "Enhanced structural integrity", "Custom dimensions available"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800"
    },
    {
      id: 3,
      name: "Corrosion-Resistant Carbon Gaskets",
      description: "Specialized gaskets for environments with aggressive chemicals and corrosive materials.",
      features: ["Superior chemical resistance", "Extended service life", "Ideal for chemical processing"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800"
    },
    {
      id: 4,
      name: "Custom Engineered Solutions",
      description: "Tailored carbon gasket solutions designed to meet your specific application requirements.",
      features: ["Custom design and engineering", "Specialized materials available", "Technical consultation included"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
    }
  ];

  return (
    <section id="products" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Carbon Gasket Products</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover our range of precision-engineered carbon gaskets designed to meet 
            diverse industrial sealing requirements with exceptional performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 fade-in">
          {products.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link to="/contact">Request Specifications</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center fade-in">
          <p className="text-gray-700 mb-6">
            Need a customized solution for your specific requirements?
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8">
            <Link to="/contact">Contact Our Engineering Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
