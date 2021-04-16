import axios from "axios";
import { useState, useEffect } from "react";
function Login() {
  const [name, setName] = useState("");
  // axios
  const grab = () => {
    axios
      .post("/api/login", data)
      .then(setName(res.data.name), localStorage.setItem("name", name));
  };
  render(<div>Hello {name}</div>);
}

const Profile = (props) => {
  render(
    <div>
      <h1> Belongs To {props.whatever}</h1>
    </div>
  );
};   