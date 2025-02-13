import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillStar } from "react-icons/ai";

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
];

function AllTrip() {
  const [allTrips, setAllTrips] = useState([]);

  useEffect(() => {
    setAllTrips(Trips);
  }, []);

  const filterTrips = (category) => {
    const filteredTrips = Trips.filter(trip => trip.category === category);
    setAllTrips(filteredTrips);
  };

  return (
    <div className="text-center py-10 bg-gray-100 min-h-screen mt-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Dream Trip</h1>
      <div className="flex justify-center gap-6 mb-8">
        <button 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => filterTrips('national')}
        >National</button>
        <button 
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          onClick={() => filterTrips('international')}
        >International</button>
      </div>
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {allTrips.map(trip => (
          <motion.div 
            key={trip.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            
          >
            <img src={`images/${trip.image}`} alt={trip.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{trip.title}</h2>
              <p className="text-gray-600 text-sm my-2">{trip.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-gray-700 text-sm">{trip.days} tour</span>
                <span className="flex items-center text-yellow-500">
                  <AiFillStar />
                  <span className="ml-1">{trip.rating}</span>
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-lg">{trip.price} /-Rs</span>
                <Link to={`destination/${trip.id}`} className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default AllTrip;
