import { useState } from "react";
import { useSelector } from "react-redux";

import Login from "./Login";

const style = { backgroundColor: "grey", height: "50px", width: "100%" };

export default function Header() {
  const [login, setLogin] = useState(false);

  //access the global state
  const user = useSelector((state) => state.user.value);

  return (
    <header style={style}>
      <span>{user.name}</span>
      <br />
      <span>{user.gender}</span>
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        User Login
      </button>
      {login && <Login />}
    </header>
  );
}
