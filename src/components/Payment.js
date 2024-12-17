import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Added Toastify for notifications
import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect to home
import { useDispatch } from "react-redux"; // Import useDispatch to use Redux actions
import { clearCart } from "../utils/cartSlice"; // Import clearCart action

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch for Redux actions

  const handlePayment = () => {
    // Check for valid card number (16 digits), expiry (MM/YY) format, and 3-digit CVV
    const cardNumberPattern = /^\d{16}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    const cvvPattern = /^\d{3}$/;

    if (!cardNumberPattern.test(cardNumber)) {
      toast.error("Please enter a valid 16-digit card number", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if (!expiryPattern.test(expiry)) {
      toast.error("Please enter a valid expiry date in MM/YY format", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if (!cvvPattern.test(cvv)) {
      toast.error("Please enter a valid 3-digit CVV", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    toast.success("Payment Successful!", {
      position: "top-center",
      autoClose: 2000,
      onClose: () => {
        setPaymentSuccess(true);
        setTimeout(() => {
          dispatch(clearCart()); // Clear the cart using Redux action
          navigate("/"); // Redirect to home after 2 seconds
        }, 2000);
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {paymentSuccess ? (
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-600">
            🎉 Payment Successful! 🎉
          </h2>
          <p className="text-gray-700 mb-4">
            Thank you for your payment. You will be redirected shortly.
          </p>
        </div>
      ) : (
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="1234 5678 9012 3456"
                autoComplete="off"
                maxLength="16"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label htmlFor="expiry" className="block text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="MM/YY"
                  autoComplete="off"
                  maxLength="5"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="123"
                  autoComplete="off"
                  maxLength="3"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition mt-4"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </form>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="mt-12" // Move the toaster below the navbar for better visibility
      />
    </div>
  );
};

export default Payment;
