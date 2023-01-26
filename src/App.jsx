import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";

function App() {
  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
        />
        <button className="v__button">Add</button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {/* Map your data here: */}
        <ShoppingListItem />
        <ShoppingListItem />
      </div>
    </div>
  );
}

export default App;
