import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "../src/components/Context/CartProvider";
function App() {
  const [basketsProduct, setBasketsProduct] = useState([]);
  const [cartISShow, setCartIsShow] = useState(false);

  const onShowCart = () => {
    setCartIsShow(true);
    document.body.style.overflow = "hidden";
  };
  const hiddenCart = (e) => {
    e.preventDefault();
    setCartIsShow(false);
    document.body.style.overflow = "auto";
  };
  return (
    <CartProvider>
      {cartISShow && <Cart hiddenCart={hiddenCart} />}
      <Header onShowCart={onShowCart} />
      <Hero />
      <Products />
    </CartProvider>
  );
}

export default App;
