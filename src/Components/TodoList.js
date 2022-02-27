import React from "react";
import { useState } from "react";
import Todo from "./Todo";
import Todoform from "./TodoForm";

export default function TodoList(props) {
  //state Array which holds all TODOS
  const [todos, setTodos] = useState([]);

  //Add todo to list
  const addTask = (task) => {
    if (!task.text) {
      return;
    }

    const newTodos = [task, ...todos];
    setTodos(newTodos);
  };

  //remove todo from list
  const removeTask = (id) => {
    let updatedTasks = [...todos].filter((task) => task.id !== id);
    setTodos(updatedTasks);
  };

  // task is completed
  const completeTask = (id) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });
    setTodos(updatedTasks);
  };
  return (
    <div>
      <Todoform addTask={addTask}></Todoform>
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}>
        {" "}
      </Todo>
    </div>
  );
}
