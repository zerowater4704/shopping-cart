import { currencyFormat } from "../util/currecyFormat";

export default function ItemList({ item }) {
  return (
    <>
      <li>
        <article>
          <img src={item.image} />
          <div>
            <p>
              <h2>{item.title}</h2>
              <p>{currencyFormat.format(item.price)}</p>
            </p>
          </div>
          <button>Add to Cart</button>
        </article>
      </li>
    </>
  );
}
