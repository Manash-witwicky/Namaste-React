import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center m-4 p-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          type="button"
          className="text-black bg-white rounded-md text-sm my-4 px-3 py-3 border border-gray-800
            hover:bg-[#FD7A3F] hover:border-none"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="w-6/12 m-auto">
        {cartItems.length ? (
          <MenuItems items={cartItems} />
        ) : (
          <h1 className="text-center">Please add item to the Cart</h1>
        )}
      </div>
    </>
  );
};

export default Cart;

/**
 * const total = data.reduce((sum, curr) => sum += curr?.card?.info?.price, 0)
 */
