import React, { useState } from 'react';

const HelpAndFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log('Feedback Submitted:', formData);
    alert('Thank you for your feedback!');
  };

  return (
    <div className="bg-gray-100 mt-16 min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-3xl  mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Help & Feedback</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Need help or want to share your feedback? We're always here to listen and improve your experience at TravelOne!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="feedback">Feedback or Issue</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Contact for Assistance</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Email:</strong> help@travelone.com
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-lg text-gray-700">
            <strong>Address:</strong> 123 Help St, Support City, World 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpAndFeedback;
