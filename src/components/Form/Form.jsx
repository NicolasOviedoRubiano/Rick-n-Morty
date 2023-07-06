import React from "react";
import { useState } from "react";
import Validate from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      Validate({ ...userData, [event.target.name]: event.target.value })
    );
  };
  const handleLogIn = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <form>
      <label>
        <input
          onChange={handleInput}
          type="text"
          name="email"
          placeholder="Email"
          value={userData.email}
        />
        {errors.email ? <p>{errors.email}</p> : null}
      </label>
      <label>
        <input
          onChange={handleInput}
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
        />
        {errors.password ? <p>{errors.password}</p> : null}
      </label>
      <input type="submit" value={"Iniciar sesión"} onClick={handleLogIn} />
    </form>
  );
}
