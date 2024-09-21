import styles from "./footer.module.css"
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed ToDo's : {completedTodos}</span>
      <span className={styles.item}>Total ToDo's : {totalTodos}</span>
    </div>
  );
}
