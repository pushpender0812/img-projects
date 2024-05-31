import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payments() {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const orderPlaced = () => {
    if (selectedPayment === '') {
      alert("Please select a payment method.");
      return;
    }
    
    alert("Your Order is Placed Successfully");
    navigate('/');
    setTimeout(() => {
      alert("Continue Shopping .....");
    }, 1000);
  };

  return (
    <div className=" p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg mt-24 h-[600px]">
      <p className="text-4xl font-bold mb-6 text-center">Select Payment Option</p>

      <div className="mb-4 mt-10 ">
        <label className="flex items-center">
          <input 
            type="radio" 
            name="payment" 
            className="form-radio h-5 w-5 text-gray-600" 
            onChange={() => setSelectedPayment('cod')} 
          />
          <span className="ml-3 text-2xl">Cash On Delivery</span>
        </label>
      </div>

      <div className="mb-4 mt-10">
        <label className="flex items-center">
          <input 
            type="radio" 
            name="payment" 
            className="form-radio h-5 w-5 text-gray-600" 
            onChange={() => setSelectedPayment('card')} 
          />
          <span className="ml-3 text-2xl">Debit Card/Credit Card</span>
        </label>
        {selectedPayment === 'card' && (
          <div className="mt-4">
            <input 
              type="text" 
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="Card Number" 
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            />
            <input 
              type="date" 
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              value={cardDetails.expiryDate}
              onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
            />
            <input 
              type="text" 
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="CVV" 
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
            />
          </div>
        )}
      </div>

      <div className="mb-4 mt-10 ">
        <label className="flex items-center">
          <input 
            type="radio" 
            name="payment" 
            className="form-radio h-5 w-5 text-gray-600" 
            onChange={() => setSelectedPayment('upi')} 
          />
          <span className="ml-3 text-2xl">UPI</span>
        </label>
        {selectedPayment === 'upi' && (
          <input 
            type="text" 
            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            placeholder="Enter UPI ID" 
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        )}
      </div>

      <div className="mb-4 mt-10">
        <label className="flex items-center">
          <input 
            type="radio" 
            name="payment" 
            className="form-radio h-5 w-5 text-gray-600" 
            onChange={() => setSelectedPayment('netBanking')} 
          />
          <span className="ml-3 text-2xl">Net Banking</span>
        </label>
      </div>

      <div className="text-center">
        <button 
          onClick={orderPlaced} 
          className="mt-10 text-2xl font-extrabold bg-gray-800 text-white w-48 h-16 rounded-xl hover:bg-gray-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Payments;
