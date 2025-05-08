import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Skills = () => {
    const skills = [
        {
            category: "Programming Languages",
            items: ["JavaScript",  "C++", "C", "Java", "TypeScript"],
        },
        {
            category: "Web Development",
            items: [
                "React.js",
                "Node.js",
                "Express.js",
                "HTML",
                "CSS3",
                "Tailwind CSS",
            ],
        },
        {
            category: "Database Management",
            items: ["MongoDB", "PostgreSQL"],
        },
        {
            category: "Tools & Platforms",
            items: [
                "Git & GitHub",
              
                "VS Code",
            ],
        },
        {
            category: "Soft Skills",
            items: [
                "Leadership",
                "Team Collaboration",
                "Problem-Solving",
                "Time Management",
            ],
        },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                            My Skill Sets
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            A comprehensive list of my technical and professional skills.
                        </p>
                    </div>

                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                    {skill.category}
                                </h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {skill.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="text-gray-600 dark:text-gray-300"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Skills;
