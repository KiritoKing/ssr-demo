import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../store/slices/Counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>You click {count} times</div>
      <button onClick={() => dispatch(increment())}>Click Me!</button>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Counter;
