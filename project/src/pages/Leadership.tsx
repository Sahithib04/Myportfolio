import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Billboard from '../components/Billboard';

const Leadership = () => {
  useEffect(() => {
    document.title = "Leadership | Sahithi Reddy";
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
        title="Leadership & Extracurricular"
        subtitle="My experiences leading teams and initiatives"
        backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <div id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Campus Innovators – Founder & Organizer</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-netflix-red text-sm font-medium">Jan 2023 – Present</span>
              <span className="bg-netflix-red px-3 py-1 rounded-full text-xs">Founder</span>
            </div>
            
            <p className="text-lg leading-relaxed mb-6">
              I started Campus Innovators with a simple goal — to bring students from different departments together to 
              build cool, real-world tech projects. What began as an idea turned into a buzzing community of over 80 
              students collaborating on everything from web apps and backend systems to AI and robotics.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              As the organizer, I helped guide and support the development of 10+ projects. A couple of standouts include 
              a Smart Campus Placement Portal (built with Java) that streamlined the hiring process, and a Line-Following 
              Delivery Bot that made campus automation feel exciting and real.
            </p>
            
            <p className="text-lg leading-relaxed">
              This initiative has been one of the most fulfilling parts of my college life — combining leadership, 
              teamwork, and hands-on tech in the best possible way.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">President, Tech Club</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-netflix-red text-sm font-medium">Jan 2023 – Apr 2024</span>
              <span className="bg-netflix-red px-3 py-1 rounded-full text-xs">President</span>
            </div>
            
            <p className="text-lg leading-relaxed">
              Led a team of 15, organized workshops, coding events, and collaborated with industry experts — 
              boosting student engagement by 40%. Represented college in the national-level Smart India Hackathon (SIH).
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">SIH Campus Representative, VMTW</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-netflix-red text-sm font-medium">Dec 2022 – May 2023</span>
              <span className="bg-netflix-red px-3 py-1 rounded-full text-xs">Representative</span>
            </div>
            
            <p className="text-lg leading-relaxed">
              Guided 80+ students through SIH participation, organized idea submissions, and helped increase 
              campus involvement by 40%.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leadership;