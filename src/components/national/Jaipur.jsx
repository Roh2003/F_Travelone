import React from 'react'
import { Link } from 'react-router-dom';

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiOutlineSearch,
  } from "react-icons/ai";

function Jaipur() {

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

    return (
        <>
            <div className='h-screen w-full'>
                <div className="w-full h-screen relative">
                    <img
                        src="images/jaipur.jpg"
                        alt="Jaipur"
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
                    <h1 className="text-5xl font-bold text-black">Explore Jaipur</h1>
                    <div className="border-b-4 border-black w-2/4 mx-auto mt-2"></div>
                </div>

                <div>
                    <div className='absolute top-1/4 w-full h-[450px] z-10'>
                        <p className='absolute left-[50px] text-black text-2xl backdrop-blur-sm text-center'>
                            Jaipur, known as the "Pink City," is a vibrant city in Rajasthan, India, famous for its palaces, forts, and colorful markets. With rich cultural heritage, the city boasts landmarks like the Hawa Mahal, Amber Fort, and City Palace. Jaipur's royal past is reflected in its magnificent architecture, vibrant festivals, and traditional handicrafts. The city offers a blend of historical grandeur, art, and a lively atmosphere, making it a must-visit destination for travelers exploring India.
                        </p>
                    </div>
                </div>

                <div className="mb-6 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold">Watch Our Jaipur Tour Preview</h2>
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

                <div className="p-5 bg-gray-100">
                    <h1 className="text-3xl font-bold text-center mb-5">10-Day Jaipur Tour Plan</h1>
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

export default Jaipur;
