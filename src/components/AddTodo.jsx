import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../features/Tasks";

function AddTodo() {
  const [todoInput, setTodoInput] = useState("");

  const idRef = useRef(0);

  const dispatch = useDispatch();

  function handleCreateTodo(e) {
    e.preventDefault();
    dispatch(create({ id: idRef.current++, title: todoInput, isDone: false }));
  }

  return (
    <section>
      <form onSubmit={handleCreateTodo}>
        <input
          type="text"
          placeholder="what's the task ?"
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button>create Todo</button>
      </form>
    </section>
  );
}

export default AddTodo;
