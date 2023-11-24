import "./Cart.css";
import Offcanvas from "../UI/Offcanvas";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
const Cart = ({ hiddenCart }) => {
  /* Aynı ürünlerin sayısını hesaplama  */
  const { items, totalAmount, removeItem, clearAll } = useContext(CartContext);
  return (
    <div>
      <Offcanvas hiddenCart={hiddenCart} />
      <div className="offcanvas">
        <div className="content">
          <div className="cart-head">
            <h2>Sepetim</h2>
            <a onClick={hiddenCart} href="/">
              X
            </a>
          </div>
          <div
            className="total"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {items.map((item, index) => (
              <ul key={index}>
                <li>
                  <span>{item.name} </span>
                </li>
                <li>
                  <span>₺{item.price} </span>
                </li>
                <li>
                  <span>
                    ₺{item.price} x {item.amount}
                  </span>
                </li>
                <button
                  onClick={() => {
                    removeItem(item.id);
                  }}
                  style={{ color: "red", textDecoration: "none" }}
                >
                  X
                </button>
              </ul>
            ))}
          </div>
          <span>Toplam Değer: ₺{totalAmount.toFixed(2)} </span>
          <div className="actions">
            <button className="cart-order">Sipariş Ver</button>
            <button onClick={clearAll} className="cart-clear">
              Temizle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
