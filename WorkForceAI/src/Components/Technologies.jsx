// components/Technologies.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaHtml5 } from 'react-icons/fa'; // Example icons
import { SiTailwindcss, SiVite, SiJavascript } from 'react-icons/si';
import { SiTensorflow, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { SiLangchain } from 'react-icons/si'; // If LangChain has an icon on react-icons


const technologies = [
  { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: 'LangChain', icon: <SiLangchain size={40} className="text-green-600" /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={40} className="text-red-500" /> },
  { name: 'PyTorch', icon: <SiPytorch size={40} className="text-yellow-500" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-yellow-400" /> },
  { name: 'Scikit-Learn', icon: <SiScikitlearn size={40} className="text-blue-400" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} className="text-yellow-300" /> },
  
  
];

const Technologies = () => {
  return (
    <div className="my-24  px-4 text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-gray-950 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            {tech.icon}
            <p className="mt-2 text-sm text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
