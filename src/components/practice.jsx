import React, { useState } from "react";

const trips = [
  { id: 1, title: "Taj Mahal, Agra", price: 9999, category: "national", description: "A timeless symbol of love.", days: "9 days", rating: 4.8 },
  { id: 2, title: "Jaipur, Rajasthan", price: 7999, category: "national", description: "The Pink City with majestic forts.", days: "7 days", rating: 4.1 },
  { id: 3, title: "Goa", price: 4999, category: "national", description: "India’s beach paradise.", days: "5 days", rating: 4.8 },
  { id: 4, title: "Kerala Backwaters", price: 8999, category: "national", description: "A tranquil journey through Kerala.", days: "15 days", rating: 4.8 },
  { id: 5, title: "Paris, France", price: 12999, category: "international", description: "The City of Lights.", days: "5 days", rating: 4.9 },
  { id: 6, title: "New York, USA", price: 15999, category: "international", description: "The Big Apple.", days: "7 days", rating: 4.7 },
];

const TripPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("national"); // Default to national trips

  // Filter trips based on selected category
  const filteredTrips = trips.filter(trip => trip.category === selectedCategory);

  return (
    <div className="trip-container">
      <div className="buttons">
        {/* Buttons to toggle between national and international */}
        <button
          className={`btn ${selectedCategory === "national" ? "active" : ""}`}
          onClick={() => setSelectedCategory("national")}
        >
          National
        </button>
        <button
          className={`btn ${selectedCategory === "international" ? "active" : ""}`}
          onClick={() => setSelectedCategory("international")}
        >
          International
        </button>
      </div>

      {/* Display the filtered trips */}
      <div className="trip-cards">
        {filteredTrips.map((trip) => (
          <div key={trip.id} className="card">
            <h3>{trip.title}</h3>
            <p>{trip.description}</p>
            <p>{trip.days} - {trip.price} /-Rs</p>
            <p>Rating: {trip.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripPage;
