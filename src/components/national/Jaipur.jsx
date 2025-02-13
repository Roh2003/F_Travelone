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
        title: 'Arrival in Jaipur',
        activities: [
            'Arrive at Jaipur Airport. Transfer to your hotel.',
            'Visit the famous Hawa Mahal (Palace of Winds) and explore the local markets in the evening.',
            'Dinner: Enjoy traditional Rajasthani cuisine at a local restaurant.',
        ],
    },
    {
        day: 2,
        title: 'Jaipur City Tour',
        activities: [
            'Visit the Amber Fort and take an elephant ride up to the fort.',
            'Explore the City Palace and Jantar Mantar (an astronomical observatory).',
            'Dinner: Dine at a traditional Rajasthani restaurant.',
        ],
    },
    {
        day: 3,
        title: 'Jaipur - Ajmer - Pushkar',
        activities: [
            'Depart for Ajmer (approximately 2 hours).',
            'Visit the famous Ajmer Sharif Dargah and explore the city.',
            'Head to Pushkar (about 30 minutes from Ajmer) and visit the Pushkar Lake and Brahma Temple.',
            'Dinner: Overnight stay and dinner in Pushkar.',
        ],
    },
    {
        day: 4,
        title: 'Pushkar - Jaipur',
        activities: [
            'Return to Jaipur and enjoy free time for shopping at Bapu Bazaar and Johari Bazaar.',
            'Visit the Albert Hall Museum.',
            'Dinner: Experience a traditional Rajasthani cultural show with dinner at Chokhi Dhani.',
        ],
    },
    {
        day: 5,
        title: 'Jaipur - Nahargarh Fort',
        activities: [
            'Morning trek or drive to Nahargarh Fort for panoramic views of Jaipur city.',
            'Explore the fort and visit Jaigarh Fort nearby, famous for the world’s largest cannon on wheels.',
            'Dinner: Return to Jaipur for dinner and overnight stay.',
        ],
    },
    {
        day: 6,
        title: 'Jaipur - Bikaner',
        activities: [
            'Drive to Bikaner (about 5-6 hours).',
            'Visit Junagarh Fort, a massive complex with palaces and courtyards.',
            'Dinner: Enjoy a Bikaneri feast at your accommodation.',
        ],
    },
    {
        day: 7,
        title: 'Bikaner - Jaisalmer',
        activities: [
            'Depart for Jaisalmer (approximately 5 hours).',
            'Check-in to your desert camp or hotel and enjoy a camel safari in the Thar Desert.',
            'Dinner: Traditional Rajasthani dinner under the stars at the desert camp.',
        ],
    },
    {
        day: 8,
        title: 'Jaisalmer Exploration',
        activities: [
            'Visit Jaisalmer Fort, one of the largest living forts in the world.',
            'Explore Patwon Ki Haveli and Nathmal Ki Haveli.',
            'Dinner: Enjoy dinner at a local restaurant.',
        ],
    },
    {
        day: 9,
        title: 'Jaisalmer - Jaipur',
        activities: [
            'Return to Jaipur (about 8 hours).',
            'Free time for last-minute shopping or exploring the local markets.',
            'Farewell dinner at a renowned restaurant in Jaipur.',
        ],
    },
    {
        day: 10,
        title: 'Departure from Jaipur',
        activities: [
            'Free time for relaxing or shopping.',
            'Transfer to Jaipur Airport for your departure.',
        ],
    },
  ];

const testimonials = [
    { name: "John Doe", review: "Goa was a dream! The itinerary was perfect, and we had an amazing time." },
    { name: "Jane Smith", review: "Loved every bit of the trip! Great beaches, great food, and great memories." }
];

const Jaipur = () => {
    return (
        <div className="relative bg-gradient-to-r  from-blue-400 to-purple-500 min-h-screen text-white">
            

            <motion.div className="w-full h-screen flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-6xl font-bold drop-shadow-lg">Explore Jaipur</h1>
                <motion.p className="text-xl mt-4 max-w-2xl drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    Jaipur, known as the "Pink City," is a vibrant city in Rajasthan, India, famous for its palaces, forts, and colorful markets. With rich cultural heritage, the city boasts landmarks like the Hawa Mahal, Amber Fort, and City Palace. Jaipur's royal past is reflected in its magnificent architecture, vibrant festivals, and traditional handicrafts. The city offers a blend of historical grandeur, art, and a lively atmosphere, making it a must-visit destination for travelers exploring India.
                </motion.p>
            </motion.div>

            <div className="p-10 space-y-10">
                <motion.h2 className="text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    10-Day Jaipur Tour Plan
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
                <h2 className="text-2xl font-semibold text-black">Watch Our Jaipur Tour Preview</h2>
                <iframe
                    width="100%"
                    height="500"
                    
                    src="https://www.youtube.com/embed/kRZLUCWswlw"
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

export default Jaipur;
