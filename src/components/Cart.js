import { useDispatch, useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div>Cart</div>
      <div>
        <button
          className="bg-red-500 font-bold p-2 rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div>
        <CategoryList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
