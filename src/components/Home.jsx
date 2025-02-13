import React from "react";
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Carousel */}
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img src="images/rajasthan.jpg" alt="Scenic View" className="w-full h-full object-cover brightness-50" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/london.jpg" alt="London View" className="w-full h-full object-cover brightness-50" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/bali.jpg" alt="Bali Beach" className="w-full h-full object-cover brightness-50" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/peru.jpg" alt="Machu Picchu" className="w-full h-full object-cover brightness-50" />
        </SwiperSlide>
      </Swiper>

      {/* Overlay Content with Animation */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 space-y-8 bg-black bg-opacity-20  z-10 ">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-widest animate-slide-in bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text drop-shadow-lg uppercase">
          DISCOVER
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold animate-slide-in bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text drop-shadow-xl tracking-wide">
          WORLD
        </h1>
        <p className="max-w-xl text-sm md:text-base text-gray-300 leading-relaxed animate-fade-in-delayed">
          Journey Beyond the Ordinary - Discover, Explore, and Experience the World with Us! Unlock the World’s Most Spectacular Destinations – From Iconic Landmarks to Hidden Treasures, Let Your Next Adventure Begin with Unforgettable Journeys Tailored Just for You!
        </p>
        
        {/* Buttons with Hover Effects */}
        <div className="flex space-x-4 animate-fade-in-delayed">
          <Link to="/payment" className="bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
            Road Map
          </Link>
          <Link to="/all-trip" className="border border-white text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-white hover:text-black transition-transform transform hover:scale-105 duration-300">
            Discover
          </Link>
        </div>
        
        {/* Social Icons with Animation */}
        <div className="flex space-x-6 animate-bounce">
          <AiFillFacebook size={28} className="cursor-pointer hover:text-gray-400 transition duration-300" />
          <AiFillInstagram size={28} className="cursor-pointer hover:text-gray-400 transition duration-300" />
          <AiFillTwitterSquare size={28} className="cursor-pointer hover:text-gray-400 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
