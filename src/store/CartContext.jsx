import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updateItems = [...state.items];
    if (cartItemIndex > -1) {
      const cartItem = state.items[cartItemIndex];
      const updateItem = {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
      updateItems[cartItemIndex] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updateItems = [...state.items];
    if (cartItemIndex === 1) {
      updateItems.splice(cartItemIndex, 1);
    } else {
      const cartItem = updateItems[cartItemIndex];
      const updateItem = {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };

      updateItems[cartItemIndex] = updateItem;
    }
    return { ...state, items: updateItems };
  }
}

export function CartContextProvide({ children }) {
  const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
