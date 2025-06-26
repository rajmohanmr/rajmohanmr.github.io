import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white px-6 pt-40 pb-20 " data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-8">📞 Contact Me</h2>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <a
            href="mailto:rajmohanmr12@gmail.com"
            className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-md transition text-white font-medium"
          >
            Send Email
          </a>
          <a
            href="tel:+917558966654"
            className="bg-rose-500 hover:bg-rose-600 px-6 py-3 rounded-md transition text-white font-medium"
          >
            Call Me
          </a>
        </div>

        {/* Thank You Note */}
        <p className="text-lg mb-4">Thank you for visiting my portfolio!</p>
        <p className="font-semibold text-xl mb-8">— Rajmohan</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-10">
          <a
            href="https://github.com/rajmohanmr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition transform hover:scale-110 "
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rajmohan-mr-583137222/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/raj.u._"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 pt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Rajmohan. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
