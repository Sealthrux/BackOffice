import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";

import "../css/style.css";

import Navbar from "../component/Navbar";

export default function utilizadorAdd() {
  const [campImagem, setcampImagem] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campTelefone, setcampTelefone] = useState("");
  const [campPontos, setcampPontos] = useState("");
  const [campRegiao, setcampRegiao] = useState("");
  const [campIdTipoUser, setcampIdTipoUser] = useState("");

  const navigate = useNavigate();

  const [utilizador, setUtilizador] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tipoUtilizador, setTipoUtilizador] = useState("");

  useEffect(() => {

  //   const url = " ";
  //   setIsLoading(true);
  //   axios
  //   .get(url, { headers: authHeader(localStorage.getItem("utilizador")) })
  //   .then((res) => {
  //     if (res.data.success) {
  //       const data = res.data.data[0];
  //       console.log(data);
  //       setUtilizador(data);

  //       if(utilizador.tipou_id == 1){
  //         setTipoUtilizador("Administrador")
  //       }else if (utilizador.tipou_id == 2){
  //         setTipoUtilizador("Responsável da Região")}
  //         else if (utilizador.tipou_id == 3){            
  //           setTipoUtilizador("Agente Turístico")}
  //           else {
  //             setTipoUtilizador("Visitante")
  //           }

  //         setIsLoading(false);
  //       } else {
  //         alert("Error web service");
  //       }
  //     })
  //     .catch((error) => {
  //       alert("Error server: " + error);
  //     });
   }, []);

  return (
    <div>

      {/*navbar e sidenav aqui*/}

      <br/><br/><br/>

      <p className="FuncTitulos">Novo utilizador</p>
      <form className="NovoMembroForm container ">
        
        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Imagem</label>
          <input
            type="text"
            className="col form-control"
            value={campImagem}
            onChange={(value) => setcampImagem(value.target.value)}/>
        </div>

        <div className="mb-3 row col-12">
          <label className="col-3 form-label ">Nome</label>
          <input
            type="text"
            className="col form-control"
            value={campNome}
            onChange={(value) => setcampNome(value.target.value)}/>
        </div>

        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Email</label>
          <input
            type="email"
            className="col form-control"
            value={campEmail}
            onChange={(value) => setcampEmail(value.target.value)}/>
        </div>

        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Telefone</label>
          <input
            type="number"
            className="col form-control"
            value={campTelefone}
            onChange={(value) => setcampTelefone(value.target.value)}/>
        </div>

        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Pontos</label>
          <input
            type="number"
            className="col form-control"
            value={campPontos}
            onChange={(value) => setcampPontos(value.target.value)}/>
        </div>

        <div className="mb-3 row col-12">
          <label className="col-3 form-label">Regiao</label>
          <input
            type="text"
            className="col form-control"
            value={campRegiao}
            onChange={(value) => setcampRegiao(value.target.value)}/>
        </div>

        <div className="mb-3 row col-12">
          <label className="col-3 form-label ">Tipo User Id</label>

          <div className="container-fluid col-9">
            <select
              className="form-control  col-6"
              onChange={(value) => {
                setcampIdTipoUser(value.target.value);
              }}>
              <option value="3">Agente Turístico</option>
              <option value="2">Responsável da Região</option>
              <option value="1">Administrador</option>
            </select>
          </div>
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
            onClick={() => SendSave()}>
            Criar
          </button>
        </div>
      </form>
    </div>
  );

  function SendSave() {
    event.preventDefault();
    if (campIdTipoUser === "") {
      alert("Insira Tipo de User!");
    } else if (campNome === "") {
      alert("Insira Nome!");
    } else if (campEmail === "") {
      alert("Insira Email!");
    } else if (campTelefone === "") {
      alert("Insira Telefone!");
    } else if (campPontos === "") {
      alert("Insira Pontos!");
    } else if (campRegiao === "") {
      alert("Insira Regiao!");
    } else if (campImagem === "") {
      alert("Insira Imagem")
    } else {
      const baseUrl =
        "http://localhost:3000/utilizador/create";
      const datapost = {
        tipou_id: campIdTipoUser,
        u_nome: campNome,
        u_email: campEmail,
        u_telefone: campTelefone,
        u_pontos: campPontos,
        u_regiao: campRegiao,
        u_imagem: campImagem,
      };

      axios
        .post(baseUrl, datapost, {
          headers: authHeader(localStorage.getItem("utilizador")),
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