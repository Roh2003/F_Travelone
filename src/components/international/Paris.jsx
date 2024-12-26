import React from 'react';
import { Link } from 'react-router-dom';

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiOutlineSearch,
} from "react-icons/ai";

function Paris() {

    const tourPlan = [
        {
            day: 1,
            title: 'Arrival in Paris',
            activities: [
                'Arrive at Charles de Gaulle Airport. Transfer to your hotel.',
                'Take a leisurely stroll along the Seine River and explore the surroundings.',
                'Dinner: Enjoy French cuisine at a local bistro.',
            ],
        },
        {
            day: 2,
            title: 'Eiffel Tower and Trocadéro',
            activities: [
                'Visit the iconic Eiffel Tower. Option to go up to the second or third floor for panoramic views.',
                'Explore the Trocadéro Gardens for beautiful photos of the Eiffel Tower.',
                'Dinner: Traditional French dinner at a restaurant with a view of the tower.',
            ],
        },
        {
            day: 3,
            title: 'Louvre Museum and Île de la Cité',
            activities: [
                'Spend the morning at the Louvre Museum, home to famous artworks like the Mona Lisa and Venus de Milo.',
                'In the afternoon, explore Île de la Cité, including Notre-Dame Cathedral and Sainte-Chapelle.',
                'Dinner: Dine at a French brasserie near the Seine River.',
            ],
        },
        {
            day: 4,
            title: 'Montmartre and Sacré-Cœur',
            activities: [
                'Visit the bohemian neighborhood of Montmartre, known for its artistic history.',
                'Climb to the Sacré-Cœur Basilica for incredible views of Paris.',
                'Explore the art market at Place du Tertre and enjoy a café on a terrace.',
                'Dinner: Enjoy a French dinner in a Montmartre restaurant.',
            ],
        },
        {
            day: 5,
            title: 'Day Trip to Versailles',
            activities: [
                'Take a day trip to the Palace of Versailles, famous for its stunning gardens and Hall of Mirrors.',
                'Enjoy a guided tour of the palace and the sprawling grounds.',
                'Return to Paris in the evening for dinner.',
                'Dinner: Traditional French meal at a Parisian restaurant.',
            ],
        },
        {
            day: 6,
            title: 'Seine River Cruise and Latin Quarter',
            activities: [
                'Start the day with a scenic cruise on the Seine River, passing landmarks like the Eiffel Tower, Louvre, and Notre-Dame.',
                'Explore the Latin Quarter, known for its lively atmosphere and historic cafés.',
                'Dinner: Dine at a traditional French bistro in the Latin Quarter.',
            ],
        },
        {
            day: 7,
            title: 'Champs-Élysées and Arc de Triomphe',
            activities: [
                'Stroll along the famous Champs-Élysées, with its luxury shops, cafés, and theaters.',
                'Climb to the top of the Arc de Triomphe for amazing views of Paris, including the Eiffel Tower.',
                'Dinner: Dinner at a chic restaurant on the Champs-Élysées.',
            ],
        },
        {
            day: 8,
            title: 'Museums and Art Galleries',
            activities: [
                'Visit the Musée d\'Orsay, known for its impressionist artworks, including pieces by Monet and Van Gogh.',
                'Later, explore modern art at the Centre Pompidou.',
                'Dinner: Dine at a modern French restaurant near the museum district.',
            ],
        },
        {
            day: 9,
            title: 'Le Marais and Shopping',
            activities: [
                'Explore the trendy Le Marais district, known for its boutiques, galleries, and historic buildings.',
                'Spend time shopping for fashion, art, and souvenirs.',
                'Dinner: Enjoy a traditional dinner at a café in Le Marais.',
            ],
        },
        {
            day: 10,
            title: 'Departure from Paris',
            activities: [
                'Free time for last-minute shopping or exploring the local neighborhood.',
                'Transfer to Charles de Gaulle Airport for departure.',
            ],
        },
    ];

    return (
        <>
            <div className='h-screen w-full'>
                <div className="w-full h-screen relative">
                    <img
                        src="images/paris.jpg"
                        alt="Paris"
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
                    <h1 className="text-5xl font-bold text-black">Explore Paris</h1>
                    <div className="border-b-4 border-black w-2/4 mx-auto mt-2"></div>
                </div>

                <div>
                    <div className='absolute top-1/4 w-full h-[450px] z-10'>
                        <p className='absolute left-[50px] text-black text-2xl backdrop-blur-sm text-center'>
                            Paris, the "City of Light," is known for its timeless charm, iconic landmarks, world-class museums, and romantic ambiance. From the Eiffel Tower and Louvre Museum to the chic boutiques and cafés lining the streets, Paris offers a perfect mix of history, culture, fashion, and art. Whether you’re admiring the stunning architecture or indulging in French cuisine, Paris is a city that captures the hearts of all who visit.
                        </p>
                    </div>
                </div>

                <div className="mb-6 p-4 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold">Watch Our Paris Tour Preview</h2>
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

                <div className="p-5 bg-gray-100">
                    <h1 className="text-3xl font-bold text-center mb-5">10-Day Paris Tour Plan</h1>
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

export default Paris;
