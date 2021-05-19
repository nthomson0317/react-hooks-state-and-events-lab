import React, { useState } from "react";

function Item({ name, category }) {

  let [isInCart, setIsInCart] = useState(false)

  let handleClick = () => {
    setIsInCart(isInCart = !isInCart)
} 

if (isInCart){
  return (
    <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}
else {
  return (
  <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
        )
    }
}

export default Item;
