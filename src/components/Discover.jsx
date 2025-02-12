import React from "react";
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Discover = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="w-4/5 m-auto cursor-default text-gray-900">
      <motion.p 
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2 }}
        className="text-center text-4xl font-bold font-serif mt-12 text-gray-800"
      >
        Travel you choose the destination, we offer you the experience.
      </motion.p>
      
      <div className="w-full flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-12">
        <motion.div 
          initial={{ opacity: 0, x: -150 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
          className="w-full space-y-6"
        >
          <img
            className="w-full rounded-lg shadow-lg border-4 border-gray-300 cursor-pointer opacity-90 hover:opacity-100 transition duration-300"
            src="images/london.jpg"
            alt="London"
          />
          <div>
            <h2 className="text-2xl font-semibold">Explore the World with TravelOne.</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Attract visitors to your travel planning website by offering engaging destination guides with itineraries, practical travel tips, interactive tools, user-generated content, and stunning photography. 
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 150 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
          className="w-full space-y-6 text-left"
        >
          <h2 className="text-2xl font-semibold">TravelOne: Where Every Trip Tells a Story</h2>
          <h1 className="text-3xl font-bold text-indigo-700">Let's Travel Together</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At TravelOne, we believe that every journey is an opportunity for discovery. Whether you're dreaming of pristine beaches, vibrant cityscapes, or hidden gems, we’re here to turn your travel dreams into reality.
          </p>
          <img
            className="w-full rounded-lg shadow-lg border-4 border-gray-300 cursor-pointer opacity-90 hover:opacity-100 transition duration-300"
            src="images/bali.jpg"
            alt="Bali"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2 }}
        className="w-full h-[400px] my-12 relative"
      >
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src="images/image-8.jpg"
          alt="Travel"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 rounded-lg">
          <h1 className="text-3xl text-white font-bold px-6 py-3 border border-white cursor-pointer hover:bg-white hover:text-black transition duration-300">
            <Link to="/all-trip">View Details</Link>
          </h1>
        </div>
      </motion.div>

      <div className="my-20 flex flex-col lg:flex-row justify-center items-center gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
          className="lg:w-[450px] w-full"
        >
          <img
            className="w-full rounded-lg shadow-lg object-cover"
            src="images/image-33.jpg"
            alt="Travel Experience"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
          className="text-center space-y-6 max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-800">Embrace Adventure: Your Next Journey Awaits!</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Life is a collection of moments, and traveling helps you create the most unforgettable ones. Step out of your comfort zone and explore new cultures, breathtaking landscapes, and delicious cuisines. Don’t wait—start exploring today!
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            <Link to="/all-trip">Book Now</Link>
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 2 }}
          className="lg:w-[450px] w-full hidden lg:block"
        >
          <img
            className="w-full rounded-lg shadow-lg object-cover"
            src="images/image-33.jpg"
            alt="Travel Adventure"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Discover;
