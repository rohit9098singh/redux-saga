import { useState } from "react";
import "./App.css";
import { addToCart } from "./redux/cartAction";
import { useDispatch } from "react-redux";
import Header from "./component/Header";
import Main from "./component/Main";
function App() {
  const dispatch = useDispatch();
  const product = {
    name: "I phone",
    type: "mobile",
    price: 100000,
    color: "red",
  };
  return (
    <div className="bg-green-100 min-h-screen">
      <Header />
      <Main/>
    </div>
  );
}

export default App;
