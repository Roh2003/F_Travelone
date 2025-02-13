import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const tourPlan = [
    {
        day: 1,
        title: 'Arrival in Varanasi',
        activities: [
            'Arrive in Varanasi. Transfer to your hotel.',
            'Evening visit to the famous Ganga Aarti at Dashashwamedh Ghat.',
            'Dinner: Enjoy local cuisine at a popular restaurant.',
        ],
    },
    {
        day: 2,
        title: 'Varanasi - Temples and Ghats',
        activities: [
            'Early morning boat ride on the Ganges to see the sunrise and ghats.',
            'Visit Kashi Vishwanath Temple, the most famous temple in Varanasi.',
            'Explore Tulsi Manas Mandir and Durga Temple.',
            'Dinner: Dine at a restaurant serving traditional vegetarian dishes.',
        ],
    },
    {
        day: 3,
        title: 'Varanasi - Sarnath',
        activities: [
            'Day trip to Sarnath (about 30 minutes).',
            'Visit Dhamek Stupa and Sarnath Museum, where Buddha gave his first sermon.',
            'Return to Varanasi for a peaceful evening by the ghats.',
            'Dinner: Try street food at the local markets or a fine dining restaurant.',
        ],
    },
    {
        day: 4,
        title: 'Varanasi - Ramnagar Fort',
        activities: [
            'Explore Ramnagar Fort, located on the eastern bank of the Ganges.',
            'Visit the museum inside the fort and learn about the rich history of Varanasi.',
            'Dinner: Relax with a traditional thali meal at a local restaurant.',
        ],
    },
    {
        day: 5,
        title: 'Varanasi - Exploring Old City',
        activities: [
            'Spend the day walking through the narrow lanes of the old city.',
            'Visit Bharat Mata Temple and the historic Banaras Hindu University.',
            'Dinner: Enjoy dinner at a rooftop restaurant overlooking the Ganges.',
        ],
    },
    {
        day: 6,
        title: 'Varanasi - Day Trip to Vindhyachal',
        activities: [
            'Day trip to Vindhyachal (about 2 hours).',
            'Visit Vindhyavasini Temple, one of the Shakti Peethas.',
            'Return to Varanasi for overnight stay.',
            'Dinner: Dine at a restaurant serving local delicacies.',
        ],
    },
    {
        day: 7,
        title: 'Varanasi - Cultural Exploration',
        activities: [
            'Visit the Bharat Kala Bhavan Museum, showcasing artifacts and art from the region.',
            'Attend a classical music or dance performance in the evening.',
            'Dinner: Enjoy a late-night meal at your hotel or a nearby restaurant.',
        ],
    },
    {
        day: 8,
        title: 'Varanasi - Chunar Fort',
        activities: [
            'Day trip to Chunar Fort (about 1.5 hours).',
            'Explore the historic fort and enjoy scenic views of the Ganges.',
            'Return to Varanasi for a peaceful evening by the river.',
            'Dinner: Enjoy dinner at a local restaurant.',
        ],
    },
    {
        day: 9,
        title: 'Varanasi - Shopping and Relaxation',
        activities: [
            'Spend the day shopping for Banarasi silk sarees and handicrafts in the local markets.',
            'Free time for relaxation or a spa session at your hotel.',
            'Farewell dinner featuring traditional Banarasi cuisine.',
        ],
    },
    {
        day: 10,
        title: 'Departure from Varanasi',
        activities: [
            'Free time for last-minute shopping or exploring the ghats.',
            'Transfer to Varanasi Airport or Railway Station for departure.',
        ],
    },
  ];


const testimonials = [
    { name: "John Doe", review: "Goa was a dream! The itinerary was perfect, and we had an amazing time." },
    { name: "Jane Smith", review: "Loved every bit of the trip! Great beaches, great food, and great memories." }
];

const Varanasi = () => {
    return (
        <div className="relative bg-gradient-to-r  from-blue-400 to-purple-500 min-h-screen text-white">
            

            <motion.div className="w-full h-screen flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h1 className="text-6xl font-bold drop-shadow-lg">Explore Varanasi</h1>
                <motion.p className="text-xl mt-4 max-w-2xl drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    Varanasi, one of the world’s oldest living cities, is a vibrant tapestry of culture, history, and spirituality. Situated on the banks of the River Ganges, Varanasi is famous for its ghats, where pilgrims perform rituals and attend the mesmerizing Ganga Aarti. The city is a center for learning and the arts, particularly known for its classical music, silk weaving, and Hindu temples. A visit to Varanasi is an immersive experience in India's cultural and spiritual heritage.
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
                    
                    src="https://www.youtube.com/embed/1udJsv1VcII"
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

export default Varanasi;
