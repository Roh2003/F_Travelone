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
        title: 'Arrival in Agra',
        activities: [
            'Arrive at Agra. Transfer to your hotel.',
            'Visit Mehtab Bagh for a sunset view of the Taj Mahal.',
            'Dinner: Enjoy Mughlai cuisine at a local restaurant.',
        ],
    },
    {
        day: 2,
        title: 'Agra - Taj Mahal',
        activities: [
            'Early morning visit to the Taj Mahal to witness its beauty at sunrise.',
            'Explore the Agra Fort, a UNESCO World Heritage Site.',
            'Dinner: Dine at a restaurant near the fort serving authentic local dishes.',
        ],
    },
    {
        day: 3,
        title: 'Agra - Fatehpur Sikri',
        activities: [
            'Depart for Fatehpur Sikri (about 1 hour).',
            'Explore the abandoned Mughal city, including Buland Darwaza and Jama Masjid.',
            'Return to Agra for overnight stay.',
            'Dinner: Enjoy a traditional Indian meal at your accommodation.',
        ],
    },
    {
        day: 4,
        title: 'Agra - Day Tour to Mathura and Vrindavan',
        activities: [
            'Day trip to Mathura and Vrindavan (about 1.5 hours).',
            'Visit Krishna Janmabhoomi Temple in Mathura.',
            'Explore Banke Bihari Temple and ISKCON Temple in Vrindavan.',
            'Return to Agra for overnight stay.',
            'Dinner: Dine at a local restaurant.',
        ],
    },
    {
        day: 5,
        title: 'Agra - Sikandra',
        activities: [
            'Visit Sikandra to see Akbar’s Tomb.',
            'Explore the beautiful Mughal architecture and gardens.',
            'Return to Agra for some leisure time or shopping.',
            'Dinner: Enjoy Mughlai food at a renowned restaurant.',
        ],
    },
    {
        day: 6,
        title: 'Agra - Bharatpur',
        activities: [
            'Day trip to Bharatpur (about 1.5 hours).',
            'Visit Keoladeo National Park, a UNESCO World Heritage Site known for birdwatching.',
            'Return to Agra for overnight stay.',
            'Dinner: Relax with a quiet dinner at your accommodation.',
        ],
    },
    {
        day: 7,
        title: 'Agra - Itmad-ud-Daulah’s Tomb',
        activities: [
            'Visit Itmad-ud-Daulah’s Tomb, often referred to as the "Baby Taj".',
            'Enjoy a boat ride on the Yamuna River for a scenic view of the Taj Mahal.',
            'Dinner: Dine at a local restaurant with views of the Yamuna River.',
        ],
    },
    {
        day: 8,
        title: 'Agra - Day Trip to Gwalior',
        activities: [
            'Full-day trip to Gwalior (about 2 hours).',
            'Visit the Gwalior Fort, Saas Bahu Temple, and Jai Vilas Palace Museum.',
            'Return to Agra for overnight stay.',
            'Dinner: Have a late-night meal at your hotel or a nearby restaurant.',
        ],
    },
    {
        day: 9,
        title: 'Agra - Shopping and Relaxation',
        activities: [
            'Spend the day shopping in Agra’s local markets for handicrafts, marble inlay work, and leather goods.',
            'Free time for relaxation or a spa session at your hotel.',
            'Farewell dinner at a local restaurant featuring Agra’s famous Petha sweets.',
        ],
    },
    {
        day: 10,
        title: 'Departure from Agra',
        activities: [
            'Free time for last-minute shopping or relaxing.',
            'Transfer to Agra Airport or Railway Station for departure.',
        ],
    },
  ];

const testimonials = [
    { name: "John Doe", review: "Goa was a dream! The itinerary was perfect, and we had an amazing time." },
    { name: "Jane Smith", review: "Loved every bit of the trip! Great beaches, great food, and great memories." }
];

const Taj = () => {
    return (
        <div className="relative bg-gradient-to-r  from-blue-400 to-purple-500 min-h-screen text-white">
            

            <motion.div className="w-full h-screen flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-6xl font-bold drop-shadow-lg">Explore Kashmir</h1>
                <motion.p className="text-xl mt-4 max-w-2xl drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    Agra, home to the iconic Taj Mahal, is one of India's most visited tourist destinations. This city is rich in Mughal history, with UNESCO World Heritage Sites such as the Agra Fort and Fatehpur Sikri. Agra offers a journey through magnificent architecture, traditional handicrafts, and flavorful Mughlai cuisine. It’s a city where history and culture blend to create an unforgettable travel experience.
                </motion.p>
            </motion.div>

            <div className="p-10 space-y-10">
                <motion.h2 className="text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    10-Day Kashmir Tour Plan
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
                      src="https://www.youtube.com/embed/49HTIoCccDY"

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

export default Taj;
