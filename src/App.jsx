import { useState } from "react";
import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  const [shoppingList, setShoppingList] = useState(["Carrots", "Raddish"]);

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          name="add"
        />
        <button className="v__button">Add</button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {shoppingList.length > 0 ? (
          shoppingList.map((item) => {
            return <ShoppingListItem item={item} />;
          })
        ) : (
          <p>No result found</p>
        )}
      </div>
    </div>
  );
}

export default App;
