import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { MapPinnedIcon, PhoneIcon, Mail, LucideClock9 } from 'lucide-react';

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
        'service_x49jz37',
        'template_9aatqxl',
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        },
        'TjwH1BCqxyO9RGqpw'
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
      className="section bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 relative overflow-hidden min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 rounded-full opacity-30 blur-2xl z-0 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-2xl z-0 animate-pulse" />
      <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-pink-200 rounded-full opacity-20 blur-[120px] z-0 animate-pulse" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">Contact Us</h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-6 origin-left rounded-full bg-red-500 shadow-md"
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
          />
          <p className="max-w-3xl mx-auto text-xl text-gray-700 font-medium">
            Have questions about our products or need a custom solution? <br />
            <span className="text-primary font-semibold">Our team is here to assist you.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            className="bg-white/90 p-10 rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-md flex flex-col justify-between"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company</label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      required
                      className="border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white/80"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone</label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      required
                      className="border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white/80"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about our products"
                    required
                    className="border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white/80"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your requirements"
                    required
                    className="min-h-32 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white/80"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out text-lg"
                >
                  {loading ? 'Sending...' : 'Submit Inquiry'}
                </Button>
                {showSuccess && (
                  <div className="mt-2 text-green-600 text-center font-semibold animate-fade-in">
                    Inquiry Sent Successfully
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            className="space-y-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-10 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-md transition duration-200 flex-1"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <motion.div initial={{ opacity: 0, rotate: -10 }} whileInView={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.4 }}>
                    <MapPinnedIcon className="text-red-500 mt-1" size={28} />
                  </motion.div>
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
                    <a href="mailto:sales@flojet21.com" className="text-gray-600 hover:text-blue-500">
                      sales@flojet21.com
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
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/90 p-10 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-md transition duration-200 flex-1"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">How can I contact your team?</h4>
                  <p className="text-gray-600">
                    You can reach us via the contact form, email at <a href="mailto:sales@flojet21.com" className="text-blue-500 hover:underline">sales@flojet21.com</a>, or call us at +91 9824037632 / +91 9376222520.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">What is your response time?</h4>
                  <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Can I visit your office?</h4>
                  <p className="text-gray-600">
                    Yes, you can visit us at our office in Vadodara. Please schedule an appointment in advance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">What services do you offer?</h4>
                  <p className="text-gray-600">
                    We provide custom sealing solutions, technical support, and a wide range of high-quality industrial products.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
