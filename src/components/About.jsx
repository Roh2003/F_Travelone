import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">About TravelOne</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="font-bold">TravelOne</span>, your trusted partner in exploring the world! 
          We are a leading tours and travel management company, committed to helping you discover amazing destinations and unforgettable experiences. Whether you're seeking adventure, relaxation, or cultural immersion, TravelOne ensures your journey is seamless, affordable, and filled with excitement.
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Personalized tour packages tailored to your preferences</li>
          <li>Expert guides and travel specialists</li>
          <li>24/7 customer support for a hassle-free experience</li>
          <li>Best-in-class travel deals and discounts</li>
        </ul>
        <p className="text-gray-700 text-lg mb-4">
          At TravelOne, we believe that travel is not just about visiting places—it's about creating lifelong memories. With our extensive network and expertise, we bring you the best the world has to offer, making every trip a unique and enriching experience.
        </p>
        <p className="text-gray-700 text-lg">
          Let’s embark on your next adventure together. <span className="font-bold">TravelOne</span> is here to guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
