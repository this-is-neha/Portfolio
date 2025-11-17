
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
