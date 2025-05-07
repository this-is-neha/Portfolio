import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import photo1 from "../assets/image6.jpg";  
import photo2 from "../assets/JavaScript frameworks-bro.png"; 
import photo3 from "../assets/image3.png";
import { NavLink } from "react-router-dom";

const images = [photo1, photo3];

const Home = () => {
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);

  const [leftSection, setLeftSection] = useState({
    title: "Empowering Ideas with Modern Web Technologies",
    text: "Leveraging cutting-edge tools to create scalable solutions. Whether it's front-end design or back-end architecture, I believe in continuous learning and adapting to new challenges.",
  });

  const [rightSection, setRightSection] = useState({
    title: "Bringing Ideas to Life",
    text: "By integrating creativity with technology, I strive to bring innovative solutions that solve real-world problems. Join me in creating something meaningful.",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-teal-200">
      <Navbar />

     
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-32 gap-20 min-h-[100vh]">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800 font-serif">
            Hi, I'm <span className="text-teal-500">Neha Shah</span>
          </h1>
          <p className="text-2xl text-gray-700">
            Welcome to my world! I create, innovate, and inspire through tech and design. Dive in to discover more.
          </p>
          <p className="text-xl text-gray-600">
            Passionate about growth, creativity, and technology. Let's explore new ideas and bring them to life!
          </p>
          <NavLink
            to ="/contact"
            className="inline-block mt-6 px-6 py-3 text-white bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Let's Connect
          </NavLink>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[280px] h-[420px] lg:w-[340px] lg:h-[460px] overflow-hidden rounded-xl shadow-2xl">
            <img
              src={images[visibleImageIndex]}
              alt="Hero"
              className="w-full h-full object-cover transition-all duration-1000 rounded-xl"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center py-16 px-4 bg-[#1E2A47]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
       
        <div className="lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            {leftSection.title}
          </h3>
          <p className="text-xl text-gray-200">
            {leftSection.text}
          </p>
        </div>

    
        <div className="lg:w-1/3 flex justify-center mb-6 lg:mb-0">
          <img
            src={photo2}
            alt="Tech Illustration"
            className="w-[500px] h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        
        <div className="lg:w-1/3 text-center lg:text-right mb-6 lg:mb-0 lg:ml-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            {rightSection.title}
          </h3>
          <p className="text-xl text-gray-200">
            {rightSection.text}
          </p>
        </div>
      </motion.div>

   
      <motion.div
        className="bg-gradient-to-r from-indigo-100 via-teal-100 to-blue-100 py-24 px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">More About Me</h2>
        <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          I’m a passionate individual who thrives in dynamic environments, continuously learning and growing. 
          From leading student clubs to tackling real-world problems in hackathons, I enjoy blending creativity and logic. 
          Whether it's designing intuitive interfaces or developing scalable backend systems, I aim to make meaningful impact through technology. 
          My academic journey has been shaped by curiosity, teamwork, and hands-on experiences — all fueling my commitment to innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-4 py-12">
          {[ 
            { count: "4+", label: " Projects", color: "text-teal-500" },
            { count: "2", label: "Hackathons Participated", color: "text-indigo-500" },
            { count: "5+", label: "Clubs & Events Involved", color: "text-pink-500" },
          ].map((fact, i) => (
            <motion.div
              key={i}
      className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center justify-center text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className={`text-3xl font-bold ${fact.color}`}>{fact.count}</h3>
              <p className="text-md text-gray-600 mt-2">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
