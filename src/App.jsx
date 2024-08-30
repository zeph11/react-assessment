import { useState } from "react";
import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  const [shoppingList, setShoppingList] = useState([]); //state to maintain the shopping list
  const [id, setId] = useState(0); // state to maintain and increament id for each item
  const [item, setItem] = useState(""); //state to capture item from textbox
  const [duplicateitem, setduplicateitem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() !== " ") {
      addItemtoList(item);
    }
    setItem("");
  };

  const addItemtoList = (item) => {
    const checkDeuplicate = shoppingList.some((list) => list.name === item);

    if (checkDeuplicate) {
      setduplicateitem(item);
      return;
    } else {
      setduplicateitem("");
    }

    const newItem = {
      id: id,
      name: item,
    };
    setShoppingList((prev) => [...prev, newItem]);
    setId(id + 1);
  };

  const removeItem = (id) => {
    setShoppingList((prev) => prev.filter((item) => item.id != id));
  };

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          name="additems"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSubmit(e);
            }
          }}
        />
        {item ? (
          <button className="v__button" onClick={handleSubmit}>
            Add
          </button>
        ) : (
          <button className="dis__button" title="Item Fiels is Empty">
            Add
          </button>
        )}
      </div>
      <p
        className={
          duplicateitem ? "text-red-400 flex justify-center" : "invisible"
        }
      >
        The item is already in the list : {duplicateitem}
      </p>
      <div className="v__list-container overflow-y-auto">
        {shoppingList.length > 0 ? (
          shoppingList.map((item, key) => {
            return (
              <ShoppingListItem
                item={item.name}
                key={item.id}
                id={item.id}
                removeItem={removeItem}
              />
            );
          })
        ) : (
          <p className="flex justify-center pt-5">The List is Empty</p>
        )}
      </div>
    </div>
  );
}

export default App;
