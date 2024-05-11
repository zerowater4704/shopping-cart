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
      <li className="border-2 bg-red-300 m-2 py-4">
        <article className="text-center">
          <img src={item.image} className="w-[100px] h-[100px] inline" />
          <div>
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>{currencyFormat.format(item.price)}</p>
            </div>
          </div>
          <Button onClick={handleAddCart}>Add to Cart</Button>
        </article>
      </li>
    </>
  );
}
