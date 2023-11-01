"use client";
import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <p>Count: {count}</p>
    </>
  );
}
