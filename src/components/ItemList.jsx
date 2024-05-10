import { useContext } from "react";
import Button from "../Ui/Button";
import { currencyFormat } from "../util/currecyFormat";
import CartContext from "../store/CartContext";

export default function ItemList({ item }) {
  const cartCtx = useContext(CartContext);

  function handleAddCart() {
    cartCtx.addItem(item);
  }

  return (
    <>
      <li>
        <article>
          <img src={item.image} className="w-[200px] h-[200px]" />
          <div>
            <div>
              <h2>{item.title}</h2>
              <p>{currencyFormat.format(item.price)}</p>
            </div>
          </div>
          <Button onClick={handleAddCart}>Add to Cart</Button>
        </article>
      </li>
    </>
  );
}
