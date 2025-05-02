import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Billboard from '../components/Billboard';
import { Linkedin, Mail, Github as GitHub, Phone, Send } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Sahithi Reddy";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would handle the actual form submission here
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      <Billboard 
        title="Get In Touch"
        subtitle="Let's connect and discuss opportunities"
        backgroundImage="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <div id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Contact Me</motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg mb-6"
            >
              <p className="text-lg leading-relaxed mb-8">
                Feel free to reach out for opportunities, collaborations, or just to say hi! 
                I'm always open to discussing new projects and ideas.
              </p>
              
              <div className="space-y-4">
                <ContactItem 
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  value="bethi-sahithi-reddy"
                  link="https://www.linkedin.com/in/bethi-sahithi-reddy-/"
                />
                <ContactItem 
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value="sahithibethi04@gmail.com"
                  link="mailto:sahithibethi04@gmail.com"
                />
                <ContactItem 
                  icon={<GitHub className="w-5 h-5" />}
                  label="GitHub"
                  value="Sahithib04"
                  link="https://github.com/Sahithib04"
                />
                <ContactItem 
                  icon={<Phone className="w-5 h-5" />}
                  label="Phone"
                  value="+91 9676619409"
                  link="tel:9676619409"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Send a Message</motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg"
            >
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:ring-netflix-red focus:border-netflix-red text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:ring-netflix-red focus:border-netflix-red text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:ring-netflix-red focus:border-netflix-red text-white resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full flex items-center justify-center px-6 py-3 bg-netflix-red text-white font-medium rounded hover:bg-red-700 transition-colors duration-300 disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" /> 
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ 
  icon, 
  label, 
  value, 
  link 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  link: string;
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center group"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full mr-4 group-hover:bg-netflix-red transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-400">{label}</h3>
        <p className="text-white group-hover:text-netflix-red transition-colors duration-300">{value}</p>
      </div>
    </a>
  );
};

export default Contact;