import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Button from "../Ui/Button";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  function handleModalOpen() {
    userCtx.showCart();
  }

  const totalItemNumber = cartCtx.items.reduce((totalItem, item) => {
    return totalItem + item.quantity;
  }, 0);

  return (
    <>
      <div>
        <header>
          <h1>React Shop</h1>
        </header>
        <div>
          <Button onClick={handleModalOpen}>Cart ({totalItemNumber})</Button>
        </div>
      </div>
    </>
  );
}
