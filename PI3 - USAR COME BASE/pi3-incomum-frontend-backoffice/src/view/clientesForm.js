import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";

export default function clientesForm() {
  const [campIdHistorico, setcampIdHistorico] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }
  return (
    <div>
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 className="FuncTitulos">Novo Cliente</h1>
      <form className="NovoMembroForm container ">

        <div className="mb-3 row col-9">
          <label className="col-3 form-label">IdHistorico</label>
          <input
            type="number"
            className="col form-control"
            value={campIdHistorico}
            onChange={(value) => setcampIdHistorico(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-9">
          <label className="col-3 form-label">Nome</label>
          <input
            type="string"
            className="col form-control"
            value={campNome}
            onChange={(value) => setcampNome(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-9">
          <label className="col-3 form-label">Email</label>
          <input
            type="email"
            className="col form-control "
            value={campEmail}
            onChange={(value) => setcampEmail(value.target.value)}
          />
        </div>
        <div className="FormButtons">
          <button type="button" className="btn btn-primary Btn_Cancelar">
            Cancelar
          </button>
          <button type="clear" className="btn btn-primary Btn_Limpar">
            Limpar
          </button>
          <button
            type="submit"
            className="btn btn-primary Btn_Criar"
            onClick={() => SendSave()}
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );

    function SendSave() {
    event.preventDefault();
    if (campIdHistorico === "") {
      alert("Insira IdHistorico!");
    } else if (campNome === "") {
      alert("Insira Nome!");
    } else if (campEmail === "") {
      alert("Insira Email!");
    } else {
      const baseUrl = "https://backend-incomum.herokuapp.com/cliente/create";
      const datapost = {
        idhistorico: campIdHistorico,
        nome: campNome,
        email: campEmail,
      };
      console.log(datapost);

       axios
        .post(baseUrl, datapost,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
            window.location.reload();

          } else {
            alert(response.data.message);
            window.location.reload();

          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }
}
