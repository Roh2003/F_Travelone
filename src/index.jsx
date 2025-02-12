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
import Payment from "./components/Payment";
import Kashmir from "./components/national/kashmir";
import Jaipur from "./components/national/Jaipur";
import Varanasi from "./components/national/varanasi";
import Goa from "./components/national/goa";
import Paris from "./components/international/Paris";
import NewYorkCity from "./components/international/New";



const root = ReactDOM.createRoot(document.getElementById("root"));



const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path="/" element={ <Layout/> } >
      <Route path="" element={ [< Home />, <Discover/>, <Places/>] } />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>} />
      <Route path="help" element={<HelpAndFeedback />} />
      <Route path="all-trip" element={<Alltrip/>} />
        <Route path="kashmir" element={<Kashmir/>} />
        <Route path="jaipur" element={<Jaipur/>} />
        <Route path="varanasi" element={<Varanasi/>} />
        <Route path="3" element={<Goa/>} />
        <Route path="paris" element={<Paris/>} />
        <Route path="new-york-city" element={<NewYorkCity/>} />
        <Route path="1" element={<tokyo/>} />
      
      
      <Route path="payment" element={<Payment/>} />
    </Route>
  )
)

root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
    
    
  </React.StrictMode>
);
