import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Places from "./components/Places";
import Discover from "./components/Discover";
import About from "./components/About";
import Contact from "./components/Contact";
import HelpAndFeedback from "./components/help";
import Alltrip from "./components/Alltrip";
const root = ReactDOM.createRoot(document.getElementById("root"));



const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path="/" element={ <Layout/> } >
      <Route path="" element={ [< Home />, <Discover/>, <Places/>] } />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="help" element={<HelpAndFeedback />} />
      <Route path="all-trip" element={<Alltrip/>} />
    </Route>
  )
)

root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
    
    
  </React.StrictMode>
);
