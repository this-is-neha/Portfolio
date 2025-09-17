import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import Contact from "../Pages/contact";
import Skills from "../Pages/skills";
import Projects from "../Pages/project";
import EducationAndTrainings from "../Pages/education";
import DetailsPage from "../Pages/mern";
import ReactPage from "../Pages/React";
import OrbitPage from "../Pages/orbit";
import Verisk from "../Pages/verisk";
const RouterConfig = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/learning" element={<EducationAndTrainings />} />
      <Route path="/details/0" element={<DetailsPage />} />
      <Route path="/details/1" element={<ReactPage />} />
      <Route path="/details/2" element={<OrbitPage />} />
      <Route path="/intern/0" element={<Verisk />} />
    </Routes>
  );
};

export default RouterConfig;
