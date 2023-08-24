import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>You click {count} times</div>
      <button
        onClick={() => {
          setCount((prev) => {
            console.log(prev);
            return ++prev;
          });
        }}
      >
        Click Me!
      </button>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Counter;
