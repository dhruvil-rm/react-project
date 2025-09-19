import { useState } from "react";
import Item from "./item";

const Fooditmes = ({ items }) => {

  let [ActiveItems, setActive] = useState([]);

  let onBuyButton = (items, event) => {
    let newItems = [...ActiveItems, items]
    setActive(newItems)
  }

  return (
    <ul className="list-group">
      {items.map(items =>
        <Item key={items} fooditmes={items}
          Bought={ActiveItems.includes(items)}
          handleBuyButton={(event) => onBuyButton(items, event)}></Item>
      )}
    </ul>
  );
}

export default Fooditmes;