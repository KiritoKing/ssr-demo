import React from "react";
import { Link } from "react-router-dom";

const Greeting = () => {
  return (
    <div>
      <p>Hello! Time now is {Date.now().toLocaleString()}</p>
      <Link to="/counter">To Counter</Link>
    </div>
  );
};

export default Greeting;
