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
        title: 'Arrival in Paris',
        activities: [
            'Arrive at Charles de Gaulle Airport and transfer to your hotel.',
            'Take an evening walk along the Champs-Élysées and enjoy the city lights.',
            'Dinner: Try classic French cuisine at a bistro or a restaurant with an Eiffel Tower view.',
        ],
    },
    {
        day: 2,
        title: 'Eiffel Tower & Seine River Cruise',
        activities: [
            'Visit the Eiffel Tower and enjoy panoramic views from the top.',
            'Stroll along the Seine River and explore Trocadéro Gardens.',
            'Evening: Take a Seine River cruise to see Paris illuminated.',
            'Dinner: Try French onion soup and duck confit at a traditional restaurant.',
        ],
    },
    {
        day: 3,
        title: 'Louvre Museum & Notre-Dame Cathedral',
        activities: [
            'Spend the morning at the Louvre Museum, seeing masterpieces like the Mona Lisa.',
            'Walk to the Île de la Cité and visit Notre-Dame Cathedral.',
            'Explore the charming streets of the Latin Quarter.',
            'Dinner: Enjoy a crêpe or quiche Lorraine in a quaint café.',
        ],
    },
    {
        day: 4,
        title: 'Versailles Palace & Gardens',
        activities: [
            'Take a day trip to the Palace of Versailles, exploring the Hall of Mirrors and gardens.',
            'Stroll through the Grand Trianon and the Queen’s Hamlet.',
            'Dinner: Dine at a restaurant in Versailles before returning to Paris.',
        ],
    },
    {
        day: 5,
        title: 'Montmartre & Sacré-Cœur',
        activities: [
            'Explore the artistic neighborhood of Montmartre.',
            'Visit the Sacré-Cœur Basilica for breathtaking views of Paris.',
            'Discover hidden gems like the Place du Tertre, filled with street artists.',
            'Dinner: Try coq au vin at a traditional Montmartre restaurant.',
        ],
    },
    {
        day: 6,
        title: 'Musée d\'Orsay & Seine Walk',
        activities: [
            'Visit the Musée d\'Orsay, home to Van Gogh, Monet, and Renoir.',
            'Stroll along the Seine River and browse Shakespeare & Company bookstore.',
            'Explore the Saint-Germain-des-Prés district.',
            'Dinner: Enjoy a candlelit dinner at a classic Parisian brasserie.',
        ],
    },
    {
        day: 7,
        title: 'Arc de Triomphe & Shopping on Champs-Élysées',
        activities: [
            'Climb to the top of the Arc de Triomphe for incredible views.',
            'Shop at luxury boutiques and flagship stores on Champs-Élysées.',
            'Visit Galeries Lafayette for a shopping experience.',
            'Dinner: Enjoy a fancy dinner at a Michelin-starred restaurant.',
        ],
    },
    {
        day: 8,
        title: 'Disneyland Paris (Optional) or Le Marais',
        activities: [
            'Option 1: Take a day trip to Disneyland Paris for a magical experience.',
            'Option 2: Explore Le Marais, known for its historic streets and chic boutiques.',
            'Visit the Place des Vosges, Paris’s oldest planned square.',
            'Dinner: Try falafel or French-Jewish delicacies in Le Marais.',
        ],
    },
    {
        day: 9,
        title: 'Catacombs & Sainte-Chapelle',
        activities: [
            'Discover the underground Catacombs of Paris for a spooky adventure.',
            'Visit the Sainte-Chapelle, famous for its stunning stained-glass windows.',
            'Enjoy a relaxing afternoon at the Jardin du Luxembourg.',
            'Dinner: Try escargots (snails) or boeuf bourguignon at a gourmet restaurant.',
        ],
    },
    {
        day: 10,
        title: 'Departure from Paris',
        activities: [
            'Enjoy your last morning with coffee and croissants at a Parisian café.',
            'Do some last-minute shopping at Rue Cler or Boulevard Haussmann.',
            'Transfer to Charles de Gaulle Airport for departure.',
        ],
    },
];



const testimonials = [
    { name: "John Doe", review: "Goa was a dream! The itinerary was perfect, and we had an amazing time." },
    { name: "Jane Smith", review: "Loved every bit of the trip! Great beaches, great food, and great memories." }
];

const Paris = () => {
    return (
        <div className="relative bg-gradient-to-r  from-blue-400 to-purple-500 min-h-screen text-white">
            

            <motion.div className="w-full h-screen flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-6xl font-bold drop-shadow-lg">Explore Paris</h1>
                <motion.p className="text-xl mt-4 max-w-2xl drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    Paris, the "City of Light," is known for its timeless charm, iconic landmarks, world-class museums, and romantic ambiance. From the Eiffel Tower and Louvre Museum to the chic boutiques and cafés lining the streets, Paris offers a perfect mix of history, culture, fashion, and art. Whether you’re admiring the stunning architecture or indulging in French cuisine, Paris is a city that captures the hearts of all who visit.
                </motion.p>
            </motion.div>

            <div className="p-10 space-y-10">
                <motion.h2 className="text-4xl font-bold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    10-Day Paris Tour Plan
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
                <h2 className="text-2xl font-semibold text-black">Watch Our Paris Tour Preview</h2>
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/dqQO3h9B_wg"
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

export default Paris;
