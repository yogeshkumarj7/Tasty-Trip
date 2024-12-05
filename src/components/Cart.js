import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItemsList from "./CartItemsList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) =>
        total + (item.card.info.price * (item.quantity || 1)) / 100,
      0
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex  min-h-screen flex-grow ">
      <div className="w-2/3 pr-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          {cartItems.length > 0 && (
            <button
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-md"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <CartItemsList items={cartItems} />
        )}
      </div>

      <div className="w-1/3 pl-6 border-l border-gray-200">
        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">
              ₹{calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (10%)</span>
            <span className="font-semibold">
              ₹{(calculateTotal() * 0.1).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery</span>
            <span className="font-semibold">₹5.00</span>
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>₹{(calculateTotal() * 1.1 + 5).toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
