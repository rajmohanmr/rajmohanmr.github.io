import React from 'react';
import { FaCode, FaBrain, FaRegFileAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Full Stack Development',
    icon: <FaCode size={40} />,
    description:
      'Building responsive, scalable and modern web applications using React, Node.js, Django, and more.',
  },
  {
    title: 'Machine Learning Solutions',
    icon: <FaBrain size={40} />,
    description:
      'ML-powered systems for automation, prediction, NLP, and data-driven solutions using Python.',
  },
  {
    title: 'Clean & Documented Code',
    icon: <FaRegFileAlt size={40} />,
    description:
      'Maintainable, well-structured code with clear documentation and best practices for teamwork.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white px-4 sm:px-8 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-rose-500">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl aspect-square flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="text-rose-500 mb-4 transition-all duration-300 group hover:animate-pulse">
              <div className="group-hover:scale-125 group-hover:text-rose-400 transition-transform duration-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
