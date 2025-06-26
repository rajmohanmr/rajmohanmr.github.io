import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-full bg-gray-900 text-white flex items-center justify-center px-6"
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hey, I'm <span className="text-rose-500">Rajmohan</span>
        </h1>

        <ReactTyped
          strings={[
            'Full Stack Developer',
            'Machine Learning Engineer',
            'Data Scientist',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-xl sm:text-2xl text-gray-300 mb-6 block"
        />

        <a
        href="https://drive.google.com/file/d/1koDTGIijwBNW5IDT69QsNXbVoZAqqr7n/view?usp=drive_link"  
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 mb-6 border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition duration-300 rounded-md"
        >
          Download Resume
        </a>

        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a
            href="https://github.com/rajmohanmr" // replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-rose-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rajmohan-mr-583137222/" // replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-rose-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="rajmohanmr12@gmail.com"
            className="text-white hover:text-rose-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
