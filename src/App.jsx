import { useState, useEffect } from "react";
import axios from "axios";

function Shop() {
  const [loadedShop, setLoadedShop] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchShop() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setLoadedShop(response.data); // 取得したデータを状態に設定
      } catch (error) {
        console.error(error);
        setError("Failed to load data"); // エラーを状態に設定してユーザーに通知
      }
    }

    fetchShop();
  }, []);

  // データのロード中またはエラーが発生した場合の表示を追加
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!loadedShop.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Shop Items</h1>
      <ul>
        {loadedShop.map((item) => (
          <li key={item.id}>
            <img src={item.image} />
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
