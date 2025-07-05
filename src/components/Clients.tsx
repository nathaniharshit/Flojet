import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface Client {
  name: string;
  logo?: string;
}

const clientsList: Client[] = [
  { name: "Ambuja Cement", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Ambuja_Cements.svg/1200px-Ambuja_Cements.svg.png" },
  { name: "Alembic", logo: "https://alembicpharmaceuticals.com/assets/img/Alembic-logo.webp"},
  { name: "ONGC", logo: "https://i.pinimg.com/736x/d2/86/cb/d286cb1186455a2f230623d445eb6955.jpg"},
  { name: "Bharat Petroleum", logo:"https://i.pinimg.com/736x/3e/9b/64/3e9b64f5b3265600431836556dd1ee7c.jpg"},
  { name: "HP", logo:"https://i.pinimg.com/736x/70/4b/71/704b71704097e3844e9d59eb34e4fc99.jpg"},
  { name: "Aditya Birla Group", logo:"https://i.pinimg.com/736x/83/f6/79/83f679a0e335e19154e1da0a5cc0ae90.jpg"},
  { name: "GACL", logo:"https://gacl.com/wp-content/uploads/2023/12/GACL-site-logo.png"},
  { name: "Indian Oil", logo:"https://i.pinimg.com/736x/d4/b6/be/d4b6be6690b095cfe34c95d2a3cf107c.jpg"},
  { name: "Krishak Bharti Co-op Ltd", logo:"https://agrospectrumindia.com/wp-content/uploads/2025/02/KRIBHCO-Krishak-Bharati-Cooperative-logo.webp"},
  { name: "SRF Ltd", logo:"https://upload.wikimedia.org/wikipedia/commons/e/e7/SRF_Limited.png"},
  { name: "Patanjali Foods Ltd", logo:"https://exchange4media.gumlet.io/news-photo/143497-patanjali.jpeg"},
  { name: "Hindalco Industries Ltd", logo:"https://sustainabilitynext.in/wp-content/uploads/2020/12/2-hindalco.png"},
  { name: "Grasim Industries Limited", logo:"https://www.cms.adityabirla.com/uploads/Grasim_3042dd7b0c.webp"},
  { name: "TATA Chemicals Ltd", logo:"https://www.sanjanacryogenic.com/wp-content/uploads/2015/07/tata_logo.jpg"},
  { name: "NIRMA Limited", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-zi08uaxes6Exsc_yQCDb4wHj1KK_LCBFw&s"},
  { name: "Pidilite Ltd", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKf_qsZl1oFSGuqHUe1bNCQbKgNRHys0b-qQ&s"}
];

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const dividerVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
  })
};

const Clients: React.FC = () => {
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextBtnRef.current?.click();
    }, 2500); // Change slide every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <motion.div
        className="container-custom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={headingVariants}
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-red-500 rounded mx-auto mb-6"
          variants={dividerVariants}
        />
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="h-6 w-6 text-primary" />
          <p className="text-xl text-gray-600">Our Valued Clients</p>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
          We're proud to work with leading companies across various industries, 
          providing high-quality gasketing solutions for critical applications.
        </p>

        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {clientsList.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="border-2 border-gray-200 hover:border-primary transition-colors h-full bg-white/90 shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                      {client.logo ? (
                        <motion.img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="h-16 mb-4 object-contain"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          viewport={{ once: true }}
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Users className="h-8 w-8 text-primary" />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-2rem] top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-10"
            ref={nextBtnRef}
          />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Clients;
