import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Billboard from '../components/Billboard';
import { Linkedin, Mail, Github as GitHub } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "Sahithi Reddy | Portfolio";
  }, []);

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
        title="Hi, I'm Sahithi Reddy"
        subtitle="A 2024 graduate passionate about using technology to create positive and humanitarian impact on the world, making tech accessible and inclusive."
        backgroundImage="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ctaText="Discover My Work"
        ctaLink="#content"
      />

      <div id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Connect With Me</motion.h2>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <SocialButton 
              icon={<Linkedin className="w-5 h-5 mr-2" />}
              text="LinkedIn"
              href="https://www.linkedin.com/in/bethi-sahithi-reddy-/"
            />
            <SocialButton 
              icon={<Mail className="w-5 h-5 mr-2" />}
              text="Email"
              href="mailto:sahithibethi04@gmail.com"
            />
            <SocialButton 
              icon={<GitHub className="w-5 h-5 mr-2" />}
              text="GitHub"
              href="https://github.com/Sahithib04"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Explore My Portfolio</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioCard
              title="About Me"
              description="Learn about my background, education, and professional journey."
              link="/about"
              bgImage="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              itemVariants={itemVariants}
            />
            <PortfolioCard
              title="Projects"
              description="Explore my technical projects and development work."
              link="/projects"
              bgImage="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              itemVariants={itemVariants}
            />
            <PortfolioCard
              title="Skills"
              description="See my technical skills and areas of expertise."
              link="/skills"
              bgImage="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              itemVariants={itemVariants}
            />
            <PortfolioCard
              title="Leadership"
              description="Discover my leadership roles and experiences."
              link="/leadership"
              bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              itemVariants={itemVariants}
            />
            <PortfolioCard
              title="Contact"
              description="Get in touch with me for opportunities or collaborations."
              link="/contact"
              bgImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              itemVariants={itemVariants}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-5 py-3 bg-gray-800 hover:bg-netflix-red transition-colors duration-300 rounded-md"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

const PortfolioCard = ({ 
  title, 
  description, 
  link, 
  bgImage,
  itemVariants 
}: { 
  title: string; 
  description: string; 
  link: string; 
  bgImage: string;
  itemVariants: any;
}) => {
  return (
    <motion.div variants={itemVariants}>
      <Link to={link} className="block netflix-card relative h-64 rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 group">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Home;