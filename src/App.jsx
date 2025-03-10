import React from "react";
// import { Login } from "./components/Login";
// import { SignUp } from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header"


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



  {id:13,title:"Paris, France", image:"paris.jpg", price: 9999, category: "international", description: "The City of Lights, home to the iconic Eiffel Tower and romantic charm. ", days: "9 days", rating: 4.8 },
  {id:14,title:"New York City, USA", image:"new.jpg",price: 9999, category: "international", description: "The city that never sleeps, filled with towering skyscrapers and endless energy. ", days: "9 days", rating: 4.8 },
  {id:15,title:"Tokyo, Japan", image:"tokyo.jpg",price: 9999, category: "international", description: "A futuristic metropolis blending tradition with cutting-edge innovation ", days: "9 days", rating: 4.8 },
  {id:16,title:"Dubai, UAE", image:"dubai.jpg",price: 9999, category: "international", description: " The playground of luxury, known for its towering Burj Khalifa and desert adventures.", days: "9 days", rating: 4.8 },
  {id:17,title:"Sydney, Australia",image:"aus.jpg", price: 9999, category: "international", description: "A sun-soaked harbor city, featuring the world-famous Opera House. ", days: "9 days", rating: 4.8 },
  {id:18,title:"Rome, Italy", image:"rome.jpg",price: 9999, category: "international", description: "The Eternal City, where ancient history meets modern life. ", days: "9 days", rating: 4.8 },
  {id:19,title:"Cape Town, South Africa",image:"kape.jpg", price: 9999, category: "international", description: "A coastal gem offering stunning landscapes and rich cultural experiences ", days: "9 days", rating: 4.8 },
  {id:20,title:"Santorini, Greece",image:"greece.jpg", price: 9999, category: "international", description: " A picturesque island with white-washed buildings and stunning sunsets.", days: "9 days", rating: 4.8 },
  {id:21,title:"Rio de Janeiro, Brazil",image:"rio.jpg", price: 9999, category: "international", description: " The vibrant city of Carnival, beaches, and the towering Christ the Redeemer.", days: "9 days", rating: 4.8 },
  {id:22,title:"Bali, Indonesia",image:"bali.jpg", price: 9999, category: "international", description: "A tropical paradise, famous for its serene beaches and vibrant culture. ", days: "9 days", rating: 4.8 },
  {id:23,title:"London, England",image:"london.jpg", price: 9999, category: "international", description: "A historic yet modern city, famous for the Big Ben, Buckingham Palace, and rich culture. ", days: "9 days", rating: 4.8 },
  {id:24,title:"Machu Picchu, Peru",image:"peru.jpg", price: 9999, category: "international", description: "The mystical Lost City of the Incas, hidden high in the Andes mountains. ", days: "9 days", rating: 4.8 },
]

const App = () => {
  return (
    <>

    < Header />
  
    </>
  );
};

export default App;
