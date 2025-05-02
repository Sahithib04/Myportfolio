import { Linkedin, Mail, Github as GitHub, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-netflix-black-light py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Bethi Sahithi Reddy</h2>
          </div>
          <div className="flex space-x-6">
            <SocialLink 
              href="https://www.linkedin.com/in/bethi-sahithi-reddy-/" 
              icon={<Linkedin className="w-5 h-5" />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="mailto:sahithibethi04@gmail.com" 
              icon={<Mail className="w-5 h-5" />} 
              label="Email"
            />
            <SocialLink 
              href="https://github.com/Sahithib04" 
              icon={<GitHub className="w-5 h-5" />} 
              label="GitHub"
            />
            <SocialLink 
              href="tel:9676619409" 
              icon={<Phone className="w-5 h-5" />} 
              label="Phone"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-netflix-red transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;