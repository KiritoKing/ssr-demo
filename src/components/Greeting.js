import React from "react";
import { Link } from "react-router-dom";

const Greeting = () => {
  return (
    <div>
      <p>Hello!</p>
      <Link to="/counter">To Counter</Link>
    </div>
  );
};

export default Greeting;
