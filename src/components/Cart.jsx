import { useContext } from "react";
import Button from "../Ui/Button";
import Modal from "../Ui/Modal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";
import { currencyFormat } from "../util/currecyFormat";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const totalItemPrice = cartCtx.items.reduce((totalPrice, item) => {
    console.log(item);
    return totalPrice + item.price * item.quantity;
  }, 0);

  function handleCloseCart() {
    userCtx.closeCart();
  }

  function handleShowCheckout() {
    userCtx.showCheckout();
  }

  return (
    <>
      <Modal
        open={userCtx.progress === "cart"}
        onClose={userCtx.progress === "cart" ? handleCloseCart : null}
      >
        <h2>Your Cart</h2>
        <div>
          <p>Item Title - {currencyFormat.format(totalItemPrice)}</p>
        </div>
        <div>
          <p>
            <Button onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length > 0 ? (
              <Button onClick={handleShowCheckout}>Go to checkout</Button>
            ) : null}
          </p>
        </div>
      </Modal>
    </>
  );
}
