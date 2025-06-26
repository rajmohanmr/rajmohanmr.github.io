import React from 'react';
import profileImg from '../assets/rajmohan.jpg'; 
import {  FaMedal } from 'react-icons/fa';
import { GiLaurelsTrophy } from 'react-icons/gi'
const achievements = [
  {
    title: 'Certifications',
    icon: <GiLaurelsTrophy size={60} />,
    link: 'https://drive.google.com/drive/folders/1y6MNkSyha-sDw6dLXs0bqIhYHmv63JDH?usp=drive_link', 
  },
  {
    title: 'Badges',
    icon: <FaMedal size={60} />,
    link: 'https://drive.google.com/drive/folders/16aJ09KXIaW1asZf2j4BIhAcC3-JjR3IQ?usp=sharing', 
  },
];
const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white px-6 py-16">
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Welcome to my portfolio! I am <span className="font-semibold text-rose-600">Rajmohan</span>, 
          a dedicated and skilled Full Stack Developer and Machine Learning Engineer. 
          I specialize in software development, data science, and networking. I am passionate 
          about leveraging technology to solve complex problems and enhance efficiency across various domains.
        </p>
      </div>

      {/* Bio Row */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16">
        {/* Text */}
        <div className="md:w-1/2 space-y-3">
          <h3 className="text-2xl font-semibold text-rose-600 mb-2">Full Stack Developer</h3>
          <ul className="text-md space-y-2">
            <li><strong>📍 Location:</strong> Kerala, India</li>
            <li><strong>🎓 Qualification:</strong> MCA - Master of Computer Applications</li>
            <li><strong>🧠 Interests:</strong> Web Dev, Machine Learning, Data Science</li>
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Rajmohan"
            className="w-60 h-60 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Education & Expertise */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h4 className="text-xl font-semibold mb-4">🎓 Education</h4>
          <ul className="space-y-3 text-gray-700">
            <li>MCA – APJ Abdul Kalam Technological University</li>
            <li>BSc Mathematics – Mahatma Gandhi University</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">🛠️ Expertise</h4>
          <ul className="space-y-3 text-gray-700">
            <li>Full Stack Web Development</li>
            <li>Machine Learning & Data Analysis</li>
            <li>REST API & Database Design</li>
            <li>Cloud Deployment & DevOps Basics</li>
          </ul>
        </div>
      </div>

      {/* Categorized Skill Bars */}
<div className="max-w-6xl mx-auto mt-16">
  {/* Centered & Larger Heading */}
  <h4 className="text-4xl font-bold mb-10 text-center text-purple-300 animate-bounce">💻 Skills</h4>

  {/* Responsive Grid for Skill Categories */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {[
      {
        title: '🧑‍💻 Programming Languages',
        skills: [
          { label: 'JavaScript', percent: 70 },
          { label: 'Python', percent: 80 },
          { label: 'HTMl', percent: 70 },
          { label: 'CSS', percent: 70 },
          { label: 'JAVA', percent: 30 },
        ],
      },
      {
        title: '⚙ Frameworks & Libraries',
        skills: [
          { label: 'React.js', percent: 85 },
          { label: 'Django', percent: 80 },
          { label: 'Tailwind CSS', percent: 85 },
          { label: 'Flutter', percent: 40 },
          { label: 'Node JS', percent: 50 },
          { label: 'Next JS', percent: 30 },
        ],
      },
      {
        title: '📦 Tools & Platforms',
        skills: [
          { label: 'Git & GitHub', percent: 60 },
          { label: 'Firebase', percent: 45 },
          { label: 'Linux / CLI', percent: 50 },
        ],
      },
      {
        title: '🤖 Machine Learning & Data',
        skills: [
          { label: 'Pandas / NumPy', percent: 65 },
          { label: 'Scikit-Learn', percent: 50 },
          { label: 'TensorFlow', percent: 55 },
        ],
      },
    ].map((category, i) => (
      <div key={i}>
        <h5 className="text-lg font-semibold mb-4 text-rose-600">{category.title}</h5>
        <div className="space-y-4">
          {category.skills.map((skill, j) => (
            <div key={j}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                <span className="text-sm text-gray-500">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-rose-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>


 <div className="mt-16">
      <h3 className="text-3xl font-bold text-center text-rose-500 mb-2">Achievements</h3>
      <p className="text-center text-gray-300 mb-10">
        Explore some of my accomplishments including certifications and technical badges.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 max-w-2xl mx-auto">
        {achievements.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 aspect-square flex flex-col justify-center items-center text-white hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <div className="text-rose-500 group-hover:text-rose-400 group-hover:scale-110 transition-transform duration-300 mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold">{item.title}</h4>
          </a>
        ))}
      </div>
    </div>


    </section>
  );
};

export default About;
