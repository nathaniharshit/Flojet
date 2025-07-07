import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// Importing icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaEnvelopeOpen } from "react-icons/fa";
import { Clock1, Clock10, Clock11Icon, EqualApproximatelyIcon, LucideClock6, LucideClock8, LucideClock9, Mail, MapPinCheck, MapPinnedIcon, MapPinPlusInside, PhoneIcon } from 'lucide-react';

const underlineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_x49jz37', // replace with your EmailJS service ID
        'template_9aatqxl', // replace with your EmailJS template ID
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        'TjwH1BCqxyO9RGqpw' // replace with your EmailJS public key
      );
      toast({
        title: 'Inquiry Sent Successfully!',
        description: 'Thank you for your inquiry. Our team will contact you shortly.',
      });
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
      setShowSuccess(true);
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to send your inquiry. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (showSuccess) {
      const timeout = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccess]);

  return (
    <motion.section
      id="contact"
      className="section bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 relative overflow-hidden min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Decorative background shapes and image */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-2xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-2xl z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100 rounded-full opacity-20 blur-3xl z-0" />
      <img
        src="/images/cityscape.jpg"
        alt="Cityscape background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 drop-shadow-lg">Contact Us</h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-400 to-blue-300 mx-auto mb-6 origin-left rounded-full"
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <p className="max-w-3xl mx-auto text-xl text-gray-700 font-medium">
            Have questions about our carbon gaskets or need a custom solution? <br />
            <span className="text-primary font-semibold">Our engineering team is ready to assist you.</span>
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Form */}
          <motion.div
            className="bg-white/90 p-10 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 bg-white/80" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company</label>
                  <Input id="company" value={formData.company} onChange={handleChange} placeholder="Your Company" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 bg-white/80" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 bg-white/80" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone</label>
                  <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 bg-white/80" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Inquiry about Carbon Gaskets" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 bg-white/80" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Please provide details about your requirements" required className="min-h-32 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 bg-white/80" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-red-500 via-blue-400 to-blue-300 text-white font-bold py-3 rounded-xl shadow-lg hover:from-blue-400 hover:to-red-500 transition-all duration-200 border-0 text-lg" disabled={loading}>
                {loading ? 'Sending...' : 'Submit Inquiry'}
              </Button>
              {showSuccess && (
                <div className="mt-2 text-green-600 text-center font-semibold animate-fade-in">
                  Inquiry Sent Successfully
                </div>
              )}
            </form>
          </motion.div>
          {/* Right Info Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 p-10 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-md mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPinnedIcon className="text-red-500 mt-1 color" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-700">Address</h4>
                    <p className="text-gray-600">
                      31, At End of, Rd Number 2, Sardar Estate,<br />
                      Sayaji Park Society, Vadodara, Gujarat 390019
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="text-red-500 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-700">Phone</h4>
                    <p className="text-gray-600">+91 9824037632 / +91 9376222520</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-red-500 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <a href="mailto:sales@flojet21.com">
                      <p className="text-gray-600 hover:text-blue-500">sales@flojet21.com</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LucideClock9 className="text-red-500 mt-1" size={28} />
                  <div>
                    <h4 className="font-semibold text-gray-700">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="bg-white/90 p-10 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Request a Quote</h3>
              <p className="text-gray-600 mb-6 text-center">
                Need a quick quote for your project? Our team will provide a detailed 
                estimate based on your specifications.
              </p>
              <Button className="w-full bg-gradient-to-r from-red-500 via-blue-400 to-blue-300 text-white font-bold py-3 rounded-xl shadow-lg hover:from-blue-400 hover:to-red-500 transition-all duration-200 border-0 text-lg">
                Request Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
