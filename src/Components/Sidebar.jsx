import React from 'react';
import { Link } from 'react-scroll';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const Sidebar = () => {
  return (
    <div className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 z-50">
      <div className="relative flex flex-col items-center space-y-24 pb-10">
        {/* Extended vertical line */}
        <div className="absolute w-[2px] h-[calc(100%+40px)] bg-gray-600 left-1/2 -translate-x-1/2" />

        {sections.map((section, index) => (
          <Link
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-205}
            activeClass="active-dot"
            className="group relative cursor-pointer z-10"
          >
            <div className="flex items-center justify-center relative">
              {/* Dot */}
              <div className="w-4 h-4 rounded-full bg-gray-400 group-hover:bg-rose-500 transition-all duration-300" />

              {/* Number */}
              <span
                className={`absolute text-xs font-mono text-gray-300 transition-all duration-300 group-hover:text-rose-500 
                  left-6 group-[.active-dot]:right-6 group-[.active-dot]:left-auto group-[.active-dot]:text-rose-500`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Label below the dot */}
            <span
              className={`absolute top-6 left-8 -translate-x-1/2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
              group-[.active-dot]:opacity-100 group-[.active-dot]:text-rose-500`}
            >
              {section.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
