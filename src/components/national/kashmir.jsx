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
    title: 'Arrival in Srinagar',
    activities: [
      'Arrive at Srinagar Airport. Transfer to your hotel or houseboat.',
      'Enjoy a Shikara ride on Dal Lake, visiting the floating gardens and local markets.',
      'Stroll through the Mughal gardens (Shalimar Bagh and Nishat Bagh) overlooking Dal Lake.',
      'Dinner: Traditional Kashmiri cuisine at a local restaurant.',
    ],
  },
  {
    day: 2,
    title: 'Srinagar - Gulmarg',
    activities: [
      'Drive to Gulmarg (about 2 hours).',
      'Take the Gondola ride to Khilanmarg for stunning views and enjoy snow activities.',
      'Return to Srinagar for overnight stay.',
      'Dinner: Enjoy Kashmiri dishes at your accommodation.',
    ],
  },
  {
    day: 3,
    title: 'Gulmarg - Pahalgam',
    activities: [
      'Depart for Pahalgam (approximately 4 hours).',
      'Visit Betaab Valley and Aru Valley for breathtaking landscapes.',
      'Explore local markets and enjoy a riverside walk.',
      'Dinner: Dine at a local restaurant and spend the night in Pahalgam.',
    ],
  },
  {
    day: 4,
    title: 'Pahalgam - Sonamarg',
    activities: [
      'Drive to Sonamarg (about 3 hours).',
      'Visit Thajiwas Glacier and enjoy activities like horse riding or trekking.',
      'Return to Pahalgam for overnight stay.',
      'Dinner: Traditional dinner at your accommodation.',
    ],
  },
  {
    day: 5,
    title: 'Pahalgam - Srinagar',
    activities: [
      'Return to Srinagar.',
      'Visit the historic Jamia Masjid and explore the old city, including the local bazaars.',
      'Experience a cultural show or Sufi music performance (if available).',
      'Dinner: Enjoy dinner at a local restaurant or your accommodation.',
    ],
  },
  {
    day: 6,
    title: 'Srinagar - Dachigam National Park',
    activities: [
      'Visit Dachigam National Park to see the endangered Hangul deer and other wildlife.',
      'Return to Srinagar and visit the Shankaracharya Temple.',
      'Free time for shopping or relaxation.',
      'Dinner: Enjoy dinner at a local restaurant.',
    ],
  },
  {
    day: 7,
    title: 'Srinagar - Yusmarg',
    activities: [
      'Day trip to Yusmarg (about 2 hours).',
      'Explore the beautiful meadows and enjoy a picnic by the Doodganga River.',
      'Return to Srinagar for overnight stay.',
      'Dinner: Traditional Kashmiri cuisine at your accommodation.',
    ],
  },
  {
    day: 8,
    title: 'Srinagar - Betaab Valley',
    activities: [
      'Depart for Betaab Valley (return to Pahalgam).',
      'Enjoy a day of leisure activities: hiking, nature walks, or relaxing.',
      'Head back to Srinagar for overnight stay.',
      'Dinner: Dinner at a local restaurant or your accommodation.',
    ],
  },
  {
    day: 9,
    title: 'Srinagar - Awantipora Ruins',
    activities: [
      'Visit the ancient Awantipora Ruins, dating back to the 9th century.',
      'Head back to Srinagar for shopping in Lal Chowk and visiting local handicraft shops.',
      'Farewell dinner featuring a Wazwan meal (a traditional Kashmiri feast).',
      'Dinner: Dinner at a renowned restaurant.',
    ],
  },
  {
    day: 10,
    title: 'Departure from Srinagar',
    activities: [
      'Free time for last-minute shopping or relaxing.',
      'Transfer to Srinagar Airport for departure.',
    ],
  },
];

const testimonials = [
    { name: "John Doe", review: "Goa was a dream! The itinerary was perfect, and we had an amazing time." },
    { name: "Jane Smith", review: "Loved every bit of the trip! Great beaches, great food, and great memories." }
];

const Kashmir = () => {
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
                     Kashmir, known as "Paradise on Earth," is a breathtaking region in northern India, famed for its majestic Himalayan mountains, lush valleys, and pristine lakes like Dal and Wular. With its diverse seasons, from snow-covered winters to vibrant springs, Kashmir offers unparalleled natural beauty. Popular destinations include Srinagar, with its houseboats and Mughal gardens, Gulmarg for skiing, and Pahalgam for serene landscapes. Rich in culture, Kashmir is celebrated for its handicrafts, delicious cuisine like Rogan Josh and Wazwan, and spiritual significance with sites like Amarnath. Its stunning scenery and warm hospitality make it a must-visit destination.
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
                      src="https://www.youtube.com/embed/Qipxi1Qn8iE"

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

export default Kashmir;
