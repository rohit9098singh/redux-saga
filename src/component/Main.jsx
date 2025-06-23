import { addToCart, emptyCart, removeFromCart } from "../redux/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../redux/productAction";
const product = {
  id: 1,
  name: "iPhone 15",
  price: 100000,
  color: "Red",
};
function Main() {
  const dispatch = useDispatch();
  const result=useSelector((state)=>state.productReducer)
  console.log("data in main component",result)
  return (
    <div className="p-8  flex justify-center gap-4">
      <button
        className="px-5 py-2 rounded-md bg-green-500 font-semibold cursor-pointer"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
      <button
        className="px-5 py-2 rounded-md bg-green-500 font-semibold cursor-pointer"
        onClick={() => dispatch(removeFromCart(product.id))}
      >
        Remove from Cart
      </button>
      <button
        className="px-5 py-2 rounded-md bg-green-500 font-semibold cursor-pointer"
        onClick={() => dispatch(emptyCart(product.id))}
      >
        Empty Cart
      </button>
      <button
        className="px-5 py-2 rounded-md bg-green-500 font-semibold cursor-pointer"
        onClick={() => dispatch(ProductList())}
      >
        Show Products
      </button>
    </div>
  );
}

export default Main;
