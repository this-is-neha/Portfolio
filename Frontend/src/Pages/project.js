import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A robust e-commerce platform offering product listing, shopping cart, user authentication, and payment integration.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB","Postman"],
            demoLink: "https://your-demo-link.com",
            codeLink: "https://github.com/this-is-neha/Ecommerce",
        },
        {
            title: "Nivaran - Complaint Register Platform",
            description:
                "A community platform to register, track, and resolve complaints through an interactive map-based interface.",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mapbox"],
            demoLink: "http://eclectic-entremet-69d9a6.netlify.app",
            codeLink: "https://github.com/this-is-neha/Complaint-Register-server",
        },
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website to showcase my skills, projects, and achievements. It features a modern design with responsive layouts and a smooth user experience.",
            technologies: ["React.js", "Tailwind CSS", "JavaScript"],
            demoLink: "https://iamnehashah.netlify.app", 
            codeLink: "https://github.com/this-is-neha/Portfolio",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                            My Projects
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Here are some of the exciting projects I've worked on. Explore them below.
                        </p>
                    </div>

                    {/* Projects Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-4">
                                    <span className="font-bold">Technologies:</span>{" "}
                                    {project.technologies.join(", ")}
                                </p>
                                <div className="flex space-x-4">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
                                        >
                                            Demo
                                        </a>
                                    )}
                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 text-white bg-gray-600 rounded-lg shadow hover:bg-gray-700"
                                        >
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
