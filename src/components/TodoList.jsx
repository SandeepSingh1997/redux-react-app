import { useSelector } from "react-redux";

function TodoList() {
  const tasks = useSelector((state) => state.tasks.value);

  function getAllTasks() {
    return tasks.map((task) => (
      <Todo
        key={task.id}
        id={task.id}
        title={task.title}
        isDone={task.isDone}
      />
    ));
  }

  return (
    <section>{tasks.length > 0 ? getAllTasks() : <h1>No tasks...</h1>}</section>
  );
}

function Todo({ id, title, isDone }) {
  return (
    <div>
      <input type="checkbox" isChecked={isDone} />
      <span>{title}</span>
    </div>
  );
}

export default TodoList;
