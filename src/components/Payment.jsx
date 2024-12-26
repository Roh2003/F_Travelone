import React, { useState } from 'react';

const Payment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        userId: '',
        email: '',
        password: '',
        userType: 'CUSTOMER',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        upiId: ''
    });
    const sendConfirmationEmail = async () => {
        const tourDetails = `New York City 10-day tour\nDay 1: Arrival in NYC...\n[Add your detailed itinerary here]`;
    
        const data = { 
          email, 
          name, 
          tourDetails 
        };
    
        try {
          const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            alert('Confirmation email sent successfully!');
          } else {
            alert('Error sending email');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      

    const showPaymentFields = (e) => {
        const selectedMethod = e.target.value;
        setPaymentMethod(selectedMethod);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8880/ecomm/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
       <div className="flex justify-center items-center my-7 h-full bg-white">
        <nav className="w-full absolute top-0 p-5 flex justify-between text-black z-10">
        <div>
          <h1 className="text-3xl font-bold cursor-pointer">Travelone Payments </h1>
        </div>
        </nav>
            <form
                id="signupForm"
                onSubmit={handleSubmit}
                className="bg-slate-400 p-10 rounded-lg shadow-lg w-[500px]"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-bold">Name</label>
                    <input
                        type="text"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="userId" className="block mb-2 font-bold">User ID</label>
                    <input
                        type="text"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="userId"
                        name="userId"
                        value={formData.userId}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-bold">Email address</label>
                    <input
                        type="email"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <div id="emailHelp" className="text-sm text-gray-600">
                        We'll never share your email with anyone else.
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 font-bold">Password</label>
                    <input
                        type="password"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        minLength="8"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="dates" className="block mb-2 font-bold">Select Date</label>
                    <input
                        type="date"
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="dates"
                        name="date"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="userType" className="block mb-2 font-bold">User Type</label>
                    <select
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="userType"
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="CUSTOMER">Customer</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="paymentMethod" className="block mb-2 font-bold">Payment Method</label>
                    <select
                        className="form-control w-full p-2 border border-gray-300 rounded"
                        id="paymentMethod"
                        name="paymentMethod"
                        onChange={(e) => {
                            handleInputChange(e);
                            showPaymentFields(e);
                        }}
                        required
                    >
                        <option value="" disabled selected>Select your payment method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="upi">UPI</option>
                    </select>
                </div>

                {paymentMethod === 'creditCard' && (
                    <div id="cardFields">
                        <h2 className="font-bold mb-4">Credit Card Details</h2>
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block mb-2 font-bold">Credit Card Number</label>
                            <input
                                type="text"
                                className="form-control w-full p-2 border border-gray-300 rounded"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                placeholder="1234 5678 9012 3456"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expiryDate" className="block mb-2 font-bold">Expiration Date</label>
                            <input
                                type="month"
                                className="form-control w-full p-2 border border-gray-300 rounded"
                                id="expiryDate"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cvv" className="block mb-2 font-bold">CVV</label>
                            <input
                                type="text"
                                className="form-control w-full p-2 border border-gray-300 rounded"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                placeholder="123"
                            />
                        </div>
                    </div>
                )}

                {paymentMethod === 'upi' && (
                    <div id="upiFields">
                        <h2 className="font-bold mb-4">UPI Details</h2>
                        <div className="mb-4">
                            <label htmlFor="upiId" className="block mb-2 font-bold">UPI ID</label>
                            <img src="images/qr.jpg" alt="UPI" className="mx-auto" width="300" height="300" />
                        </div>
                    </div>
                )}

                <button
                    onClick={() => alert('Your package is booked successfully')}
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
        </>
    );
};

export default Payment;
