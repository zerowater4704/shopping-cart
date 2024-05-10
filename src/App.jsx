import Header from "./components/Header";
import Items from "./components/Items";
import Cart from "./components/Cart";
import { CartContextProvide } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Checkout from "./components/Checkout";

function Shop() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvide>
          <Header />
          <Items />
          <Cart />
          <Checkout />
        </CartContextProvide>
      </UserProgressContextProvider>
    </>
  );
}

export default Shop;
