import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Billboard from '../components/Billboard';
import ProjectCard from '../components/ProjectCard';
import ContentRow from '../components/ContentRow';
import { Github as GitHub } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Sahithi Reddy";
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
        title="My Projects"
        subtitle="Explore my technical work and creative solutions"
        backgroundImage="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <div id="content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContentRow title="Featured Projects">
            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px]">
              <ProjectCard
                title="RAIL EASE"
                description="A full-stack train ticket reservation system where users can seamlessly book tickets, check train schedules, and manage their profiles."
                techStack={["Java", "Spring Boot", "MySQL", "JSP", "Bootstrap", "CSS"]}
                image="https://images.pexels.com/photos/2031718/pexels-photo-2031718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                githubLink="https://github.com/Sahithib04/Rail-Ease"
              />
            </div>
            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px]">
              <ProjectCard
                title="BUG VAULT"
                description="A desktop-based bug tracking system that helps teams report, assign, and track bugs efficiently, improving resolution speed by 35%."
                techStack={["Java", "Swing", "MySQL", "Maven"]}
                image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                githubLink="https://github.com/Sahithib04/Bug-Vault"
              />
            </div>
            <div className="min-w-[280px] sm:min-w-[350px] max-w-[350px]">
              <ProjectCard
                title="ROG-FREE"
                description="A user-friendly, responsive site that suggests yoga postures tailored to specific ailments and health conditions."
                techStack={["HTML", "CSS", "JavaScript"]}
                image="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                githubLink="https://github.com/Sahithib04/Rog-Free"
              />
            </div>
          </ContentRow>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <p className="text-lg">Discover more of my projects on GitHub</p>
            <a 
              href="https://github.com/Sahithib04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-6 py-3 bg-netflix-red text-white font-medium rounded hover:bg-red-700 transition-colors duration-300"
            >
              <GitHub className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;