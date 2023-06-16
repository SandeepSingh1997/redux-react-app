import { useState } from "react";
import Login from "./Login";

const style = { backgroundColor: "grey", height: "40px", width: "100%" };

export default function Header() {
  const [login, setLogin] = useState(false);
  return (
    <header style={style}>
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
