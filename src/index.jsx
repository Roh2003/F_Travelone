import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements , Route } from "react-router-dom";
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
import Varanasi from "./components/national/Varanasi";
import Goa from "./components/national/Goa";
import Paris from "./components/international/Paris";
import NewYorkCity from "./components/international/New";
import Taj from "./components/national/taj";


const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap multiple elements inside a parent component
function HomeLayout() {
  return (
    <>
      <Home />
      <Discover />
      <Places />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Fixed multiple elements issue */}
      <Route path="" element={<HomeLayout />} />
      
      {/* Other Routes */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="help" element={<HelpAndFeedback />} />
      <Route path="all-trip" element={<Alltrip />} />

      {/* National Destinations */}
      <Route path="destination/5" element={<Kashmir />} />
      <Route path="all-trip/destination/5" element={<Kashmir />} />
      <Route path="destination/2" element={<Jaipur />} />
      <Route path="all-trip/destination/2" element={<Jaipur />} />
      <Route path="destination/6" element={<Varanasi />} />
      <Route path="all-trip/destination/6" element={<Varanasi />} />
      <Route path="destination/1" element={<Taj />} />
      <Route path="all-trip/destination/1" element={<Taj />} />
      <Route path="destination/3" element={<Goa />} />
      <Route path="all-trip/destination/3" element={<Goa />} />

      {/* International Destinations */}
      <Route path="destination/13" element={<Paris />} />
      <Route path="all-trip/destination/13" element={<Paris />} />
      
      <Route path="destination/14" element={<NewYorkCity />} />
      <Route path="all-trip/destination/14" element={<NewYorkCity />} />
      

      {/* Payment Route */}
      <Route path="payment" element={<Payment />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
