

import axios from "axios";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Link } from "react-router-dom";
/*Login*/
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../view/auth.service";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/style.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo é de preenchimento obrigatório!
      </div>
    );
  }
};


export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  
  async function HandleLogin(event) {
    event.preventDefault();
    setmessage("");
    setloading(true);
    AuthService.login(username, password)
      .then((res) => {
        if (res === "" || res === false) {
          setmessage("Autenticação falhou.");
          setloading(false);
        } else {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        setmessage("Autenticação falhou.");
        setloading(false);
      });
  }

  return (
      <div className="container-fluid">

        {/* Parte Cima */}
        <div className=" row border bg-light-pink p-5">
        <img
              src="https://incommun.pt/wp-content/uploads/2022/02/logotipoincommun.png"
              alt="incommun logo"
              loading="lazy"
            />
        </div>

        {/* Parte Baixo */}
        <h4 className="col-12 d-flex justify-content-center mt-5  mb-4">Login</h4>

        <form onSubmit={HandleLogin} >
          <div className="col-12 d-flex justify-content-center">
            <div className="form-group col-3 ">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username:"
                name="username"
                value={username}
                onChange={(value) => setusername(value.target.value)}
              />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="form-group  col-3 ">
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Passe:"
                name="password"
                value={password}
                onChange={(value) => setpassword(value.target.value)}
              />
            </div>
            </div>
          <div className="form-group  d-flex justify-content-center">
            <button className="button-caseiro bg-dark-pink text-light">
              <span>Entrar</span>
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
  );  
}
