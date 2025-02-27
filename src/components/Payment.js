import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handlePayment = () => {
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
          dispatch(clearCart());
          navigate("/");
        }, 2000);
      },
    });
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen p-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {paymentSuccess ? (
        <div
          className={`p-8 shadow-lg rounded-lg max-w-md w-full text-center transition-colors duration-300 ${
            isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-green-600">
            🎉 Payment Successful! 🎉
          </h2>
          <p
            className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Thank you for your payment. You will be redirected shortly.
          </p>
        </div>
      ) : (
        <div
          className={`p-8 shadow-lg rounded-lg max-w-md w-full transition-colors duration-300 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-6 text-center ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Payment
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="cardNumber"
                className={`block ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-green-500"
                }`}
                placeholder="1234 5678 9012 3456"
                autoComplete="off"
                maxLength="16"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label
                  htmlFor="expiry"
                  className={`block ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-green-500"
                  }`}
                  placeholder="MM/YY"
                  autoComplete="off"
                  maxLength="5"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className={`block ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-green-500"
                  }`}
                  placeholder="123"
                  autoComplete="off"
                  maxLength="3"
                />
              </div>
            </div>
            <button
              type="button"
              className={`w-full py-3 rounded-lg transition mt-4 ${
                isDarkMode
                  ? "bg-amber-500 hover:bg-amber-600 text-gray-900"
                  : "bg-teal-500 hover:bg-teal-600 text-white"
              }`}
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
        className="mt-20"
        theme={isDarkMode ? "dark" : "light"}
      />
    </div>
  );
};

export default Payment;
