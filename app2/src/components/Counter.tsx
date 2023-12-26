import React, { useState } from "react";
import "./button.css";

export interface CounterProps {
}

const Counter = ({}: CounterProps) => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <button className="btn1" onClick={clickHandler}>Increment</button>
      <span>Count : {count}</span></>
  )
}

export default Counter;
