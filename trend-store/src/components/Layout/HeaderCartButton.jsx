import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { CartContext } from "../Context/CartProvider";
import { useContext } from "react";
const HeaderCartButton = ({ onShowCart }) => {
  const CartCtx = useContext(CartContext);
  const totalItemsINCart = CartCtx.items.reduce((acc, currentItem) => {
    return acc + currentItem.amount;
  }, 0);
  return (
    <button onClick={onShowCart} className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge"> {totalItemsINCart} </span>
    </button>
  );
};

export default HeaderCartButton;
