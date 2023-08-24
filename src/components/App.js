import React, { useState } from "react";

const App = () => {
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
    </div>
  );
};

export default App;
