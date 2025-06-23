import { addToCart, emptyCart, removeFromCart } from "../redux/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();

  // Redux se productReducer se data uthaya
  const result = useSelector((state) => state.productReducer);
  const products = result.products || [];

  // Initial mount par products fetch karo
  useEffect(() => {
    dispatch(ProductList());
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <button
          onClick={() => dispatch(emptyCart())}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200"
        >
          Empty Cart
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.category}</p>
              <p className="text-md font-bold mt-2">₹{item.price}</p>
              <p className="text-sm text-gray-500">Color: {item.color}</p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
