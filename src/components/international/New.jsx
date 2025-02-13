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
        title: 'Arrival in New York City',
        activities: [
            'Arrive at JFK International Airport. Transfer to your hotel.',
            'Take a relaxing evening walk through Times Square to experience the vibrant lights and energy of the city.',
            'Dinner: Enjoy classic American cuisine at a local diner or a rooftop restaurant.',
        ],
    },
    {
        day: 2,
        title: 'Statue of Liberty and Ellis Island',
        activities: [
            'Start the day with a ferry ride to the Statue of Liberty and Ellis Island to explore their historic significance.',
            'Return to Manhattan and stroll through Battery Park, soaking in the skyline views.',
            'Dinner: Savor a New York-style pizza in the heart of Manhattan.',
        ],
    },
    {
        day: 3,
        title: 'Empire State Building and Fifth Avenue',
        activities: [
            'Head to the top of the Empire State Building for panoramic views of the city.',
            'Spend the afternoon shopping along Fifth Avenue, home to luxury boutiques and flagship stores.',
            'Dinner: Dine at a trendy restaurant in Midtown Manhattan.',
        ],
    },
    {
        day: 4,
        title: 'Central Park and Museum Mile',
        activities: [
            'Enjoy a morning stroll or bike ride through Central Park, visiting landmarks like Bethesda Terrace and Bow Bridge.',
            'Spend the afternoon visiting world-renowned museums along Museum Mile, such as the Metropolitan Museum of Art or the Guggenheim.',
            'Dinner: Enjoy fine dining at a high-end restaurant overlooking Central Park.',
        ],
    },
    {
        day: 5,
        title: 'Day Trip to the Hamptons',
        activities: [
            'Take a day trip to the Hamptons, a popular seaside destination for New Yorkers.',
            'Relax on the beaches or explore the upscale shops and restaurants.',
            'Return to New York City for the evening.',
            'Dinner: Dine at a seafood restaurant in the Hamptons before heading back.',
        ],
    },
    {
        day: 6,
        title: 'Broadway and Times Square',
        activities: [
            'Spend the morning exploring Times Square, then catch a matinee or evening show on Broadway.',
            'Visit Madame Tussauds or Ripley\'s Believe It or Not for some fun.',
            'Dinner: Pre-show dinner at a restaurant near the theater district.',
        ],
    },
    {
        day: 7,
        title: 'Brooklyn Bridge and DUMBO',
        activities: [
            'Walk across the Brooklyn Bridge and explore the trendy DUMBO neighborhood.',
            'Enjoy panoramic views of Manhattan from Brooklyn Bridge Park.',
            'Dinner: Experience Brooklyn’s famous pizza at a local pizzeria.',
        ],
    },
    {
        day: 8,
        title: 'Wall Street and 9/11 Memorial',
        activities: [
            'Visit Wall Street and the New York Stock Exchange in the Financial District.',
            'Pay respects at the 9/11 Memorial and Museum.',
            'Dinner: Dine at a chic Financial District restaurant or rooftop bar with views of the skyline.',
        ],
    },
    {
        day: 9,
        title: 'High Line and Chelsea Market',
        activities: [
            'Take a leisurely walk along the High Line, a park built on an elevated railway.',
            'Explore Chelsea Market for unique eats, shopping, and local art.',
            'Dinner: Enjoy a trendy dinner at a rooftop restaurant in Chelsea.',
        ],
    },
    {
        day: 10,
        title: 'Departure from New York City',
        activities: [
            'Spend your last day shopping for souvenirs or relaxing at a café.',
            'Transfer to JFK Airport for departure.',
        ],
    },
  ];

const testimonials = [
    { name: "John Doe", review: "New York was a dream! The itinerary was perfect, and we had an amazing time." },
    { name: "Jane Smith", review: "Loved every bit of the trip! Great beaches, great food, and great memories." }
];

const New = () => {
    return (
        <div className="relative bg-gradient-to-r  from-blue-400 to-purple-500 min-h-screen text-white">
            

            <motion.div className="w-full h-screen flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-6xl font-bold drop-shadow-lg">Explore New York</h1>
                <motion.p className="text-xl mt-4 max-w-2xl drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                   New York City, often called "The City That Never Sleeps," is a dynamic metropolis bursting with energy, culture, and iconic landmarks. From the towering skyline dominated by the Empire State Building and the glittering lights of Times Square, to the serene beauty of Central Park, NYC is a city of contrasts. Visitors can indulge in world-class dining, shop in luxury boutiques, experience Broadway’s dazzling performances, and explore neighborhoods each with their unique charm. A global hub for arts, fashion, and finance, New York City leaves every traveler spellbound by its endless possibilities and vibrant pulse.
                </motion.p>
            </motion.div>

            <div className="p-10 space-y-10">
                <motion.h2 className="text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    10-Day New Tour Plan
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
                <h2 className="text-2xl font-semibold text-black">Watch Our New York Tour Preview</h2>
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/7_Czb_4S5NQ"
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

export default New;
