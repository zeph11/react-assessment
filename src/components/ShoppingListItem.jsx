import { useState } from "react";
import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = (props) => {
  const [completed, setCompelted] = useState(false);

  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        className="mr-2 cursor-pointer "
        onClick={() => setCompelted((prev) => !prev)}
      />
      <h3
        className={completed ? "flex-1 text-gray-600 line-through " : "flex-1"}
      >
        {props.item}
      </h3>

      <button
        className={classes.removeButton}
        onClick={() => props.removeItem(props.id)}
      >
        x
      </button>
    </div>
  );
};
