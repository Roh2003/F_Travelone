import React from 'react'
import { Link } from 'react-router-dom';

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiOutlineSearch,
  } from "react-icons/ai";

function Goa() {

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

    return (
        <>
            <div className='h-screen w-full'>
                <div className="w-full h-screen relative">
                    <img
                        src="images/goa.jpg"
                        alt="Goa"
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
                    <h1 className="text-5xl font-bold text-black">Explore Goa</h1>
                    <div className="border-b-4 border-black w-2/4 mx-auto mt-2"></div>
                </div>

                <div>
                    <div className='absolute top-1/4 w-full h-[450px] z-10'>
                        <p className='absolute left-[50px] text-black text-2xl backdrop-blur-sm text-center'>
                            Goa, India’s sunshine state, is known for its beautiful beaches, vibrant nightlife, and rich Portuguese heritage. From the bustling markets and historic churches of North Goa to the serene and untouched beaches of South Goa, the state offers a perfect blend of relaxation and adventure. Explore Goa’s stunning coastline, indulge in water sports, visit spice plantations, and experience the unique Goan culture, which is a mix of Indian and Portuguese influences.
                        </p>
                    </div>
                </div>

                <div className="mb-6 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold">Watch Our Goa Tour Preview</h2>
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

                <div className="p-5 bg-gray-100">
                    <h1 className="text-3xl font-bold text-center mb-5">10-Day Goa Tour Plan</h1>
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

export default Goa;
