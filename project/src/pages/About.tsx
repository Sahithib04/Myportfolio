import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Billboard from '../components/Billboard';

const About = () => {
  useEffect(() => {
    document.title = "About Me | Sahithi Reddy";
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
        title="About Me"
        subtitle="Learn more about my background, education, and professional journey"
        backgroundImage="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <div id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Introduction</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg"
          >
            <p className="text-lg leading-relaxed mb-6">
              Hello there! I'm Sahithi Reddy, a 2024 B.Tech graduate in Electronics & Communication Engineering, 
              now diving deep into the world of software development. I specialize in Java (Core & Advanced), 
              Spring Boot, Hibernate, and frontend tech like HTML, CSS, JavaScript.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of academics, I've always been someone who enjoys building communities and driving change. 
              I served as the President of my college Tech Club, where I led a team of 15 to host hands-on workshops 
              and events that brought more students into tech. I was also chosen as the Smart India Hackathon Campus 
              Representative, where I guided 80+ students and helped increase national-level participation.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Education</motion.h2>
          
          <div className="space-y-6">
            <EducationCard
              institution="Vignan's Institute Of Management And Technology For Women"
              degree="Bachelor of Electronics & Communication Engineering"
              date="Oct 2021 – June 2024"
              grade="CGPA: 7.2/10"
            />
            <EducationCard
              institution="Indur Institute Of Engineering & Technology"
              degree="Diploma in Electronics & Communication Engineering"
              date="Aug 2018 – Apr 2021"
              grade="CGPA: 7.4/10"
            />
            <EducationCard
              institution="Manjeera Vidyalayam High School"
              degree="Secondary Education"
              date="June 2017 – March 2018"
              grade="CGPA: 9.3/10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const EducationCard = ({ 
  institution, 
  degree, 
  date, 
  grade 
}: { 
  institution: string; 
  degree: string; 
  date: string; 
  grade: string;
}) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-netflix-black-light p-6 rounded-lg border border-gray-800 shadow-lg netflix-card transition-transform duration-300 hover:scale-102"
    >
      <h3 className="text-xl font-bold mb-2">{institution}</h3>
      <p className="text-gray-300 mb-2">{degree}</p>
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{date}</span>
        <span className="text-netflix-red font-medium">{grade}</span>
      </div>
    </motion.div>
  );
};

export default About;