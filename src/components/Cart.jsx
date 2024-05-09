import { useContext } from "react";
import Button from "../Ui/Button";
import Modal from "../Ui/Modal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const totalItemPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userCtx.closeCart();
  }

  return (
    <>
      <Modal open={userCtx.progress === "cart"}>
        <h2>Your Cart</h2>
        <div>
          <p>Item Title - {totalItemPrice}</p>
        </div>
        <div>
          <p>
            <Button onClick={handleCloseCart}>Close</Button>
            <Button>Go to checkout</Button>
          </p>
        </div>
      </Modal>
    </>
  );
}
