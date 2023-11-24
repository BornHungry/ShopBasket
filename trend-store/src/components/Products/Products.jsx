import React, { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import productData from "../../../productData";

const Products = () => {
  const { addItem, items } = useContext(CartContext);
  return (
    <div>
      {productData &&
        productData.map((item, index) => (
          <ul key={index}>
            <li>{item.name} </li>
            <li>{item.description} </li>
            <li>{item.price}</li>
            <button
              onClick={() => {
                addItem(item);
              }}
            >
              Sepete Ekle
            </button>
          </ul>
        ))}
    </div>
  );
};

export default Products;
