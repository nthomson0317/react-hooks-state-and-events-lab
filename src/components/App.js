import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);


  let [isToggleOn, setIsToggleOn] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  let handleClick = () => {
    setIsToggleOn(isToggleOn = !isToggleOn)
} 

if (isToggleOn) {
  return (<div className="App dark">
  <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  
  )
  
}
else {

 return (<div className="App light">
    <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Light Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
      )
  }

}

export default App;
