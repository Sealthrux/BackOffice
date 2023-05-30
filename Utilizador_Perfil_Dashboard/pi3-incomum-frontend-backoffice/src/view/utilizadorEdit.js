import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

const baseUrl = " ";

import Navbar from "../component/Navbar";
import { data } from "jquery";

export default function utilizadorEdit() {
  const [campImagem, setcampImagem] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campTelefone, setcampTelefone] = useState("");
  const [campPontos, setcampPontos] = useState("");
  const [campRegiao, setcampRegiao] = useState("");
  const [campIdTipoUser, setcampIdTipoUser] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const { idUser } = useParams();
  const navigate = useNavigate();

  const [Utilizador, setUtilizador] = useState("");
  const [tipoUtilizador, setTipoUtilizador] = useState("");
  
  useEffect(() => {

    const url = " ";
    setIsLoading(true);
    axios
    .get(url, { headers: authHeader(localStorage.getItem("utilizador")) })
    .then((res) => {
      if (res.data.success) {
        const data = res.data.data[0];
        console.log(data);
        setUtilizador(data);

        if(utilizador.tipou_id == 1){
          setTipoUtilizador("Administrador")
        }else if (utilizador.tipou_id == 2){
          setTipoUtilizador("Responsável da Região")}
          else if (utilizador.tipou_id == 3){            
            setTipoUtilizador("Agente Turístico")}
            else {
              setTipoUtilizador("Visitante")
            }
  
          setIsLoading(false);
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      });

    const url1 = baseUrl + "/utilizador/get/" + idUser;
    setIsLoading(true);
    axios
    .get(url1,  {headers: authHeader( localStorage.getItem("utilizador"))})
    .then((res) => {
        if (res.data.success) {
          const data1 = res.data.data;
          setcampImagem(data1.u_imagem);
          setcampNome(data1.u_nome);
          setcampEmail(data1.u_email);
          setcampTelefone(data1.u_telefone);
          setcampPontos(data1.u_pontos);
          setcampRegiao(data1.u_regiao);
          setcampIdTipoUtilizador(data1.tipou_id);
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>

      {/*navbar e sidenav aqui*/}

      <br/><br/>

      <div className="row col-12">
        <div className="col-2"></div>

        <div className="col-10 mt-5">
          {/*Grids*/}
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="form-row justify-content-center">
                  
                  {/* Imagem Aqui */}

                  <div className="form-group col-md-6">
                    <label htmlFor="inputNome">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      value={campNome}
                      onChange={(value) => setcampNome(value.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={campEmail}
                      onChange={(value) => setcampEmail(value.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Telefone</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Telefone"
                      value={campTelefone}
                      onChange={(value) => setcampTelefone(value.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Pontos</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Pontos"
                      value={campPontos}
                      onChange={(value) => setcampPontos(value.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Regiao</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Regiao"
                      value={campRegiao}
                      onChange={(value) => setcampRegiao(value.target.value)}
                    />
                  </div>
                  
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">
                      Id do tipo de utilizador
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="idTipoUser"
                      value={campIdTipoUser}
                      onChange={(value) =>
                        setcampIdTipoUser(value.target.value)
                      }/>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => sendUpdate()}>
                  Update
                </button>

              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function sendUpdate() {
    // url de backend
    const url = baseUrl + "/utilizador/update/" + idUser;
    const datapost = {
      tipou_id: campIdTipoUser,
      u_nome: campNome,
      u_email: campEmail,
      u_telefone: campTelefone,
      u_pontos: campPontos,
      u_regiao: campRegiao,
      u_imagem: campImagem,
    };

    console.log(datapost);

    axios
      .put(url, datapost,  {headers: authHeader( localStorage.getItem("utilizador"))})
      .then((response) => {
        console.log(response);

        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }
}