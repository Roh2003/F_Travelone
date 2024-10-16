import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import {
  AiFillStar,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";

import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";


function Alltrip() {
    return (
        <>

        <div className="my-10 mx-10 text-center">


          <div className=' text-center flex justify-evenly flex-wrap relative left-0 top-0 h-[70px] w-full bg-black bg-opacity-60'>
            <button className='text-yellow-50 font-sans font-medium hover:bg-slate-300 hover:text-black
             bg-slate-900 my-4 px-4 rounded-lg transition-all duration-100 '>national</button>
            <h1 className="text-4xl font-bold text-white relative top-3" >Choose Your Desire DreamTrip </h1>
            <button className='text-yellow-50 font-sans font-medium hover:bg-slate-300 hover:text-black
             bg-slate-900 my-4 px-4 rounded-lg transition-all duration-100'>international</button>
          </div>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">

                <div className="drop-shadow-2xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
                    
                    <img
                    className="w-full h-1/2 object-cover rounded-t-lg"
                    src="images/taj.jpg"
                    alt=""
                    />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Taj Mahal, Agra</p>
                <p className="font-bold">9999 /-Rs</p>
              </div>
              <p className="font-semibold">
              A timeless symbol of love and one of the Seven Wonders of the World 
              </p>
              <div className="flex justify-between items-center">
                <h2>9 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
                <div>
                <button className='h-9 w-9 bg-white  rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/rajasthan.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Jaipur, Rajasthan</p>
                <p className="font-bold">7999 /-Rs</p>
              </div>
              <p className="font-semibold">
              The Pink City known for its majestic forts and vibrant culture.
              </p>
              <div className="flex justify-between items-center">
                <h2>7 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.1</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/goa.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Goa</p>
                <p className="font-bold">4999 /-Rs PP</p>
              </div>
              <p className="font-semibold">
              India’s beach paradise with a perfect blend of sun, sand, and sea.
              </p>
              <div className="flex justify-between items-center">
                <h2>5 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/karnatak.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Kerala Backwaters
                </p>
                <p className="font-bold">8999 /-Rs</p>
              </div>
              <p className="font-semibold">
              A tranquil journey through the scenic landscapes of 'God’s Own Country'.
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/kashmir.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Leh-Ladakh, Jammu & Kashmir</p>
                <p className="font-bold">18999 /-Rs</p>
              </div>
              <p className="font-semibold">
              The ultimate destination for adventurers, surrounded by majestic mountains
              </p>
              <div className="flex justify-between items-center">
                <h2>15 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/varanasi.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Varanasi, Uttar Pradesh</p>
                <p className="font-bold">10999 /-Rs</p>
              </div>
              <p className="font-semibold">
              One of the world’s oldest cities, nestled on the banks of the Ganges River.
              </p>
              <div className="flex justify-between items-center">
                <h2>10 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.3</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/park.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Ranthambore National Park, Rajasthan
                </p>
                <p className="font-bold">7999 /-Rs</p>
              </div>
              <p className="font-semibold">
              A wildlife haven where tigers roam free in the ancient ruins.
              </p>
              <div className="flex justify-between items-center">
                <h2>9 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/andaman.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Andaman & Nicobar Islands</p>
                <p className="font-bold">15999 /-Rs</p>
              </div>
              <p className="font-semibold">
              A tropical paradise with pristine beaches and crystal-clear waters.
              </p>
              <div className="flex justify-between items-center">
                <h2>12 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.9</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/karnatak.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Hampi, Karnataka</p>
                <p className="font-bold">5999 /-Rs</p>
              </div>
              <p className="font-semibold">
              The ruins of an ancient kingdom surrounded by surreal landscapes.
              </p>
              <div className="flex justify-between items-center">
                <h2>6 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>3.5</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/mysor.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Mysore, Karnataka</p>
                <p className="font-bold">8999 /-Rs</p>
              </div>
              <p className="font-semibold">
              A city of palaces, with a rich cultural heritage and grand festivities.
              </p>
              <div className="flex justify-between items-center">
                <h2>9 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.6</span>
                  <div>
                <button className='h-9 w-9 bg-whit text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/panjab.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Amritsar, Punjab</p>
                <p className="font-bold">6999 /-Rs</p>
              </div>
              <p className="font-semibold">
              Home to the Golden Temple, a serene and spiritual center for millions.
              </p>
              <div className="flex justify-between items-center">
                <h2>7 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>3.8</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover: duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/image-7.jpg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">Darjeeling, West Bengal</p>
                <p className="font-bold">14999 /-Rs</p>
              </div>
              <p className="font-semibold">
              The Queen of Hills, offering breathtaking views of tea gardens and the Himalayas.
              </p>
              <div className="flex justify-between items-center">
                <h2>10 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>5.0</span>
                  <div>
                <button className='h-9 w-9 bg-white text-black rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' >
                <FontAwesomeIcon icon={faArrowRight} />
                </button>
                </div>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      
      <footer className="w-full p-20 py-10 cursor-default bg-slate-300">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-2 sm:justify-center items-center my-10">
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-3xl font-bold cursor-pointer">Travelone</h1>
          <div className="flex space-x-5">
            <AiFillFacebook size={"1.5rem"} className="cursor-pointer" />
            <AiFillInstagram size={"1.5rem"} className="cursor-pointer" />
            <AiFillTwitterSquare size={"1.5rem"} className="cursor-pointer" />
            <AiOutlineWhatsApp size={"1.5rem"} className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMessage />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiLocationOn />
            <p>(898)-645-434</p>
          </div>
          <div className="flex items-center space-x-2">
            <TfiAlarmClock />
            <p>(898)-645-434</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-xl">Travel</h1>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            About Us
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            Services
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            Blog
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            Contact Us
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            About Us
          </a>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-xl">Acount</h1>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            Signup
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            Login
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            View Trips
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            Contact
          </a>
          <a className="text-[15px] text-gray-400 hover:text-black" href="/">
            About
          </a>
        </div>

        <div className="flex flex-col space-y-3">
          <h1 className="font-bold text-xl">Download</h1>
          <p className="text-xl text-gray-400">
            From App Store and Google Play
          </p>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaAppStore size={"1.5rem"} />
            <h1>
              <p className="text-xl font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
          <button className="flex items-center space-x-4 text-left px-5 py-1 border rounded-md">
            <FaGooglePlay size={"1.5rem"} />                                  

            <h1>
              <p className="text-xl font-bold">Open On</p>
              <span className="font-bold">App Store</span>
            </h1>
          </button>
        </div>
      </div>
    </footer>
      </>
    )
}

export default Alltrip
