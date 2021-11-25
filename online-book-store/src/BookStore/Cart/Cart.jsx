import { observer } from "mobx-react-lite";
import  useStore  from "../../store/rootStore";

import "./Cart.scss";

const Cart = () => {
  
  
  const {cartStore}=useStore
  return (
    <div className="cart-wrapper">
      <button >Cart<span>{cartStore.cart.length}</span></button>
    </div>
  );
};

export default observer(Cart);
