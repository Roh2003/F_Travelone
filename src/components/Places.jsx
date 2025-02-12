import React from "react";
import { AiFillStar } from "react-icons/ai";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Places = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="w-4/5 m-auto cursor-default text-gray-800">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-extrabold text-gray-900">Places not to be missed</h1>
        <p className="text-gray-600">
          Explore the World’s Wonders – Where Every Journey Becomes an Unforgettable Adventure!
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="grid md:grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b"
      >
        {["kashmir", "rajasthan", "ujjain", "jaipur", "omkareshwar", "doha"].map((place, index) => (
          <div key={index} className="lg:row-span-1 lg:col-span-1 md:col-span-2">
            <img
              className="w-full h-full object-cover rounded-lg cursor-pointer shadow-lg opacity-90 hover:opacity-100 transition duration-300"
              src={`images/${place}.jpg`}
              alt=""
            />
          </div>
        ))}
      </motion.div>

      <div className="my-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Recommendations</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          {[{
            name: "Santorini, Greece",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "greece"
          }, {
            name: "Rio de Janeiro, Brazil",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "rio"
          }, {
            name: "Bali, Indonesia",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "bali"
          }, {
            name: "London, England",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "london"
          }, {
            name: "Machu Picchu, Peru",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "peru"
          }, {
            name: "Hampi, Karnataka",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "hampi"
          }, {
            name: "Mysore, Karnataka",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "mysor"
          }, {
            name: "Amritsar, Punjab",
            price: "9999 /-Rs",
            duration: "9 days tour",
            rating: "4.8",
            img: "panjab"
          }].map((place, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 2 }}
              className="rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={`images/${place.img}.jpg`}
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">{place.name}</h2>
                  <p className="font-bold text-indigo-600">{place.price}</p>
                </div>
                <p className="text-gray-600 text-sm mt-2">A must-visit destination full of wonder and beauty.</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-gray-700 text-sm">{place.duration}</span>
                  <span className="flex items-center text-yellow-500">
                    <AiFillStar />
                    <span className="ml-1">{place.rating}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Places;
