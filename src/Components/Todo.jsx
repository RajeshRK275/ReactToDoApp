import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const sortedTodos = todos.slice().sort((a,b) => a.done - b.done);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={sortedTodos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
