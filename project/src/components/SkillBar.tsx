import { useState, useEffect } from 'react';

interface SkillBarProps {
  name: string;
  level: number; // 1-10
  icon: string;
}

const SkillBar = ({ name, level, icon }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setWidth(level * 10);
    }, 300);
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <img src={icon} alt={name} className="w-6 h-6 mr-2" />
        <span className="font-medium">{name}</span>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-netflix-red rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <div className="flex justify-end mt-1">
        <div className="netflix-rating">
          {Array.from({ length: 10 }).map((_, i) => (
            <span 
              key={i} 
              className={`inline-block w-2 h-2 rounded-full mx-0.5 ${i < level ? 'bg-netflix-red' : 'bg-gray-700'}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBar;