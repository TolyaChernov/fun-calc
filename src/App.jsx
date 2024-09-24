import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const incrementBy5 = () => {
    setCount(count + 5);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementBy10 = () => {
    setCount(count + 10);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <p>Calculator for spend time</p>
      <Display count={count} />
      <div className="claviature">
        <Button click={increment} text={"+"} />
        <Button click={incrementBy5} text={"+5"} />
        <Button click={decrement} text={"-"} />
        <Button click={incrementBy10} text={"+10"} />
        <Button click={increment} text={"++"} />
        <Button click={increment} text={"++"} />
        <Button click={increment} text={"++"} />
        <Button click={reset} text={"reset"} />
      </div>
    </div>
  );
}

export default App;
