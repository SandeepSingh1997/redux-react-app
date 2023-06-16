import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markComplete } from "../features/Tasks";

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
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        isChecked={isDone}
        onChange={(event) => {
          dispatch(markComplete({ taskId: id, isDone: event.target.checked }));
        }}
      />
      <span
        style={{ textDecorationLine: `${isDone ? "line-through" : "none"}` }}
      >
        {title}
      </span>
      <button
        onClick={() => {
          dispatch(deleteTask({ taskId: id }));
        }}
      >
        delete
      </button>
    </div>
  );
}

export default TodoList;
