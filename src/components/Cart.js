import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItemsList from "./CartItemsList";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) =>
        total + (item.card.info.price * (item.quantity || 1)) / 100,
      0
    );

  const handleProceedToCheckout = () => {
    navigate("/payment");
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <div
          className={`max-w-4xl mx-auto rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } transition-colors duration-300`}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-2/3 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Your Cart
                </h2>
                {cartItems.length > 0 && (
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-md transition-colors duration-300"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Your cart is empty
                </p>
              ) : (
                <CartItemsList items={cartItems} />
              )}
            </div>
            <div
              className={`w-full sm:w-1/3 p-6 ${
                isDarkMode
                  ? "border-t sm:border-t-0 sm:border-l border-gray-700"
                  : "border-t sm:border-t-0 sm:border-l border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    Subtotal
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-200" : "text-gray-900"}
                  >
                    ₹{calculateTotal().toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    Tax (10%)
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-200" : "text-gray-900"}
                  >
                    ₹{(calculateTotal() * 0.1).toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    Delivery
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-200" : "text-gray-900"}
                  >
                    ₹5.00
                  </span>
                </div>

                <div
                  className={`border-t pt-4 flex justify-between font-bold text-xl ${
                    isDarkMode
                      ? "border-gray-700 text-gray-100"
                      : "border-gray-200 text-gray-900"
                  }`}
                >
                  <span>Total</span>
                  <span>₹{(calculateTotal() * 1.1 + 5).toFixed(2)}</span>
                </div>

                <button
                  className={`w-full bg-teal-500 text-white py-3 rounded-lg transition-colors duration-300
                    ${
                      cartItems.length === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-teal-600 cursor-pointer"
                    }`}
                  disabled={cartItems.length === 0}
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
