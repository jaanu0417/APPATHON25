import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import janImage from '../assets/jan.jpg';
import sriImage from '../assets/sri.jpg';
import nishaImage from '../assets/nisha.jpg';

interface TeamMemberProps {
  name: string;
  year: string;
  department: string;
  college: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, year, department, college, role, image }) => (
  <div className="team-card bg-gray-900/70 backdrop-blur-md rounded-lg p-6 text-white transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
    <div className="relative group perspective">
      <div className="relative transform transition-transform duration-500 group-hover:rotate-y-180">
        <div className="backface-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg ring-4 ring-purple-500/30"
          />
        </div>
      </div>
    </div>
    <h3 className="text-2xl font-semibold text-center text-purple-300">{name}</h3>
    <p className="text-gray-300 text-center">{year} Year - {department}</p>
    <p className="text-gray-400 text-center">{college}</p>
    <p className="text-purple-400 text-center mt-2 font-medium">{role}</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
        <Github className="h-5 w-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
        <Linkedin className="h-5 w-5" />
      </a>
      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
        <Mail className="h-5 w-5" />
      </a>
    </div>
  </div>
);

const AboutUs = () => {
  const team: TeamMemberProps[] = [
    {
      name: "Janani Sri C",
      year: "3rd",
      department: "CSE",
      college: "Sona College of Technology",
      role: "Freelancer, Web Developer, App Developer",
      image: janImage // Local path
    },
    {
      name: "Sridharan P",
      year: "1st",
      department: "AIML",
      college: "Sona College of Technology",
      role: "Web Developer, App Developer",
      image: sriImage // Local path
    },
    {
      name: "Nisha M",
      year: "3rd",
      department: "CSE",
      college: "Sona College of Technology",
      role: "Web Developer, App Developer",
      image: nishaImage // Local path
    }
  ];

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {team.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-purple-300">About JSN Movies</h2>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          JSN Movies is an educational project developed by students of Sona College of Technology. 
          Our platform provides a comprehensive movie database experience, showcasing our skills in 
          modern web development using React and cutting-edge technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
