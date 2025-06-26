import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import farmee from '../assets/farmee.png'
import weather from '../assets/WeatherSpace.png'
import todo from '../assets/Tdo.png'
import gc from '../assets/GS.png'
import Shelf from '../assets/Shelf.png'
const experiences = [
  {
    title: 'Project Intern',
    company: 'IBS Software',
    duration: 'Jan 2025 – Apr 2025',
    description: 'Developed and deployed internal LMS using Moodle and AWS. Gained experience in development and cloud deployment.',
  },
];

const projects = [
  {
    name: 'Farmee',
    description: 'Responsive React & Tailwind portfolio.',
    image: farmee,
    github: 'https://github.com/rajmohanmr/farmee',
    live: '',
  },
  {
    name: 'Weather Space',
    description: 'Next.js + Node weather app.',
    image: weather,
    github: 'https://github.com/rajmohanmr/Weather-Space',
    live: '',
  },
  {
    name: 'Todo Summary Assistant',
    description: 'CRUD FastAPI + MongoDB app.',
    image: todo,
    github: 'https://github.com/rajmohanmr/ToDo_Summary_Assistant',
    live: '',
  },
   {
    name: 'Grocery Store',
    description: 'CRUD FastAPI + MongoDB app.',
    image: gc,
    github: 'https://github.com/rajmohanmr/Grocery_store',
    live: '',
  },
  {
    name: 'ShelfDB',
    description: 'CRUD FastAPI + MongoDB app.',
    image: Shelf,
    github: 'https://github.com/rajmohanmr/ShelfDB',
    live: '',
  },
];


const Work = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Experience Section */}
        <div className="text-center mb-12">
        <h2
        id="experience"
        className="text-3xl font-bold inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:bg-rose-500 after:rounded-full after:animate-underline-pulse after:w-0"
        >
        EXPERIENCE
        </h2>
        </div>

        <div className="space-y-10 mb-20">
          {experiences.map((exp, i) => (
            <div key={i} className="border-l-4 border-rose-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-rose-500 rounded-full left-[-10px] top-1.5"></div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-600">{exp.company} — {exp.duration}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>

 {/* Projects Section */}
<div className="text-center mb-12">
  <h2
    id="projects"
    className="text-3xl font-bold inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:bg-rose-500 after:rounded-full after:animate-underline-pulse after:w-0"
  >
    PROJECTS
  </h2>
</div>

<div className="flex flex-wrap justify-center gap-10">
  {projects.map((project, i) => (
    <div
      key={i}
      className="relative group overflow-hidden rounded-xl shadow-md bg-gray-800 w-[300px] hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-60 object-cover transform group-hover:translate-y-[-100%] transition-all duration-500 ease-in-out"
      />

      {/* Overlay on hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-rose-900/90 text-white p-6 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h3 className="text-lg font-semibold mb-4">{project.name}</h3>
        <div className="flex gap-6 text-2xl">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 transition"
              title="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 transition"
              title="Live Site"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Work;
