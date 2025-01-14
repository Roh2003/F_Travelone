import React from 'react'
import { Link } from 'react-router-dom';

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiOutlineSearch,
  } from "react-icons/ai";

function Taj() {

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

    return (
        <>
            <div className='h-screen w-full'>
                <div className="w-full h-screen relative">
                    <img
                        src="images/taj.jpg"
                        alt="Agra"
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
                    <h1 className="text-5xl font-bold text-black">Explore Agra</h1>
                    <div className="border-b-4 border-black w-2/4 mx-auto mt-2"></div>
                </div>

                <div>
                    <div className='absolute top-1/4 w-full h-[450px] z-10'>
                        <p className='absolute left-[50px] text-black text-2xl backdrop-blur-sm text-center'>
                            Agra, home to the iconic Taj Mahal, is one of India's most visited tourist destinations. This city is rich in Mughal history, with UNESCO World Heritage Sites such as the Agra Fort and Fatehpur Sikri. Agra offers a journey through magnificent architecture, traditional handicrafts, and flavorful Mughlai cuisine. It’s a city where history and culture blend to create an unforgettable travel experience.
                        </p>
                    </div>
                </div>

                <div className="mb-6 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold">Watch Our Agra Tour Preview</h2>
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

                <div className="p-5 bg-gray-100">
                    <h1 className="text-3xl font-bold text-center mb-5">10-Day Agra Tour Plan</h1>
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

export default Taj;
