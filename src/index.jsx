import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements , Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Places from "./components/Places.jsx";
import Discover from "./components/Discover.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import HelpAndFeedback from "./components/help.jsx";
import Alltrip from "./components/Alltrip.jsx";
import Payment from "./components/Payment.jsx";
import Kashmir from "./components/national/kashmir.jsx";
import Jaipur from "./components/national/Jaipur.jsx";
import Varanasi from "./components/national/varanasi.jsx"
import Goa from "./components/national/goa.jsx";
import Paris from "./components/international/Paris.jsx";
import NewYorkCity from "./components/international/New.jsx";
import Taj from "./components/national/taj.jsx";


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
