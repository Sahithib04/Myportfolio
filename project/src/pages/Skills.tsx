import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Billboard from '../components/Billboard';

const Skills = () => {
  useEffect(() => {
    document.title = "Skills | Sahithi Reddy";
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
        title="My Skills"
        subtitle="Technical abilities and expertise that define my work"
        backgroundImage="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <div id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Backend Technologies</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <SkillCard
              name="Java (Core & Advanced)"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />
            <SkillCard
              name="Object-Oriented Programming"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />
            <SkillCard
              name="Spring Boot"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            />
            <SkillCard
              name="Hibernate"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg"
            />
            <SkillCard
              name="MySQL"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Frontend Technologies</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <SkillCard
              name="HTML"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <SkillCard
              name="CSS"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <SkillCard
              name="JavaScript"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <SkillCard
              name="Bootstrap"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Developer Tools</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <SkillCard
              name="Git"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <SkillCard
              name="GitHub"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
            <SkillCard
              name="Eclipse"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">Soft Skills</motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-netflix-black-light p-8 rounded-lg border border-gray-800 shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <SkillCard name="Initiative" icon="🎯" />
            <SkillCard name="Problem-solving" icon="🧩" />
            <SkillCard name="Collaboration" icon="🤝" />
            <SkillCard name="Creativity" icon="💡" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-netflix-black rounded-lg border border-gray-800 transition-transform duration-300 hover:scale-105">
      {icon.startsWith('http') ? (
        <img src={icon} alt={name} className="w-16 h-16 mb-4" />
      ) : (
        <span className="text-4xl mb-4">{icon}</span>
      )}
      <h3 className="text-lg font-medium text-center">{name}</h3>
    </div>
  );
};

export default Skills;