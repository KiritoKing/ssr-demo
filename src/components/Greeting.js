import React from "react";
import { Link } from "react-router-dom";

const Greeting = () => {
  return (
    <div>
      <p>Hello!</p>
      <div>
        <Link to="/counter">To Counter</Link>
        <Link to="/contacts">To Contacts</Link>
      </div>
    </div>
  );
};

export default Greeting;
