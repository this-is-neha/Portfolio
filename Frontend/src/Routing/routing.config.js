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
import Anais from "../Pages/anais"
import Hack from "../Pages/hackathon"
const RouterConfig = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/learning" element={<EducationAndTrainings />} />
      <Route path ="/details/0" element={<Anais/>}/>
      <Route path="/details/1" element={<DetailsPage />} />
      <Route path="/details/2" element={<ReactPage />} />
      <Route path="/details/3" element={<OrbitPage />} />
      <Route path="/details/4" element={<Hack/>}/>
      <Route path="/intern/0" elemwent={<Verisk />} />
    </Routes>
  );
};

export default RouterConfig;
