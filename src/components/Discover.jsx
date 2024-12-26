import React from "react";
import { Link } from 'react-router-dom';


const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <p className="text-center text-3xl text-black font-serif mt-9">Travel you choose the destination,
                            we offer you the experience.
      </p>
      
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/london.jpg"
            alt=""
          />
          <div>
            <h2 className="font-bold">Explore the World with TravelOne.</h2>
            <h1 className="text-2xl font-bold"></h1>
          </div>
          <p className="text-lg">
          Attract visitors to your travel planning website by offering engaging destination guides with itineraries, practical travel tips and hacks, interactive tools like a trip planner and budget calculator, user-generated content such as travel stories and reviews, stunning photography, and seasonal articles highlighting the best times to visit. Incorporate expert interviews, contests, and a newsletter for personalized updates, while leveraging social media and video content to create a vibrant community of travel enthusiasts.
          </p>
          <p className="text-sm">
          
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">TravelOne: Where Every Trip Tells a Story</h2>
          <h1 className="font-bold text-2xl">Let's Travel Togather</h1>
          <p className="text-sm">
          At TravelOne, we believe that every journey is an opportunity for discovery. Whether you're dreaming of pristine beaches, vibrant cityscapes, or hidden gems off the beaten path, we’re here to turn your travel dreams into reality. Our expertly curated itineraries, exclusive deals, and personalized service ensure that your adventures are not just trips but unforgettable experiences. Join our community of explorers and let TravelOne guide you to your next great escape!
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/bali.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover "
          src="images/image-8.jpg"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
          <Link to="/all-trip">View Details</Link>
          </h1>
        </div>
      </div>

      <div className="my-20 flex justify-between items-center xl:h-[500px]">
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt=""
          />
        </div>
        <div className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl sm:text-sm"></h1>
          <h2 className="md:text-4xl sm:text-base">
          Embrace Adventure: Your Next Journey Awaits!
          </h2>
          <p className="md:text-base sm:text-xs">
          Life is a collection of moments, and traveling helps you create the most unforgettable ones. Step out of your comfort zone and discover new cultures, breathtaking landscapes, and delicious cuisines. Don’t wait for the perfect time—make every moment count and start exploring the world today
          </p>
          <button className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 hover:duration-300">
            <Link to="/all-trip">Book Now</Link>
          </button>
        </div>
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="images/image-33.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
