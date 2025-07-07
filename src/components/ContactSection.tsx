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

  return (
    <motion.section
      id="contact"
      className="section bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <motion.div
            className="w-24 h-1 bg-red-600 mx-auto mb-6 origin-left"
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Have questions about our carbon gaskets or need a custom solution?
            Our engineering team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                  <Input id="company" value={formData.company} onChange={handleChange} placeholder="Your Company" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                  <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Inquiry about Carbon Gaskets" required className="border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Please provide details about your requirements" required className="min-h-32 border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={loading}>
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
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPinnedIcon className="text-red-500 mt-1 color" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Address</h4>
                    <p className="text-gray-600">
                      31, At End of, Rd Number 2, Sardar Estate,<br />
                      Sayaji Park Society, Vadodara, Gujarat 390019
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Phone</h4>
                    <p className="text-gray-600">+91 9824037632 / +91 9376222520</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <a href="mailto:sales@flojet21.com">
                      <p className="text-gray-600 hover:text-blue-500">sales@flojet21.com</p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <LucideClock9 className="text-red-500 mt-1" />
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
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h3>
              <p className="text-gray-600 mb-6">
                Need a quick quote for your project? Our team will provide a detailed 
                estimate based on your specifications.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
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
