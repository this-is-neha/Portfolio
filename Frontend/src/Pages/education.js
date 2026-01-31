import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { NavLink } from "react-router-dom";

const EducationAndTrainings = () => {
  const Internship=[{
    title: "Frontend Intern",
    organization: "Verisk Nepal",
    year: "2025",
    description:" Worked on building Inventory Managrment System for Verisk Nepak with features of resouce management, barcode generation and scanning .",
    image: "/images/Verisk.jpg",
  }]

  const education = [

    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Thapathali Campus, Tribhuvan University",
      year: "2020 - Present",
      description:
        "Focused on software development, data structures, algorithms, and system design.",
      image: "/images/thapathali.jpg",
    },
    {
      degree: "High School (+2) in Science",
      institution: "Prasadi Academy",
      year: "2018 - 2020",
      description: "Specialized in physics, chemistry, and mathematics.",
      image: "/images/prasadi.jpg",
    },
  ];

  const trainings = [
        {
      title: "ANAIS (AnnuaL Neapl Artificial Intelligence School ",
      organization: "NAAMI",
      year: "2025-2026",
      description:
        "Focused on learning about Artifial Intelligence and its application",
      image: "/images/Screenshot 2026-01-31 103946.png",
    },
    {
      title: "MERN Stack Training",
      organization: "Broadway Infosys",
      year: "2023",
      description:
        "Comprehensive training on MERN stack development including React.js, Node.js, and MongoDB.",
      image: "/images/mern.jpg",
    },
    {
      title: "React Training",
      organization: "Girls to Code by Locus",
      year: "2022",
      description:
        "Focused on developing modern web applications using React.js.",
      image: "/images/react.jpg",
    },
    {
      title: "Leadership and Team Building Workshop",
      organization: "Orbit Engineering Expo",
      year: "2022",
      description:
        "Developed leadership, project management, and collaborative skills.",
      image: "/images/orbit.jpg",
    },
    {
      title: "All Female Hackathon",
      organization: "Nepal",
      year: "2022",
      description:
        "Participated in a hackathon aimed at empowering women in technology.",
      image: "/images/Hack.jpeg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
              Education & Trainings
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              A summary of my academic background, professional development,
              and achievements.
            </p>
          </div>




  
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Internships
            </h2>
            <div className="space-y-6">
              {Internship.map((trainin, index) => (
                <NavLink
                  key={index}
                  to={`/intern/${index}`}
                  state={trainin}
                  className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {trainin.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {trainin.organization} <span>({trainin.year})</span>
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {trainin.description}
                  </p>
                </NavLink>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              Trainings & Certifications
            </h2>
            <div className="space-y-6">
              {trainings.map((training, index) => (
                <NavLink
                  key={index}
                  to={`/details/${index}`}
                  state={training}
                  className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {training.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {training.organization} <span>({training.year})</span>
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {training.description}
                  </p>
                </NavLink>
              ))}
            </div>
          </div>

         
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.institution} <span>({edu.year})</span>
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EducationAndTrainings;
