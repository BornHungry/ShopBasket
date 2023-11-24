import { createContext, useReducer } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const reducerAction = {
    items1: [],
    totalAmount1: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const existingCartItemIndex = state.items1.findIndex(
          (item) => item.id === action.item.id
        );

        let updateItems = [...state.items1];
        if (existingCartItemIndex !== -1) {
          updateItems[existingCartItemIndex] = {
            ...state.items1[existingCartItemIndex],
            amount:
              state.items1[existingCartItemIndex].amount + action.item.amount,
          };
        } else {
          updateItems = [...state.items1, action.item];
        }

        return {
          items1: updateItems,
          totalAmount1:
            state.totalAmount1 + action.item.price * action.item.amount,
        };
      case "REMOVE":
        const filtered = state.items1.filter((item) => item.id !== action.id);
        const itemToRemove = state.items1.find((item) => item.id === action.id);
        return {
          items1: filtered,
          totalAmount1:
            state.totalAmount1 - itemToRemove.price * itemToRemove.amount,
        };
      case "CLEAER":
        return reducerAction;
      default:
        return state;
    }
  };
  const [cartList, cartListAction] = useReducer(reducer, reducerAction);
  const cartContext = {
    items: cartList.items1,
    totalAmount: cartList.totalAmount1,
    addItem: (item) => {
      cartListAction({ type: "ADD", item });
    },
    removeItem: (id) => {
      console.log(id);
      cartListAction({ type: "REMOVE", id });
    },
    clearAll: () => {
      cartListAction({ type: "CLEAER" });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartProvider;
