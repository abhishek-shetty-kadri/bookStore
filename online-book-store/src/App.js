import "./App.scss";

import ShowBooks from "./BookStore/ShowBooks/ShowBooks";
import { observer } from "mobx-react-lite";
import Cart from "./BookStore/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./BookStore/CartPage";

function App() {
  return (
    <div className="background">
      
      <Router>
      <Cart />
        <Routes>
        
          <Route path="/" element={<ShowBooks/>} />
          <Route path="cart" element={<CartPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default observer(App);
