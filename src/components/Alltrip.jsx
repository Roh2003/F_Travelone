import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



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

// import Trips from './info'
const Trips = [
  {id:1,title:"Taj Mahal",image:"taj.jpg", price: 9999, category: "national", description: "A timeless symbol of love and one of the Seven Wonders of the World ", days: "9 days", rating: 4.8 },
  {id:2,title:"Jaipur, Rajasthan",image:"jaipur.jpg", price: 9999, category: "national", description: "The Pink City known for its majestic forts and vibrant culture. ", days: "9 days", rating: 4.8 },
  {id:3,title:"Goa",image:"goa.jpg", price: 9999, category: "national", description: " India’s beach paradise with a perfect blend of sun, sand, and sea.", days: "9 days", rating: 4.8 },
  {id:4,title:"Kerala Backwaters",image:"karnatak.jpg", price: 9999, category: "national", description: "A tranquil journey through the scenic landscapes of 'God’s Own Country ", days: "9 days", rating: 4.8 },
  {id:5,title:"Leh-Ladakh, Jammu & Kashmir",image:"kashmir.jpg", price: 9999, category: "national", description: "The ultimate destination for adventurers, surrounded by majestic mountains ", days: "9 days", rating: 4.8 },
  {id:6,title:"Varanasi, Uttar Pradesh",image:"varanasi.jpg", price: 9999, category: "national", description: "One of the world’s oldest cities, nestled on the banks of the Ganges River. ", days: "9 days", rating: 4.8 },
  {id:7,title:"Ranthambore National Park, Rajasthan",image:"park.jpg", price: 9999, category: "national", description: "A wildlife haven where tigers roam free in the ancient ruins. ", days: "9 days", rating: 4.8 },
  {id:8,title:"Andaman & Nicobar Islands", image:"andaman.jpg",price: 9999, category: "national", description: "A tropical paradise with pristine beaches and crystal-clear waters. ", days: "9 days", rating: 4.8 },
  {id:9,title:"Hampi, Karnataka",image:"hampi.jpg", price: 9999, category: "national", description: "The ruins of an ancient kingdom surrounded by surreal landscapes. ", days: "9 days", rating: 4.8 },
  {id:10,title:"Mysore, Karnataka",image:"mysor.jpg", price: 9999, category: "national", description: "A city of palaces, with a rich cultural heritage and grand festivities. ", days: "9 days", rating: 4.8 },
  {id:11,title:"Amritsar, Punjab",image:"panjab.jpg", price: 9999, category: "national", description: "Home to the Golden Temple, a serene and spiritual center for millions ", days: "9 days", rating: 4.8 },
  {id:12,title:"Darjeeling, West Bengal",image:"dar.jpg", price: 9999, category: "national", description: "The Queen of Hills, offering breathtaking views of tea gardens and the Himalayas ", days: "9 days", rating: 4.8 },



  {id:13,title:"Paris, France", image:"paris.jpg", price: 89999, category: "international", description: "The City of Lights, home to the iconic Eiffel Tower and romantic charm. ", days: "15 days", rating: 4.2 },
  {id:14,title:"New York City, USA", image:"new.jpg",price: 60000, category: "international", description: "The city that never sleeps, filled with towering skyscrapers and endless energy. ", days: "20 days", rating: 3.8 },
  {id:15,title:"Tokyo, Japan", image:"tokyo.jpg",price: 80000, category: "international", description: "A futuristic metropolis blending tradition with cutting-edge innovation. ", days: "12 days", rating: 4.5 },
  {id:16,title:"Dubai, UAE", image:"dubai.jpg",price: 55000, category: "international", description: " The playground of luxury, known for its towering Burj Khalifa and desert adventures.", days: "15 days", rating: 4.3 },
  {id:17,title:"Sydney, Australia",image:"aus.jpg", price: 6995, category: "international", description: "A sun-soaked harbor city, featuring the world-famous Opera House. ", days: "67 days", rating: 4.8 },
  {id:18,title:"Rome, Italy", image:"rome.jpg",price: 9999, category: "international", description: "The Eternal City, where ancient history meets modern life. ", days: "9 days", rating: 4.8 },
  {id:19,title:"Cape Town, South Africa",image:"kape.jpg", price: 9999, category: "international", description: "A coastal gem offering stunning landscapes and rich cultural experiences ", days: "7 days", rating: 4.8 },
  {id:20,title:"Santorini, Greece",image:"greece.jpg", price: 9999, category: "international", description: " A picturesque island with white-washed buildings and stunning sunsets.", days: "9 days", rating: 4.9 },
  {id:21,title:"Rio de Janeiro, Brazil",image:"rio.jpg", price: 9999, category: "international", description: " The vibrant city of Carnival, beaches, and the towering Christ the Redeemer.", days: "7 days", rating: 5.0 },
  {id:22,title:"Bali, Indonesia",image:"bali.jpg", price: 9999, category: "international", description: "A tropical paradise, famous for its serene beaches and vibrant culture. ", days: "15 days", rating: 4.1 },
  {id:23,title:"London, England",image:"london.jpg", price: 9999, category: "international", description: "A historic yet modern city, famous for the Big Ben, Buckingham Palace, and rich culture. ", days: "17 days", rating: 4.8 },
  {id:24,title:"Machu Picchu, Peru",image:"peru.jpg", price: 9999, category: "international", description: "The mystical Lost City of the Incas, hidden high in the Andes mountains. ", days: "9 days", rating: 4.8 },
]



function Alltrip() {
  const [AllTrips,setAllTrips]=useState([]);
  const filterNationalTrips = () => {
    const filteredTrips = Trips.filter(trip => trip.category === "national");
    setAllTrips(filteredTrips);
  };
    const filterInternationalTrips = () => {
    const filteredTrips = Trips.filter(trip => trip.category === "international");
    setAllTrips(filteredTrips);
  };
  useEffect(() => {
    setAllTrips(Trips);
  }, []);
  console.log(AllTrips)



  function output(Trips){
    console.log(Trips.id);
    
  }
  
  return (
        <>

        <div className="my-0 mx-0 text-center">
        <nav className="w-full absolute  top-0 p-4 flex justify-between text-black z-10  ">


            <div>
            <h1 className="text-3xl text-black font-bold cursor-pointer">Travelone</h1>
            </div>

            <div>
            <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
                <li className="text-black hover:text-white hover:bottom-b">HOME</li>
                <li className="text-black hover:text-white hover:bottom-b">ABOUT US</li>
                <li className="text-black hover:text-white hover:bottom-b">CONTACT US</li>
                <li className="text-black hover:text-white hover:bottom-b">HELP</li>
            </ul>


            </div>
            </nav>

          <div className=' text-center flex justify-evenly flex-wrap relative left-0 top-0 h-[70px] w-full bg-black bg-opacity-60'>
            
            
            
            
          </div>

          <div className='flex justify-around'>

          <button className='text-yellow-50 font-sans font-medium hover:bg-slate-300 hover:text-black
             bg-slate-900 my-4 px-4 h-[50px] w-[90px]  rounded-lg transition-all duration-100'
             onClick={filterNationalTrips}
              >national</button>
              <h1 className="text-4xl font-bold text-black relative top-3" >Choose Your Desire DreamTrip </h1>
          <button className='text-yellow-50 font-sans font-medium hover:bg-slate-300 hover:text-black
             bg-slate-900 my-4 px-4 h-[50px] w-[130px]  rounded-lg transition-all duration-100'onClick={filterInternationalTrips}>international</button>

          </div>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
                {AllTrips.map((trips)=>{
                    return(
                      <>
                      {/* <div className="bg-white rounded-lg shadow-md p-4">{trips.title}</div> */}
                      <div  key={trips.id} className="drop-shadow-2xl text-left rounded space-y-2 bg-slate-300 cursor-pointer  hover:opacity-100 duration-200 hover:">
                    
                    <img
                    className="w-full h-1/2 object-cover rounded-t-lg "
                    src={`images/${trips.image}`}
                    alt=""
                    />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">{trips.title}</p>
                <p className="font-bold">{trips.price} /-Rs</p>
              </div>
              <p className="font-semibold">
              {trips.description}
              </p>
              <div className="flex justify-between items-center">
                <h2>{trips.days} days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>{trips.rating}</span>
                </p>
                <div>
                <button className='h-9 w-9 bg-white  rounded-lg border border-black hover:bg-slate-700 hover:text-yellow-50 transition-all duration-100' onClick={output}>
                <Link to={`/${trips.id}`}>
                <FontAwesomeIcon icon={faArrowRight} />
                </Link>
               
                </button>
                </div>
              </div>
            </div>
          </div>
         
          </>
                    )
                })}
                
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
