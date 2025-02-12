import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        userId: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        numTravelers: 1,
        specialRequests: '',
        emergencyContact: '',
        promoCode: '',
        userType: 'CUSTOMER',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        upiId: ''
    });

    const showPaymentFields = (e) => {
        setPaymentMethod(e.target.value);
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
            toast.success('Ticket booked successfully!');
            setFormData({
                name: '',
                userId: '',
                email: '',
                password: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                numTravelers: 1,
                specialRequests: '',
                emergencyContact: '',
                promoCode: '',
                userType: 'CUSTOMER',
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                upiId: ''
            });
            
        } catch (error) {
            console.error('Error:', error);
            toast.error('Booking failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center mt-16 h-full bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen p-5">
            <nav className="w-full absolute top-0 p-5 flex justify-between text-white z-10">
                <div>
                    <h1 className="text-3xl font-bold cursor-pointer">Travelone Payments</h1>
                </div>
            </nav>
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-2xl w-[600px] max-w-full">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Booking Details</h2>
                
                <input type="text" name="name" placeholder="Full Name" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                <input type="text" name="userId" placeholder="User ID" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email Address" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                <input type="password" name="password" placeholder="Password" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                <input type="tel" name="phone" placeholder="Phone Number" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                
                <input type="text" name="address" placeholder="Street Address" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                <div className="flex gap-2">
                    <input type="text" name="city" placeholder="City" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                    <input type="text" name="state" placeholder="State" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                    <input type="text" name="zip" placeholder="ZIP Code" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                </div>
                
                <input type="number" name="numTravelers" placeholder="Number of Travelers" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                <textarea name="specialRequests" placeholder="Special Requests" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange}></textarea>
                <input type="text" name="emergencyContact" placeholder="Emergency Contact Name & Number" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                <input type="text" name="promoCode" placeholder="Promo Code (Optional)" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} />
                
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Details</h2>
                <select name="paymentMethod" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={showPaymentFields} required>
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="upi">UPI</option>
                </select>

                {paymentMethod === 'creditCard' && (
                    <>
                        <input type="text" name="cardNumber" placeholder="Card Number" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                        <input type="month" name="expiryDate" placeholder="Expiry Date" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                        <input type="text" name="cvv" placeholder="CVV" className="form-control w-full p-3 mb-3 border rounded-lg shadow-sm" onChange={handleInputChange} required />
                    </>
                )}

                {paymentMethod === 'upi' && (
                    <>
                        <label className="block font-bold mb-2 text-gray-800">Scan to Pay</label>
                        <img src="images/qr.jpg" alt="UPI" className="mx-auto mb-4 w-48 h-48" />
                    </>
                )}

                <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg w-full shadow-lg transition-all">
                    Complete Booking
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Payment;
