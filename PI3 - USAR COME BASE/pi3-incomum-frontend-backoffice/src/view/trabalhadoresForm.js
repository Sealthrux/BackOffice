import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";

import "../css/style.css";

import Navbar from "../component/Navbar";

export default function trabalhadoresForm() {
  const [campIdTipoTrabalhador, setcampIdTipoTrabalhador] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campDataNasc, setcampDataNasc] = useState("");
  const [campTlf, setcampTlf] = useState("");
  const [campNif, setcampNif] = useState("");
  const [campUsername, setcampUsername] = useState("");
  const [campPassword, setcampPassword] = useState("");

  const navigate = useNavigate();

  const [Trabalhador, setTrabalhador] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tipoTrabalhador, setTipoTrabalhador] = useState("");

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }else if(Trabalhador.idtipotrabalhador == 2){
    navigate("/clientesList");
  }else if(Trabalhador.idtipotrabalhador == 3){
    navigate("/clientesList");
  }

  useEffect(() => {


    const url =
      "https://backend-incomum.herokuapp.com/trabalhadores/getByToken";
    setIsLoading(true);
    axios
      .get(url, { headers: authHeader(localStorage.getItem("trabalhadores")) })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          console.log(data);
          setTrabalhador(data);

          if(Trabalhador.idtipotrabalhador == 1){
            setTipoTrabalhador("Administrador")
          }else if (Trabalhador.idtipotrabalhador == 2){
            setTipoTrabalhador("Editor")}
            else{            
              setTipoTrabalhador("Funcionário")}

          setIsLoading(false);
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <br />
      <br />
      <br />

      <p className="FuncTitulos">Novo trabalhador</p>
      <form className="NovoMembroForm container ">
        <div className="mb-3 row col-12">
          <label className="col-3 form-label ">TipoTrabalhadorId</label>

          <div className="container-fluid col-9">
            <select
              className="form-control  col-6"
              onChange={(value) => {
                setcampIdTipoTrabalhador(value.target.value);
              }}
            >
              <option value="3">Funcionário</option>
              <option value="2">Editor</option>
              <option value="1">Administrador</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label ">Nome</label>
          <input
            type="text"
            className="col form-control"
            id="MembroNome"
            value={campNome}
            onChange={(value) => setcampNome(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Email address</label>
          <input
            type="email"
            className="col form-control"
            value={campEmail}
            onChange={(value) => setcampEmail(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Data de nascimento</label>
          <input
            type="date"
            className="col form-control"
            value={campDataNasc}
            onChange={(value) => setcampDataNasc(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Telemovel</label>
          <input
            type="number"
            className="col form-control"
            value={campTlf}
            onChange={(value) => setcampTlf(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Nif</label>
          <input
            type="number"
            className="col form-control"
            value={campNif}
            onChange={(value) => setcampNif(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Username</label>
          <input
            type="password"
            className="col form-control"
            value={campUsername}
            onChange={(value) => setcampUsername(value.target.value)}
          />
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Password</label>
          <input
            type="password"
            className="col form-control"
            value={campPassword}
            onChange={(value) => setcampPassword(value.target.value)}
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
    if (campIdTipoTrabalhador === "") {
      alert("Insira IdTipoTrabalhador!");
    } else if (campNome === "") {
      alert("Insira Nome!");
    } else if (campEmail === "") {
      alert("Insira Email!");
    } else if (campDataNasc === "") {
      alert("Insira Data nascimento!");
    } else if (campTlf === "") {
      alert("Insira Telemovel!");
    } else if (campNif === "") {
      alert("Insira Nif!");
    } else {
      const baseUrl =
        "https://backend-incomum.herokuapp.com/trabalhadores/register";
      const datapost = {
        idtipotrabalhador: campIdTipoTrabalhador,
        nome: campNome,
        email: campEmail,
        datanasc: campDataNasc,
        tlf: campTlf,
        nif: campNif,
        username: campUsername,
        password: campPassword,
      };

      axios
        .post(baseUrl, datapost, {
          headers: authHeader(localStorage.getItem("trabalhadores")),
        })
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
