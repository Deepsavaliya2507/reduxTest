import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/Slices/CounterSlice";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.counter.value);
  console.log("demo fgdhdjstj", demo);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>{demo}</div>
      <button onClick={() => dispatch(decrement())}>-</button> <br />
    </>
  );
}

export default App;
