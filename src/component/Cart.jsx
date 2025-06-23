import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, emptyCart } from "../redux/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  if (cart.length === 0) {
    return <div className="p-8 text-center">Your cart is empty!</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-lg p-4 rounded-lg"
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1 px-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Color: {item.color}</p>
              <p className="text-gray-600">Price: ₹{item.price}</p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => dispatch(emptyCart())}
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
