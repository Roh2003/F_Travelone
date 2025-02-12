import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
} from "react-icons/ai";

const tourPlan = [
    {
        day: 1,
        title: 'Arrival in Goa',
        activities: [
            'Arrive in Goa. Transfer to your beachside hotel.',
            'Relax on the beach and explore the local area.',
            'Dinner: Enjoy Goan seafood at a beachside shack.',
        ],
    },
    {
        day: 2,
        title: 'North Goa Beaches and Forts',
        activities: [
            'Visit popular beaches like Baga, Calangute, and Anjuna.',
            'Explore Aguada Fort and Chapora Fort for stunning views.',
            'Enjoy the vibrant nightlife at a beach club.',
            'Dinner: Dine at a popular seafood restaurant.',
        ],
    },
    {
        day: 3,
        title: 'Old Goa and Churches',
        activities: [
            'Day trip to Old Goa to visit Basilica of Bom Jesus and Se Cathedral.',
            'Explore the Archaeological Museum and the Church of St. Cajetan.',
            'Return to the hotel for a relaxing evening.',
            'Dinner: Traditional Goan cuisine at a local restaurant.',
        ],
    },
    {
        day: 4,
        title: 'Dudhsagar Waterfalls and Spice Plantation',
        activities: [
            'Visit Dudhsagar Waterfalls, one of the highest waterfalls in India.',
            'Enjoy a jeep safari to the falls and a nature walk.',
            'Later, visit a spice plantation for a guided tour and lunch.',
            'Return to the hotel for dinner and relaxation.',
        ],
    },
    {
        day: 5,
        title: 'South Goa Beaches',
        activities: [
            'Explore South Goa’s quieter beaches like Palolem, Colva, and Agonda.',
            'Enjoy water sports like parasailing and jet skiing.',
            'Relax by the beach and catch a stunning sunset.',
            'Dinner: Local seafood at a beachside restaurant.',
        ],
    },
    {
        day: 6,
        title: 'Adventure Day: Water Sports and Scuba Diving',
        activities: [
            'Spend the day enjoying water activities like scuba diving, snorkeling, and windsurfing.',
            'Explore the underwater marine life at Grande Island or Bat Island.',
            'Return to the hotel for a relaxing evening.',
            'Dinner: Dine at a beachfront restaurant with live music.',
        ],
    },
    {
        day: 7,
        title: 'Panaji City and Cruise',
        activities: [
            'Visit Panaji, the capital of Goa. Explore the Latin Quarter of Fontainhas.',
            'Visit the Church of Our Lady of the Immaculate Conception and the local markets.',
            'In the evening, enjoy a boat cruise on the Mandovi River.',
            'Dinner: Enjoy Goan cuisine on a cruise boat.',
        ],
    },
    {
        day: 8,
        title: 'Shopping and Local Markets',
        activities: [
            'Spend the day shopping at the famous Anjuna Flea Market or Mapusa Market.',
            'Pick up souvenirs, local handicrafts, and Goan spices.',
            'Free time for beach relaxation or spa at your hotel.',
            'Dinner: Enjoy dinner at a local Goan restaurant.',
        ],
    },
    {
        day: 9,
        title: 'Day Trip to Chorao Island',
        activities: [
            'Take a day trip to Chorao Island, known for its bird sanctuary.',
            'Explore the island and enjoy birdwatching and nature walks.',
            'Return to the hotel for an evening of leisure.',
            'Dinner: Dine at a popular restaurant known for its Goan-Portuguese fusion cuisine.',
        ],
    },
    {
        day: 10,
        title: 'Departure from Goa',
        activities: [
            'Free time for beach relaxation or last-minute shopping.',
            'Transfer to Goa Airport for your departure.',
        ],
    },
  ];

const testimonials = [
    { name: "John Doe", review: "Goa was a dream! The itinerary was perfect, and we had an amazing time." },
    { name: "Jane Smith", review: "Loved every bit of the trip! Great beaches, great food, and great memories." }
];

const Goa = () => {
    return (
        <div className="relative bg-gradient-to-r  from-blue-400 to-purple-500 min-h-screen text-white">
            

            <motion.div className="w-full h-screen flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-6xl font-bold drop-shadow-lg">Explore Goa</h1>
                <motion.p className="text-xl mt-4 max-w-2xl drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    Discover the beauty of Goa with its stunning beaches, rich culture, and vibrant nightlife. Your dream vacation awaits!
                </motion.p>
            </motion.div>

            <div className="p-10 space-y-10">
                <motion.h2 className="text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    10-Day Goa Tour Plan
                </motion.h2>
                {tourPlan.map((dayInfo) => (
                    <motion.div key={dayInfo.day} className="bg-white text-black p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.05 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: dayInfo.day * 0.1 }}>
                        <h2 className="text-2xl font-bold">Day {dayInfo.day}: {dayInfo.title}</h2>
                        <ul className="list-disc ml-5 mt-2">
                            {dayInfo.activities.map((activity, index) => (
                                <li key={index} className="mt-1 text-lg">{activity}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <div className="mb-6 p-4 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold text-black">Watch Our Goa Tour Preview</h2>
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/X_R696xDHvY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="p-10 bg-white text-black rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center">What Our Travelers Say</h2>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="mt-4 p-4 bg-gray-100 rounded-md shadow-sm">
                        <p className="text-lg">"{testimonial.review}"</p>
                        <p className="text-right font-bold">- {testimonial.name}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <motion.button className="bg-gradient-to-r from-black to-gray-700 rounded-md text-white text-2xl p-3 px-6 shadow-lg transform transition duration-500 hover:scale-110"
                    whileHover={{ scale: 1.1 }}>
                    <Link to="/payment">Book Tour</Link>
                </motion.button>
            </div>
        </div>
    );
};

export default Goa;
