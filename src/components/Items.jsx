import { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";

export default function Items() {
  const [loadedItem, setLoaderItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setLoaderItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div>
        <ul className="grid grid-cols-3 w-[90%] p-[1rem] my-[2rem] mx-auto ">
          {loadedItem.map((item) => (
            <ItemList key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
