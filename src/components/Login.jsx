import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/User";

const style = {
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  backgroundColor: "white",
  position: "relative",
  zIndex: "1",
};

export default function Login() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const dispatch = useDispatch();

  function handleUserLogin(event) {
    event.preventDefault();
    //update the store by dispatching the action to the store
    dispatch(login({ name: name, gender: gender }));
  }

  return (
    <form style={style} onSubmit={handleUserLogin}>
      <h2>User details</h2>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <label for="gender">Select gender</label>
      <select
        name="gender"
        onChange={(event) => {
          setGender(event.target.value);
        }}
      >
        <optgroup>
          <option>Male</option>
          <option>Female</option>
          <option>Prefer not to say</option>
        </optgroup>
      </select>
      <button>login</button>
    </form>
  );
}
