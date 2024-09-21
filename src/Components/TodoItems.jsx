import styles from "./todoItems.module.css";

export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked on item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleCompleted(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const completedItem = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={completedItem}
          onClick={() => handleCompleted(item.name)}
        >
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
