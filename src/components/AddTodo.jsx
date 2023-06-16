import { useState } from "react";

function AddTodo() {
  const [todoInput, setTodoInput] = useState("");

  return (
    <section>
      <form>
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
