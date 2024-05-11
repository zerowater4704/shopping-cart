import { useContext } from "react";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import CartContext from "../store/CartContext";
import Modal from "../Ui/Modal";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormat } from "../util/currecyFormat";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const totalItemPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleCloseCheckout() {
    userCtx.closeCheckout();
  }

  return (
    <>
      <Modal open={userCtx.progress === "checkout"}>
        <form>
          <h2>Check Out</h2>
          <p>Total Amount : {currencyFormat.format(totalItemPrice)}</p>
          <Input title="FullName" type="text" id="name" />
          <Input title="E-Mail" type="email" id="email" />
          <Input title="Street" type="text" id="street" />
          <div>
            <Input title="Postal Code" type="text" id="postal-code" />
            <Input title="City" type="text" id="city" />
          </div>
          <div>
            <Button onClick={handleCloseCheckout}>Close</Button>
            <Button>Submit Order</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
