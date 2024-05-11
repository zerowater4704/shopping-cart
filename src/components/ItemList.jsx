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
      <li className="border-2  border-orange-200 m-2 py-4 overflow-hidden text-center shadow-sm">
        <article className="h-full flex flex-col items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-[100px] h-[100px] "
          />
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p>{currencyFormat.format(item.price)}</p>
          </div>
          <Button onClick={handleAddCart}>Add to Cart</Button>
        </article>
      </li>
    </>
  );
}
