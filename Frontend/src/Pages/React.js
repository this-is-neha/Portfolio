import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import photo2 from "../assets/React.png";

const ReactPage = () => {
  const { state } = useLocation();

  if (!state) return <p className="text-center py-20">No data found.</p>;

  
  console.log(state);

  const imageToShow =  photo2;

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {state.title || state.degree}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            {state.organization || state.institution} ({state.year})
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{state.description}</p>
          
          {/* Ensure the image is loaded correctly */}
          <img
            src={imageToShow}
            alt="Trainingn"
            className="rounded-lg mt-4 w-full object-cover max-h-[none]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReactPage;


