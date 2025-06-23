
import Cart from "./component/Cart";
import Header from "./component/Header";
import Main from "./component/Main";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-green-100 min-h-screen">
      <Header />
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>   
    </div>
  );
}

export default App;
