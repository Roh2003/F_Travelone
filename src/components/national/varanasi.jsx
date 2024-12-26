import React from 'react'
import { Link } from 'react-router-dom';

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiOutlineSearch,
  } from "react-icons/ai";

function Varanasi() {

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

    return (
        <>
            <div className='h-screen w-full'>
                <div className="w-full h-screen relative">
                    <img
                        src="images/varanasi.jpg"
                        alt="Varanasi"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>

                <nav className="w-full absolute backdrop-blur-[3px] top-0 p-4 flex justify-between text-black z-10">
                    <div>
                        <h1 className="text-3xl text-black font-bold cursor-pointer">Travelone</h1>
                    </div>

                    <div>
                        <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
                            <li className="text-black hover:text-white">HOME</li>
                            <li className="text-black hover:text-white">ABOUT US</li>
                            <li className="text-black hover:text-white">CONTACT US</li>
                            <li className="text-black hover:text-white">HELP</li>
                        </ul>
                    </div>
                </nav>

                <div className="absolute top-[70px] w-full text-center z-10">
                    <h1 className="text-5xl font-bold text-black">Explore Varanasi</h1>
                    <div className="border-b-4 border-black w-2/4 mx-auto mt-2"></div>
                </div>

                <div>
                    <div className='absolute top-1/4 w-full h-[450px] z-10'>
                        <p className='absolute left-[50px] text-black text-2xl backdrop-blur-sm text-center'>
                            Varanasi, one of the world’s oldest living cities, is a vibrant tapestry of culture, history, and spirituality. Situated on the banks of the River Ganges, Varanasi is famous for its ghats, where pilgrims perform rituals and attend the mesmerizing Ganga Aarti. The city is a center for learning and the arts, particularly known for its classical music, silk weaving, and Hindu temples. A visit to Varanasi is an immersive experience in India's cultural and spiritual heritage.
                        </p>
                    </div>
                </div>

                <div className="mb-6 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold">Watch Our Varanasi Tour Preview</h2>
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

                <div className="p-5 bg-gray-100">
                    <h1 className="text-3xl font-bold text-center mb-5">10-Day Varanasi Tour Plan</h1>
                    {tourPlan.map((dayInfo) => (
                        <div key={dayInfo.day} className="mb-6 p-4 bg-white shadow-md rounded-md">
                            <h2 className="text-2xl font-semibold">Day {dayInfo.day}: {dayInfo.title}</h2>
                            <ul className="list-disc ml-5 mt-2">
                                {dayInfo.activities.map((activity, index) => (
                                    <li key={index} className="mt-1">{activity}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center align-center'>
                    <button className='bg-black rounded-md text-white text-2xl p-2'>
                        <Link to="/payment">Book Tour</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Varanasi;
