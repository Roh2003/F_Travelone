import React from 'react'
import { Link } from 'react-router-dom';

import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiOutlineSearch,
  } from "react-icons/ai";

function Kashmir() {

    
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


    return (
        <>
        <div className='h-screen w-full bg-'>
            <div className="w-full h-screen relative  ">
            <img
            src=""
            alt=""
            className="w-full h-full object-cover opacity-70"
            />
            </div>
            <nav className="w-full absolute backdrop-blur-[3px] top-0 p-4 flex justify-between text-black z-10  ">


                <div>
                <h1 className="text-3xl text-black font-bold cursor-pointer">Travelone</h1>
                </div>

                <div>
                <ul className="flex space-x-5 font-bold cursor-pointer text-gray-300">
                    <li className="text-black hover:text-white hover:bottom-b">HOME</li>
                    <li className="text-black hover:text-white hover:bottom-b">ABOUT US</li>
                    <li className="text-black hover:text-white hover:bottom-b">CONTACT US</li>
                    <li className="text-black hover:text-white hover:bottom-b">HELP</li>
                </ul>

                
                </div>
            </nav>

            <div className="absolute top-[70px] w-full text-center z-10">
            <h1 className="text-5xl font-bold text-black">Explore Kashmir</h1>
            <div className="border-b-4 border-black w-2/4 mx-auto mt-2"></div>
            </div>


            <div>
                <div className='absolute top-1/4 w-full h-[450px]  z-10  '> 
                <p className='absolute left-[50px] text-black text-2xl backdrop-blur-sm text-center' >
                Kashmir, known as "Paradise on Earth," is a breathtaking region in northern India, famed for its majestic Himalayan mountains, lush valleys, and pristine lakes like Dal and Wular. With its diverse seasons, from snow-covered winters to vibrant springs, Kashmir offers unparalleled natural beauty. Popular destinations include Srinagar, with its houseboats and Mughal gardens, Gulmarg for skiing, and Pahalgam for serene landscapes. Rich in culture, Kashmir is celebrated for its handicrafts, delicious cuisine like Rogan Josh and Wazwan, and spiritual significance with sites like Amarnath. Its stunning scenery and warm hospitality make it a must-visit destination.

                </p>
                    
                </div>
                
            </div>

            <div className="mb-6 p-4 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold">Watch Our Kashmir Tour Preview</h2>
                <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/Qipxi1Qn8iE"

// Replace with your video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
             </div>

            

            <div className="p-5 bg-gray-100">
                <h1 className="text-3xl font-bold text-center mb-5">10-Day Kashmir Tour Plan</h1>
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

            <div className='flex justify-center align-center'><button className='bg-black rounded-md text-white text-2xl p-2'><Link to="/payment">Book Tour</Link></button></div>

            

  






            </div>     
        </>
    )
}

export default Kashmir
