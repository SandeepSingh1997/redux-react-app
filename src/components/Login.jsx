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
  return (
    <form style={style}>
      <h2>User details</h2>
      <input type="text" placeholder="name" />

      <label for="gender">Select gender</label>
      <select name="gender">
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
