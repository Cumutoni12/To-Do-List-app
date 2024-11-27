import React from "react";
import TodoItem from "./ToDoItem";
function ToDoList() {
  function Todolist({ task, toggleTask, deleteTask }) {}
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
