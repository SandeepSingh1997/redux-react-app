import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import TodoApp from "./components/TodoApp";

import userReducer from "./features/User";
import tasksReducer from "./features/Tasks";

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
