import React, { useState } from "react";
import axios from "axios";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function Auth() {
  const [user, setUser] = useState(initialState);

  const { username, email, password } = user;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user", {
        username,
        email,
        password,
      });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-page" id="Container">
      <div className="login-container" id="LoginContainer">
        <h1 className="title">Iniciar sesión</h1>
        <form action="">
          <div className="input-line-container">
            <span className="name-input">Usuario</span>
            <input type="text" name="username" className="input-line" id="" />
          </div>
          <div className="input-line-container">
            <span className="name-input">Contraseña</span>
            <input type="text" name="password" className="input-line" id="" />
          </div>
          <input
            type="button"
            value="Iniciar sesión"
            className="button-primary"
          />
          <div
            type="submit"
            id="Register"
            className="button-second"
            onClick={() => {
              document.getElementById("Container").style.transform =
                "rotateY(360deg)";
              setTimeout(function () {
                document.getElementById("LoginContainer").style.display =
                  "none";
                document.getElementById("RegisterContainer").style.display =
                  "flex";
              }, 400);
            }}
          >
            ¡Registrarte gratis!
          </div>
        </form>
      </div>

      <div className="register-container" id="RegisterContainer">
        <h1 className="title">Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-line-container">
            <span className="name-input">Usuario</span>
            <input
              type="text"
              name="username"
              className="input-line"
              id=""
              value={username}
              onChange={onChangeInput}
            />
          </div>
          <div className="input-line-container">
            <span className="name-input">Correo electrónico</span>
            <input
              type="email"
              name="email"
              className="input-line"
              id=""
              value={email}
              onChange={onChangeInput}
            />
          </div>
          <div className="input-line-container">
            <span className="name-input">Contraseña</span>
            <input
              type="password"
              name="password"
              className="input-line"
              id=""
              value={password}
              onChange={onChangeInput}
            />
          </div>
          <input type="submit" value="Registrarse" className="button-primary" />
          <span
            id="Login"
            className="button-second"
            onClick={() => {
              document.getElementById("Container").style.transform =
                "rotateY(0deg)";
              setTimeout(function () {
                document.getElementById("LoginContainer").style.display =
                  "flex";
                document.getElementById("RegisterContainer").style.display =
                  "none";
              }, 400);
            }}
          >
            ¿Ya tienes una cuenta?
          </span>
        </form>
      </div>
    </div>
  );
}

export default Auth;
