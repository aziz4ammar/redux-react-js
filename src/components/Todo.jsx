import React from "react";
import { useDispatch } from "react-redux";
import { comp, del } from "../redux/actions";

const Todo = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={task.isDone?"complete":""}>
      <h1>{task.action} </h1>
      <button onClick={() => dispatch(del(task.id))}>delete</button>
      <button onClick={()=>dispatch(comp(task.id))}>{task.isDone?"Undo":"Complete"}</button>
    </div>
  );
};

export default Todo;
