import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    console.log("Footer component mounted");
    return () => {
      console.log("Footer component unmounted");
    };
  }, []);

  return (
    <footer className="bg-gradient-to-r from-indigo-100 via-blue-100 to-teal-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-12 shadow-inner">
      <div className="max-w-screen-xl mx-auto px-10 py-8">
        <div className="flex flex-col text-2xl md:flex-row justify-between items-center gap-y-6">
          <ul className="flex flex-wrap  justify-center mx-64 md:justify-start space-x-32 text-base font-medium text-gray-600 dark:text-gray-300">
          <li>
              <NavLink to="/" className=" text-xl hover:text-teal-600 transition">
               Home
              </NavLink>
            </li>
             <li>
              <NavLink to="/projects" className=" text-xl hover:text-teal-600 transition">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/learning" className="text-xl hover:text-teal-600 transition">
                Experience 
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/contact" className=" text-xl hover:text-teal-600 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          © 2025{" "}
          <a
            href="nehushah12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-600"
          >
            
          </a>{" "}
          — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
