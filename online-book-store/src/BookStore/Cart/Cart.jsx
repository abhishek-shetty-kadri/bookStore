import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreProvider } from "../..";
import "./Cart.scss";

const Cart = () => {
  
  
  const {cartStore}=useContext(RootStoreProvider)
  return (
    <div className="cart-wrapper">
      <button >Cart<span>{cartStore.cart.length}</span></button>
    </div>
  );
};

export default observer(Cart);
