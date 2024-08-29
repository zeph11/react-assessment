import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

const App = () => {
  const [value, setValue] = useState(0);
  // const [display, setDisplay] = useState(false);

  return (
    <div className="App">
      <h1>{value}</h1>
      <Child value={value} setValue={setValue} />
      {value < 0 ? (
        <p>Why so negative?</p>
      ) : (
        <p className="display_text">Hidden Text</p>
      )}
    </div>
  );
};

export default App;
