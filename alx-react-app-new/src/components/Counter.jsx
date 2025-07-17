import { useState } from "react";
function counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Current Count: {count}</p>
    </div>
  );
}
export default counter;
// This code defines a simple counter component in React.
// It uses the useState hook to manage the count state.
