import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

const App = () => {
  const [value, setValue] = useState(-5);
  // const [display, setDisplay] = useState(false);

  return (
    <div className="App">
      <h1>{value}</h1>
      <Child value={value} setValue={setValue} />
      {value < 0 ? <p>Why so negative?</p> : <></>}
    </div>
  );
};

export default App;
