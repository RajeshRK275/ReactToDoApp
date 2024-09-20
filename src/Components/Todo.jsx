import { useState } from "react";
import TodoItems from "./TodoItems";
import styles from "./Todo.module.css";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.FormStyle}>
          <div>
            <input
              className={styles.Inputbox}
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>

      <div className={styles.todoItems}>
        {todos.map((item) => (
          <div className={styles.subItem}>
            <TodoItems key={item} item={item} />
          </div>
        ))}
      </div>

    </div>
  );
}
