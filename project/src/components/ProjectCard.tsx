import { useState } from 'react';
import { Github as GitHub, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink: string;
  demoLink?: string;
}

const ProjectCard = ({ title, description, techStack, image, githubLink, demoLink }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative netflix-card rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {isHovered && (
          <div className="animate-fadeIn">
            <p className="text-sm text-gray-300 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {techStack.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-netflix-red/20 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-3">
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xs hover:text-netflix-red transition-colors"
              >
                <GitHub className="w-4 h-4 mr-1" /> Code
              </a>
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-xs hover:text-netflix-red transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;