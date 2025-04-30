// import React from "react";
// import ReactDOM from "react-dom/client"; 
// import RouterConfig from "./Routing/routing.config";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
// import './index.css';

// const htmlRoot = document.getElementById('root');
// const RootElement = ReactDOM.createRoot(htmlRoot);

// RootElement.render(
//   <React.StrictMode>
//     <BrowserRouter>  {/* Add BrowserRouter here */}
//       <RouterConfig />
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client"; 
import RouterConfig from "./Routing/routing.config";
import { BrowserRouter } from "react-router-dom"; 
import './index.css';

const htmlRoot = document.getElementById('root');
const RootElement = ReactDOM.createRoot(htmlRoot);

RootElement.render(
  <React.StrictMode>
    <BrowserRouter> 
      <RouterConfig />
    </BrowserRouter>
  </React.StrictMode>
);
