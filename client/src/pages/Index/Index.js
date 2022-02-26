import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  isEmpty,
  isEmail,
  isLength,
  isLengthUsername,
} from "../../utils/validations/Validation";

import { ErrMsg, SuccessMsg } from "../../utils/notifications/Notification";

const initialState = {
  username: "",
  email: "",
  password: "",
  err: "",
  success: "",
};

const Index = () => {
  const [user, setUser] = useState(initialState);

  const { username, email, password, err, success } = user;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(username) || isEmpty(email) || isEmpty(password))
      return setUser({
        ...user,
        err: toast.error("Por favor, rellene todos los campos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }),
        success: "",
      });

    if (!isEmail(email))
      return setUser({
        ...user,
        err: toast.error("Correo electrónico invalido", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }),
        success: "",
      });

    if (isLength(password))
      return setUser({
        ...user,
        err: toast.error("La contraseña debe contener al menos 6 carácteres", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }),
        success: "",
      });

    if (isLengthUsername(username))
      return setUser({
        ...user,
        err: toast.error("El usuario debe contener al menos 3 carácteres", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }),
        success: "",
      });

    try{
      const res = await axios.post("/user", {
        username,
        email,
        password,
      });

      localStorage.setItem("firstLogin", true);
     
      
      setUser({
        ...user,
       
        success: toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          err:""
        }), 
        
       
      });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, 
          err: toast.error(err.response.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className:"toast-alert",
          
          theme: "colored",
        }), 
        
        success: "" });
    }
  };
  return (
    <div>
      <header className="background-animate">
        <div className="header-container">
          <div className="container">
            <h1>SUMÉRGETE</h1>
          </div>
        </div>
        <section className="banner-container">
          <section className="banner-title">
            <div className="container-page" id="Container">
              <div className="login-container" id="LoginContainer">
                <label>
                  {err && ErrMsg(err)}
                  {success && SuccessMsg(success)}
                </label>
                <h1 className="title">Iniciar sesión</h1>
                <form action="">
                  <div className="input-line-container">
                    <span className="name-input">Usuario</span>
                    <input
                      type="text"
                      name="username"
                      className="input-line"
                      id=""
                    />
                  </div>
                  <div className="input-line-container">
                    <span className="name-input">Contraseña</span>
                    <input
                      type="text"
                      name="password"
                      className="input-line"
                      id=""
                    />
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
                        document.getElementById(
                          "LoginContainer"
                        ).style.display = "none";
                        document.getElementById(
                          "RegisterContainer"
                        ).style.display = "flex";
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
                      id="username"
                      value={username}
                      onChange={onChangeInput}
                    />
                    <p id="username-err" style={{ display: "none" }}>
                      Error
                    </p>
                  </div>
                  <div className="input-line-container">
                    <span className="name-input">Correo electrónico</span>
                    <input
                      type="email"
                      name="email"
                      className="input-line"
                      id="email"
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
                      id="password"
                      value={password}
                      onChange={onChangeInput}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Registrarse"
                    className="button-primary"
                  />
                  <span
                    id="Login"
                    className="button-second"
                    onClick={() => {
                      document.getElementById("Container").style.transform =
                        "rotateY(0deg)";
                      setTimeout(function () {
                        document.getElementById(
                          "LoginContainer"
                        ).style.display = "flex";
                        document.getElementById(
                          "RegisterContainer"
                        ).style.display = "none";
                      }, 400);
                    }}
                  >
                    ¿Ya tienes una cuenta?
                  </span>
                </form>
              </div>
            </div>
          </section>

          <div className="banner-image">
            <img src="submarine.svg" alt="" />
          </div>
        </section>

        <div className="effect">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <ToastContainer>
          {err && ErrMsg(err)}
          {success && SuccessMsg(success)}
        </ToastContainer>
      </header>
    </div>
  );
};

export default Index;
