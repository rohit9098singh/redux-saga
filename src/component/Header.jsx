import { PanelLeft, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
const Header = () => {
    const result=useSelector((state)=>state.cartReducer)
    console.log("header data",result)
  return (
    <div className="bg-green-300 shadow-md h-[64px] w-full">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        
       
        <div className="flex items-center gap-2 text-purple-600 font-bold text-xl">
          <PanelLeft className="w-6 h-6" />
          <span>Redux Saga</span>
        </div>

       
        <div className="relative cursor-pointer">
          <ShoppingCart className="w-6 h-6 text-gray-800" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            {result.cart.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
