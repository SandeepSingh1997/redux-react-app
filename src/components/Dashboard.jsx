import { useSelector } from "react-redux";

export default function Dashboard() {
  const tasks = useSelector((state) => state.tasks.value);
  const user = useSelector((state) => state.user.value);

  function numOfCompletedTasks() {
    const numOfCompletedTasks = tasks.reduce((acc, task) => {
      if (task.isDone) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return numOfCompletedTasks;
  }

  return (
    <section>
      <h1>{user.name}'s Task Dashboard</h1>
      <div>Total tasks : {tasks.length}</div>
      <div>Completed tasks : {numOfCompletedTasks()}</div>
    </section>
  );
}
